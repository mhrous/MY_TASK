import operator
from time import sleep,time

import cv2
import numpy as np

from utils.file import get_file
from utils.preprocess import pre_process
from utils.rectangle import Rect

KNN_TRAINING_IMAGE_PATH = ".\\Data\\knn Train Image"
KNN_FILE_PATH = ".\\Data\\knn file"

RESIZED_IMAGE_WIDTH = 20
RESIZED_IMAGE_HEIGHT = 30
MIN_CONTOUR_AREA = 25

RECT_COLOR = (255, 0, 0)
RECT_THICKNESS = 1

DIGIT_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0]

SLEEP = .1
SHOW_STEP = False


def main():
    START_TIME = time()
    images_path = get_file(KNN_TRAINING_IMAGE_PATH)
    np_images = np.empty((0, RESIZED_IMAGE_WIDTH * RESIZED_IMAGE_HEIGHT))
    classifications = []

    for path in images_path:
        cv2.destroyAllWindows()

        image = cv2.imread(path)
        image_process = pre_process(image)
        image_gray, image_thresh = image_process['gray'], image_process["thresh"]
        image_thresh_copy = image_thresh.copy()
        _, np_contours, _ = cv2.findContours(
            image_thresh_copy,
            cv2.RETR_EXTERNAL,
            cv2.CHAIN_APPROX_SIMPLE
        )
        contours_rect = []
        for contour in np_contours:
            [x, y, w, h] = cv2.boundingRect(contour)
            rect = Rect(x, y, w, h)
            if rect.check_area(MIN_CONTOUR_AREA):
                contours_rect.append(rect)

        contours_rect.sort()
        for digit_index, rect in enumerate(contours_rect):
            digit = DIGIT_LIST[digit_index]

            cv2.rectangle(
                image,
                rect.top_left_point.get(),
                rect.bottom_right_point.get(),
                RECT_COLOR,
                RECT_THICKNESS
            )

            digit_image = image_thresh[rect.y:rect.y + rect.h, rect.x:rect.x + rect.w]
            digit_image_resized = cv2.resize(
                digit_image,
                (RESIZED_IMAGE_WIDTH, RESIZED_IMAGE_HEIGHT)
            )

            if SHOW_STEP:
                cv2.imshow(f"main image", image)
                cv2.imshow(f"thresh image", image_thresh)
                cv2.imshow(f"digit {digit}", digit_image_resized)
                cv2.waitKey(1)
                sleep(SLEEP)
                cv2.destroyAllWindows()
            classifications.append(digit)
            np_digit = digit_image_resized.reshape(
                (1, RESIZED_IMAGE_HEIGHT * RESIZED_IMAGE_WIDTH)
            )
            np_images = np.append(np_images, np_digit, 0)

    classifications = np.array(classifications, np.int8)
    classifications = classifications.reshape((classifications.size, 1))
    np.savetxt(f"{KNN_FILE_PATH}\\classifications.txt", classifications)
    np.savetxt(f"{KNN_FILE_PATH}\\images.txt", np_images)
    print(f"TIME : {time() - START_TIME}")


if __name__ == "__main__":
    main()

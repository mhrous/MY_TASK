from time import time

import cv2
import numpy as np

from utils.file import get_file
from utils.preprocess import pre_process
from utils.rectangle import Rect

TEST_IMAGE_PATH = ".\\Data\\Test\\image plate"
CLASSIFICATIONS_PATH = ".\\Data\\knn file\\classifications.txt"
IMAGES_PATH = ".\\Data\\knn file\\images.txt"
RESIZED_IMAGE_WIDTH = 20
RESIZED_IMAGE_HEIGHT = 30

SLEEP = 2
SHOW_STEP = True


def main():
    start_time = time()
    images_path = get_file(TEST_IMAGE_PATH)
    classifications = np.loadtxt(CLASSIFICATIONS_PATH, np.float32)
    images = np.loadtxt(IMAGES_PATH, np.float32)
    classifications = classifications.reshape((classifications.size, 1))
    knn_nearest = cv2.ml.KNearest_create()
    knn_nearest.train(images, cv2.ml.ROW_SAMPLE, classifications)
    for path in images_path:
        correct_number = path.split("\\")[-1][:-4]
        found_number = ""
        image = cv2.imread(path)
        image_process = pre_process(image)
        image_gray, image_thresh = image_process['gray'], image_process["thresh"]
        image_thresh_copy = image_thresh.copy()
        _, contours, _ = cv2.findContours(
            image_thresh_copy,
            cv2.RETR_LIST,
            cv2.CHAIN_APPROX_NONE
        )
        all_rect = []
        for contour in contours:
            [x, y, w, h] = cv2.boundingRect(contour)
            rect = Rect(x, y, w, h)
            all_rect.append(rect)
            cv2.rectangle(
                image,
                rect.top_left_point.get(),
                rect.bottom_right_point.get(),
                (0, 255, 0),
                2
            )

        all_rect.sort()
        for rect in all_rect:
            digit_image = image_thresh[ rect.y:rect.y + rect.h,rect.x:rect.x + rect.w]


            digit_resize = cv2.resize(digit_image, (RESIZED_IMAGE_WIDTH, RESIZED_IMAGE_HEIGHT))
            np_digit = digit_resize.reshape((1, RESIZED_IMAGE_WIDTH * RESIZED_IMAGE_HEIGHT))
            np_digit = np.float32(np_digit)
            _, result, _, _ = knn_nearest.findNearest(np_digit, k=1)
            found_number = found_number + str(int(result[0][0]))



        if SHOW_STEP :
            cv2.imshow("main", image)
            cv2.imshow("image thresh", image_thresh)
            cv2.waitKey(int(SLEEP * 1000))
            cv2.destroyAllWindows()
        print(image_thresh.shape)

        print(f" found Number : {found_number} ---> correct number : {correct_number}\n{'*' * 100}\n")

    print(f"TIME : {time() - start_time}")


if __name__ == "__main__":
    main()

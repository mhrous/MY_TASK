from time import time
import cv2

from detectPlates import detect_plates_in_image
from utils.file import set_file_empty, get_file

TEST_IMAGE_PATH = ".\\Data\\Test\\image"
TEST_IMAGE_RESULT_PATH = ".\\Data\\Test\\image result"

TEST_IMAGE =""
RESULT = None

images_path = []

SLEEP = 3
SHOW_STEP = True


def main():
    init_data()
    start_time = time()
    for path in images_path:
        correct_number = path.split("\\")[-1][:6]
        image = cv2.imread(path)
        # if image.shape[0] > 600:
        #     resize = round(600/image.shape[0],2)
        #     print(resize)
        #     image = cv2.resize(image, (0, 0), 0.1, 0.1)
        plates = detect_plates_in_image(image, show_step=SHOW_STEP, time_sleep=SLEEP)

    print(f"TIME : {time() - start_time}")


def init_data():
    global images_path, TEST_IMAGE_RESULT_PATH, TEST_IMAGE_PATH

    set_file_empty(TEST_IMAGE_RESULT_PATH)

    if TEST_IMAGE:
        images_path = [TEST_IMAGE]
    else:
        images_path = get_file(TEST_IMAGE_PATH)

    if RESULT:
        TEST_IMAGE_RESULT_PATH = RESULT


if __name__ == "__main__":
    main()

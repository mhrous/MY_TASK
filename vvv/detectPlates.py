from time import sleep

import cv2
import numpy as np

from char import Char
from utils.preprocess import pre_process


def detect_plates_in_image(image, show_step=False, time_sleep=0):
    plates = []
    image_process = pre_process(image)
    image_gray, image_thresh = image_process['gray'], image_process["thresh"]
    chars = find_char_in_image(image_thresh)
    image_thresh_char = np.zeros(image_thresh.shape)
    for char in chars:
        image_thresh_char[char.rect.x:char.rect.x + char.rect.w, char.rect.y:char.rect.y + char.rect.h] = \
            image_thresh[char.rect.x:char.rect.x + char.rect.w, char.rect.y:char.rect.y + char.rect.h]

    if show_step :
        cv2.imshow(f"main image", image)
        cv2.imshow(f"thresh image", image_thresh)
        cv2.imshow("image thresh chars", image_thresh_char)
        cv2.waitKey(int(time_sleep * 1000))
        cv2.destroyAllWindows()


    return plates


def find_char_in_image(image_thresh):
    image_thresh_copy = image_thresh.copy()
    _, contours, _ = cv2.findContours(
        image_thresh_copy,
        cv2.RETR_LIST,
        cv2.CHAIN_APPROX_NONE
    )
    chars = [Char(contour) for contour in contours]
    chars_valid = [char for char in chars if char.check_is_valid()]
    return chars_valid

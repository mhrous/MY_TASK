import cv2
import numpy as np

GAUSSIAN_SMOOTH_FILTER_SIZE = (5, 5)
ADAPTIVE_THRESH_BLOCK_SIZE = 19
ADAPTIVE_THRESH_WEIGHT = 9

DILATION_KERNEL = np.ones((5, 5), np.uint8)
DILATION_ITERATION = 3


def pre_process(img):
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    img_max_contrast_grays = maximize_contrast(img_gray)
    img_blurred = cv2.GaussianBlur(
        img_max_contrast_grays,
        GAUSSIAN_SMOOTH_FILTER_SIZE,
        0
    )
    img_thresh = cv2.adaptiveThreshold(
        img_blurred,
        255.0,
        cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
        cv2.THRESH_BINARY_INV,
        ADAPTIVE_THRESH_BLOCK_SIZE,
        ADAPTIVE_THRESH_WEIGHT
    )
    return {"gray": img_gray, "thresh": img_thresh}


def maximize_contrast(img_gray):
    structuring_element = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3))
    img_top_hat = cv2.morphologyEx(img_gray, cv2.MORPH_TOPHAT, structuring_element)
    img_black_hat = cv2.morphologyEx(img_gray, cv2.MORPH_BLACKHAT, structuring_element)
    img_gray_plus_top_hat = cv2.add(img_gray, img_top_hat)
    img_gray_plus_top_hat_minus_black_hat = cv2.subtract(img_gray_plus_top_hat, img_black_hat)

    return img_gray_plus_top_hat_minus_black_hat

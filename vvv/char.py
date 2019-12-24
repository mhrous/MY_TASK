import cv2

from utils.rectangle import Rect

MIN_CHAR_AREA = 40
MAX_CHAR_AREA = 800000000
MIN_CHAR_WIDTH = 1
MAX_CHAR_WIDTH = 200
MIN_CHAR_HEIGHT = 8
MAX_CHAR_HEIGHT = 300000
MIN_CHAR_ASPECT_RATIO = 0.1
MAX_CHAR_ASPECT_RATIO = 1


class Char:

    def __init__(self, contour):
        [x, y, w, h] = cv2.boundingRect(contour)
        self.rect = Rect(x, y, w, h)
        self.char = ""

    def check_is_valid(self):
        return \
             MIN_CHAR_ASPECT_RATIO < self.rect.aspect_ratio < MAX_CHAR_ASPECT_RATIO

            # and MIN_CHAR_WIDTH < self.rect.w < MAX_CHAR_WIDTH
            # and MIN_CHAR_HEIGHT < self.rect.h < MAX_CHAR_HEIGHT \
            # and MIN_CHAR_AREA < self.rect.area < MAX_CHAR_AREA \

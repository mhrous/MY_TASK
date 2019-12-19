from math import inf

from utils.point import Point


class Rect:
    def __init__(self, x, y, w, h):
        self.x = x
        self.y = y
        self.w = w
        self.h = h
        self.center_x = x + w / 2
        self.center_y = y + h / 2
        self.top_left_point = Point(x, y)
        self.bottom_right_point = Point(x + w, y + h)
        self.center_point = Point(self.center_x, self.center_y)
        self.area = w * h
        self.diameter_length = (self.top_left_point - self.bottom_right_point).len()
        self.aspect_ratio = self.w / self.h

    def __sub__(self, other):
        return (self.top_left_point - other.top_left_point).len()

    def __lt__(self, other):
        return self.x < other.x

    def check_area(self, _min=0, _max=inf):
        return _min < self.area < _max

from math import sqrt


class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __sub__(self, other):
        return Point(self.x - other.x, self.y - other.y)

    def get(self):
        return self.x, self.y

    def len(self):
        return sqrt(self.x ** 2 + self.y ** 2)

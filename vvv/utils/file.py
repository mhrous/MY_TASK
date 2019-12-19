from os import listdir, unlink
from os.path import isfile, join


def get_file(path):
    return [
        f"{path}\\{file_name}"
        for file_name in listdir(path)
        if isfile(join(path, file_name))
    ]


def set_file_empty(path):
    files = get_file(path)
    for f in files:
        unlink(join('.\\', f))

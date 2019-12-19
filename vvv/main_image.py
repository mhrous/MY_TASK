
from utils.file import set_file_empty

TEST_IMAGE_PATH = ".\\Data\\Test\\image"
TEST_IMAGE_RESULT_PATH = ".\\Data\\Test\\image result"

TEST_IMAGE = None
RESULT = None

def main():
    set_file_empty(TEST_IMAGE_RESULT_PATH)
    pass

def init_data():
    set_file_empty(TEST_IMAGE_RESULT_PATH)

if __name__ == "__main__":
    main()

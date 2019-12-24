
def detectPlatesInScene(imgOriginalScene):
    listOfPossiblePlates = []

    cv2.destroyAllWindows()

    imgGrayscaleScene, imgThreshScene = _Preprocess.preprocess(imgOriginalScene)

    listOfPossibleCharsInScene = findPossibleCharsInScene(imgThreshScene)

    listOfListsOfMatchingCharsInScene = _DetectChars.findListOfListsOfMatchingChars(listOfPossibleCharsInScene)

    for listOfMatchingChars in listOfListsOfMatchingCharsInScene:  # for each group of matching chars
        possiblePlate = extractPlate(imgOriginalScene, listOfMatchingChars)  # attempt to extract plate

        if possiblePlate.imgPlate is not None:  # if plate was found
            listOfPossiblePlates.append(possiblePlate)  # add to list of possible plates

    return listOfPossiblePlates

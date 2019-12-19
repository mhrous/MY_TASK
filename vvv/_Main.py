import _DetectChars
import _DetectPlates
import cv2

BORDER_LICENSE_PLATEL = (0.0, 0.0, 255.0)
SCALAR_GREEN =(0,255, 0)


def main():
    blnKNNTrainingSuccessful = _DetectChars.loadKNNDataAndTrainKNN()

    imgOriginalScene = cv2.imread("LicPlateImages/9999.jpg")

    listOfPossiblePlates = _DetectPlates.detectPlatesInScene(imgOriginalScene)

    listOfPossiblePlates = _DetectChars.detectCharsInPlates(listOfPossiblePlates)

    cv2.imshow("imgOriginalScene", imgOriginalScene)

    if len(listOfPossiblePlates) == 0:
        print("\nno license plates were detected\n")
    else:

        listOfPossiblePlates.sort(key=lambda possiblePlate: len(possiblePlate.strChars), reverse=True)

        licPlate = listOfPossiblePlates[0]

        cv2.imshow("imgPlate", licPlate.imgPlate)
        cv2.imshow("imgThresh", licPlate.imgThresh)

        if len(licPlate.strChars) == 0:
            return
        print(f"licplate : {licPlate.strChars}")

        drawRedRectangleAroundPlate(imgOriginalScene, licPlate)


        cv2.imshow("imgOriginalScene", imgOriginalScene)

        cv2.imwrite("imgOriginalScene.png", imgOriginalScene)

    cv2.waitKey(0)

    return


def drawRedRectangleAroundPlate(imgOriginalScene, licPlate):
    p2fRectPoints = cv2.boxPoints(licPlate.rrLocationOfPlateInScene)

    cv2.line(imgOriginalScene, tuple(p2fRectPoints[0]), tuple(p2fRectPoints[1]), BORDER_LICENSE_PLATEL, 2)  # draw 4 red lines
    cv2.line(imgOriginalScene, tuple(p2fRectPoints[1]), tuple(p2fRectPoints[2]), BORDER_LICENSE_PLATEL, 2)
    cv2.line(imgOriginalScene, tuple(p2fRectPoints[2]), tuple(p2fRectPoints[3]), BORDER_LICENSE_PLATEL, 2)
    cv2.line(imgOriginalScene, tuple(p2fRectPoints[3]), tuple(p2fRectPoints[0]), BORDER_LICENSE_PLATEL, 2)


if __name__ == "__main__":
    main()

const cv = require("@u4/opencv4nodejs");

function faceSwap(imgPath1, imgPath2, x, y, w, h) {
    try {
        const image1 = cv.imread(imgPath1);
        const image2 = cv.imread(imgPath2);

        const swappedRegion = new cv.Rect(x, y, w, h);

        const face1 = image1.getRegion(swappedRegion);
        const face2 = image2.getRegion(swappedRegion);

        const tempImage = new cv.Mat(h, w, cv.CV_8UC3);

        face1.copyTo(tempImage);
        face2.copyTo(face1);
        tempImage.copyTo(face1);

        cv.imshowWait('face swapped image 1', image1);
        cv.imshowWait('face swapped image 2', image2);
        cv.destroyAllWindows();


    } catch (error) {
        console.error(error);
    }
}

faceSwap('test/Passport_photo_2x2_inch.jpg', 'test/passport-photo.jpg', 97, 49, 105, 108)
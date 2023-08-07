// segmenting by skin color (has to be adjusted)
const cv = require("@u4/opencv4nodejs");

const skinColorUpper = hue => new cv.Vec(hue, 0.8 * 255, 0.6 * 255);
const skinColorLower = hue => new cv.Vec(hue, 0.1 * 255, 0.05 * 255);

const makeHandMask = (img) => {
    // filter by skin color
    const imgHLS = img.cvtColor(cv.COLOR_BGR2HLS);
    const rangeMask = imgHLS.inRange(skinColorLower(0), skinColorUpper(15));
    // remove noise
    const blurred = rangeMask.blur(new cv.Size(10, 10));
    const thresholded = blurred.threshold(
        200,
        255,
        cv.THRESH_BINARY
    );

    // const newImage = cv.imwrite('./photo4.jpg', thresholded);
    return thresholded;
};

const getHandContour = (handMask) => {
    const contours = handMask.findContours(
        cv.RETR_EXTERNAL,
        cv.CHAIN_APPROX_SIMPLE
    );
    // largest contour
    return contours.sort((c0, c1) => c1.area - c0.area)[0];
};

// console.log(makeHandMask(cv.imread("hand.jpg")));

const originalImage = makeHandMask(cv.imread('hand.jpg'))

console.log(getHandContour(originalImage));
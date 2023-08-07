const cv = require('@u4/opencv4nodejs');

function cropImagerectangle(imgPath, x, y, w, h, outputPath) {
    try {
        const originalImage = cv.imread(imgPath);
        const croppedImage = originalImage.getRegion(new cv.Rect(x, y, w, h));
        cv.imwrite(outputPath, croppedImage);
        console.log(`image Successfully cropped : ${outputPath}`);
    } catch (error) {
        console.error(error);
    }
};

cropImagerectangle('test/mustang.jpg', 310, 293, 267, 133, 'test/mustang_logo_cropped.jpg');
cropImagerectangle('test/mustang.jpg', 27, 303, 124, 109, 'test/mustang_left_headlight_cropped.jpg');
cropImagerectangle('test/mustang.jpg', 727, 311, 126, 108, 'test/mustang_right_headlight_cropped.jpg');


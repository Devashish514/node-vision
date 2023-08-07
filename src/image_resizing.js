const cv = require("@u4/opencv4nodejs");

function ImageResize(imgPath, w, h, outputPath) {
    try {
        const originalImage = cv.imread(imgPath);
        const resizedImage = originalImage.resize(new cv.Size(w, h));

        cv.imwrite(outputPath, resizedImage);
        console.log(`successfully resized : ${outputPath}`);

        cv.imshowWait('originalImage', originalImage);
        cv.imshowWait('resizedImage', resizedImage);
        cv.destroyAllWindows();
    } catch (error) {
        console.error(error);
    }
};

ImageResize('test/photo.jpg', 250, 400, 'test/resizedImage.jpg');
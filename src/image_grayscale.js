const cv = require("@u4/opencv4nodejs");

function convertToGrayScale(image) {
    try {
        return image.cvtColor(cv.COLOR_BGR2GRAY);
    } catch (error) {
        console.error(error);
    }
}

function convertToHSL(image) {
    return image.cvtColor(cv.COLOR_BGR2HLS);
}

function processImage(imagePath, outputPath) {
    let originalImage = cv.imread(imagePath);

    // originalImage = convertToGrayScale(originalImage);
    // originalImage = convertToHSL(originalImage);

    cv.imwrite(outputPath, originalImage);

    console.log('Image processed successfully. Output saved to:', outputPath);
}

processImage('photo.jpg', 'test/gray.jpg');
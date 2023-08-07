const cv = require('@u4/opencv4nodejs');
const { convertToGrayScale } = require('./image_grayscale');

function countObjectsInImage(imgPath, outputPath) {
    try {
        const originalImage = cv.imread(imgPath);
        const gray = convertToGrayScale(originalImage);

        //removing noise 
        const blurred = gray.blur(new cv.Size(10, 10));

        //convert image to binary Image (black and white) where pixels above the thresholdValue becomes white(255) and below/equal black(0);
        const thresholdValue = 200;
        const binaryImage = blurred.threshold(thresholdValue, 255, cv.THRESH_BINARY);

        // cv.imwrite(outputPath, binaryImage);

        const edges = binaryImage.canny(50, 150);

        cv.imwrite(outputPath, edges);
        // console.log(edges);

        // find contour
        // contour is basically the outer boundary of the objects in binary image;
        const contour = binaryImage.findContours(cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

        // cv.imwrite(outputPath, contour); // thorws error as contour is an array of outlined objects;
        // console.log(contour);
        return contour.length;

    } catch (error) {
        console.error(error);
    }
};


const outputPath = 'test/edges_object_counting.jpg';
const imgPath = 'test/multiObjects.jpg';

console.log(countObjectsInImage(imgPath, outputPath));
const cv = require('@u4/opencv4nodejs');
const { convertToGrayScale } = require('./image_grayscale');

function detectEdges(imgPath) {
    try {
        const originalImage = cv.imread(imgPath);

        //converting BGR image to Grayscale
        const gray = convertToGrayScale(originalImage);

        //apply canny edge detection 
        const edges = gray.canny(50, 150);
        return edges;
    } catch (error) {
        console.error(error);
    }
};

//write image with edges...
cv.imwrite('test/cannyEdges.jpg',detectEdges('test/hand.jpg'));

//displays a window of processed image...
cv.imshowWait('edges',detectEdges('test/hand.jpg'));
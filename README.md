## OpenCV

Learning OpenCV with NodeJs....

### Installation(Linux)

```
sudo apt-get update && sudo apt install -y cmake g++ wget unzip;

wget -O opencv.zip https://github.com/opencv/opencv/archive/4.x.zip
unzip opencv.zip

or 

git clone https://github.com/opencv/opencv.git
git -C opencv checkout 4.x

mkdir -p build && cd build;
cmake ../opencv;

sudo make install;

npm i -g node-gyp;  //mandatory
npm i --save  @u4/opencv4nodejs;

```

#### Once OpenCV and opencv4nodejs npm package installed:

*** node src/filename.js *** to run each function.
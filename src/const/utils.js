import { Dimensions, PixelRatio  } from "react-native"

export const sHeight = Dimensions.get('screen').height;
export const sWidth = Dimensions.get('screen').width;
export const wHeight = Dimensions.get('window').height;
export const wWidth = Dimensions.get('window').width;

let screenWidth = Dimensions.get('window').width;

let screenHeight = Dimensions.get('window').height;

export const wDP = widthPercent => {
  const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

export const hDP = heightPercent => {
  const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

export const listenOrientationChange = that => {
  Dimensions.addEventListener('change', newDimensions => {
    screenWidth = newDimensions.window.width;
    screenHeight = newDimensions.window.height;
    that.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape'
    });
  });
};


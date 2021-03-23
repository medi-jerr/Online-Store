import types from "./types";

/**
 *@function changeColor
 * @param {string} color -Get color
 * @returns {string} -send a new color
 */
export const changeColor = (color) => (dispatch, getState) => {
  dispatch({
    type: types.CHANGE_COLOR,
    payload: color,
  });
};

/**
 * @function getImage
 * @param {array} data -A data background images
 * @returns {array} -Data background images
 */
export const getImage = (data) => (dispatch, getState) => {
  dispatch({
    type: types.GET_IMAGES,
    payload: data,
  });
};
/**
 *
 * @param {string} image
 */
export const choosingBack = (image) => (dispatch, getState) => {
  // let images = getState().images.images;
  // console.log(image)
  if (image) {
    dispatch({
      type: types.FIRST_IMAGE,
      payload: image,
    });
  } else {
    let images = getState().images.images;
    dispatch({
      type: types.FIRST_IMAGE,
      payload: images[0],
    });
  }
};
/**
 * this function is for stop the slider
 * @function fixBack
 * @returns {boolean} -
 */
export const fixBack = () => (dispatch, getState) => {
  dispatch({
    type: types.FIX_BACK,
    payload: true,
  });
  clearInterval(theInterval);
  let image = getState().images.image;
  localStorage.setItem("background", image);
  localStorage.setItem("stopSlide", true);
};

/**
 * * this function is for restart the slider
 * @function restartSlide
 * @returns {boolean}
 */

export const restartSlide = () => (dispatch, getState) => {
  dispatch({
    type: types.RESTART_SLIDE,
    payload: false,
  });
  dispatch(backgroundSlide());
  localStorage.removeItem("stopSlide");
  localStorage.removeItem("background");
};
/**
 * the Interval
 */
let theInterval;

/**
 *
 */
export const theSlide = (theBoal) => (dispatch, getState) => {
  if (theBoal) {
    let bo = JSON.parse(theBoal);
    dispatch({
      type: types.SLIDE_WORK,
      payload: bo,
    });
  }
};

/**
 * @function backgroundSlide
 * @returns {string} -The random image
 */
export const backgroundSlide = () => (dispatch, getState) => {
  let images = getState().images.images;
  let stopSlide = getState().images.stopSlide;

  if (stopSlide == false) {
    theInterval = setInterval(() => {
      let rand = Math.floor(Math.random() * images.length);
      dispatch({
        type: types.RANDOM_IMAGE,
        payload: images[rand],
      });
    }, 5000);
  }
};

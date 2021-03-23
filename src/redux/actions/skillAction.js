import typesSkill from "./typesSkill";

/**
 *
 * @param {string} height
 */
export const theHeight1 = (height) => (dispatch, getState) => {
  dispatch({
    type: typesSkill.LANDING_HEIGHT,
    payload: height,
  });
};

export const theHeight2 = (height) => (dispatch, getState) => {
  dispatch({
    type: typesSkill.ABOUT_HEIGHT,
    payload: height,
  });
};

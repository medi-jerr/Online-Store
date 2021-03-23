import { createSelector } from "reselect";

const colorSelector = createSelector(
  (state) => state.test,
  (state) => state.images,

  (colorState, imageState) => {
    return {
      colour: colorState.colorDefault,
      stopSlide: imageState.stopSlide,
    };
  }
);

export default colorSelector;

import { createSelector } from "reselect";

const imageSlector = createSelector(
  (state) => state.images,
  (imageState) => {
    return {
      image: imageState.image,
      stopSlide: imageState.stopSlide,
    };
  }
);

export default imageSlector;

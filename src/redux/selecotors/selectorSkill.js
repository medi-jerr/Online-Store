import { createSelector } from "reselect";

const selectorSkill = createSelector(
  (state) => state.skill,
  (imageState) => {
    return {
      skill: imageState.landing + imageState.about,
    };
  }
);

export default selectorSkill;

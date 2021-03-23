import typesSkill from "../actions/typesSkill";

const initialState = {
  landing: "",
  about: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case typesSkill.LANDING_HEIGHT:
      return {
        ...state,
        landing: action.payload,
      };
    case typesSkill.ABOUT_HEIGHT:
      return {
        ...state,
        about: action.payload,
      };
    default:
      return state;
  }
}

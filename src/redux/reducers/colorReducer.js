import types from "../actions/types";

const initialState = {
  colorDefault: "#ff9800",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_COLOR:
      return {
        ...state,
        colorDefault: action.payload,
      };
    default:
      return state;
  }
}

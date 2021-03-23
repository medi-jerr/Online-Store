import types from "../actions/types";

const initialState = {
  images: [],
  image: "",
  stopSlide: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case types.FIRST_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    case types.RANDOM_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    case types.STOP_BACK:
      return {
        ...state,
        image: action.payload,
      };
    case types.FIX_BACK:
      return {
        ...state,
        stopSlide: action.payload,
      };
    case types.RESTART_SLIDE:
      return {
        ...state,
        stopSlide: action.payload,
      };
    case types.SLIDE_WORK:
      return {
        ...state,
        stopSlide: action.payload,
      };
    default:
      return state;
  }
}

import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  RESET,
  FILTER_BY_NAME,
  IMAGE_SELECT,
  IMAGE_DESELECT,
} from "./imageTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
  images: Array<string>(),
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_IMAGES_FAILURE:
      return { ...state, loading: false, users: [], error: action.payload };
    case FILTER_BY_NAME:
      let value = action.payload;
      let filteredValues = state.users.filter((user: any) => {
        return user.author.includes(value);
      });
      return {
        ...state,
        users: filteredValues,
      };
    case IMAGE_SELECT:
      let imageUrl = action.payload;
      let arrayVar = state.images.concat([imageUrl]);
      return {
        ...state,
        images: arrayVar,
      };
    case IMAGE_DESELECT:
      let val = action.payload;
      let removeValue = state.images.filter((image: any) => {
        return image !== val;
      });
      return {
        ...state,
        images: removeValue,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;

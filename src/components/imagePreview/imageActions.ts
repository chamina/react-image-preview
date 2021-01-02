import axios from "axios";
import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  RESET,
  FILTER_BY_NAME,
  IMAGE_SELECT,
  IMAGE_DESELECT,
} from "./imageTypes";

export const fetchUsers = () => {
  return (dispatch: any) => {
    dispatch(fetchImagesRequest());
    axios
      .get("https://picsum.photos/v2/list")
      .then((response: any) => {
        console.log(response);
        const users = response.data;
        dispatch(fetchImagesSuccess(users));
      })
      .catch((error: any) => {
        dispatch(fetchImagesFailure(error.message));
      });
  };
};

export const fetchImagesRequest = () => {
  return {
    type: FETCH_IMAGES_REQUEST,
  };
};

export const imageSelect = (value: string) => {
  return {
    type: IMAGE_SELECT,
    payload: value,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const imageDeselect = (value: string) => {
  return {
    type: IMAGE_DESELECT,
    payload: value,
  };
};

export const filterByName = (value: string) => {
  return {
    type: FILTER_BY_NAME,
    payload: value,
  };
};

export const fetchImagesSuccess = (users: any) => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    payload: users,
  };
};

export const fetchImagesFailure = (error: any) => {
  return {
    type: FETCH_IMAGES_FAILURE,
    payload: error,
  };
};

import { GET_TOURS, TOURS_LOADING } from "./actionTypes";
import axios from "axios";

export const getTours = cityName => dispatch => {
  dispatch(setToursLoading());
  axios.get("/tours/all/" + cityName).then(res =>
    dispatch({
      type: GET_TOURS,
      payload: res.data
    })
  );
};
export const setToursLoading = () => {
  return {
    type: TOURS_LOADING
  };
};

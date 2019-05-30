import { GET_CITIES, CITIES_LOADING, POST_CITIES } from "./actionTypes";
import axios from "axios";

export const getCities = () => dispatch => {
  dispatch(setCitiesLoading());
  axios.get("/cities/all").then(res =>
    dispatch({
      type: GET_CITIES,
      payload: res.data
    })
  );
};

export const setCitiesLoading = () => {
  return {
    type: CITIES_LOADING
  };
};

export const postCities = () => dispatch => {
  dispatch(setCitiesLoading());
  axios.post("/cities/all").then(res =>
    dispatch({
      type: POST_CITIES,
      payload: res.data
    })
  );
};

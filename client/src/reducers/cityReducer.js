import { GET_CITIES } from "../actions/actionTypes";

const initialState = {
  payload: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        payload: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

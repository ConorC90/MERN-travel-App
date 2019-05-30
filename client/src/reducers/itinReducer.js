import { GET_TOURS } from "../actions/actionTypes";

const initialState = {
  payload: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOURS:
      return {
        ...state,
        payload: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

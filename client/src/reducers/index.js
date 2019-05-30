import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itinReducer from "./itinReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  cities: cityReducer,
  itineraries: itinReducer,
  error: errorReducer,
  auth: authReducer
});

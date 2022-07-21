import axios from "axios";
import {
  GET_LEND_DATA_REQUEST,
  GET_LEND_DATA_SUCCESS,
  GET_LEND_DATA_FAILURE,
} from "./actionTypes";

export const getLend=(params) => (dispatch) => {
  dispatch({ type: GET_LEND_DATA_REQUEST });
  axios
    .get("http://localhost:8080/lend",params)
    .then((r) => dispatch({ type: GET_LEND_DATA_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: GET_LEND_DATA_FAILURE }));
};

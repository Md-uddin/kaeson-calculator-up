// import * as types from "../types";

import { actionsType } from "./calculadora";



const errorMessageReducer = (state = null, action: actionsType) => {
  switch (action.type) {
    // case types.FETCH_BREEDS_FAILURE:
    // case types.FETCH_IMAGES_FAILURE:
    //   return action.payload.message || "Something went wrong!";
    // case types.FETCH_BREEDS_SUCCESS:
    // case types.FETCH_IMAGES_SUCCESS:
    //   return null;
    default:
      return state;
  }
};

export default errorMessageReducer;

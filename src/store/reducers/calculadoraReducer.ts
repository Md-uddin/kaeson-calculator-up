
import * as types from "../types";
import { actionsType, initialState } from "./calculadora";

const breedReducer = (state = initialState, action: actionsType) => {
  switch (action.type) {
    case types.SET_PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case types.SET_PERCENTAGE:
      return {
        ...state,
        percentage: +action.payload,
      };
    case types.SET_YEARS:
      return {
        ...state,
        years: +action.payload,
      };
    case types.SET_MIN_INTEREST:
      return {
        ...state,
        minInterest: +action.payload,
      };
    case types.SET_MAX_INTEREST:
      return {
        ...state,
        maxInterest: +action.payload,
      };
    case types.SET_QUOTE_FIRST_YEAR:
      return {
        ...state,
        quoteFirstYear: +action.payload,
      };
    case types.SET_QUOTE_REST_YEARS:
      return {
        ...state,
        quoteRestYears: +action.payload,
      };
    case types.ADD_BONIFICATION:
      return {
        ...state,
        bonifications: [...state.bonifications, action.payload],
      };
    case types.SELECT_BONIFICATION:
      return {
        ...state,
        bonifications: action.payload,
      };
    case types.REMOVE_BONIFICATION:
      const newBonifications = state.bonifications.filter(
        (b) => b !== action.payload
      );
      return {
        ...state,
        bonifications: newBonifications,
      };
    case types.UPDATE_EXPENSE:
      return {
        ...state,
        expenses: action.payload,
      };
    case types.UPDATE_BONIFICATION:
      return {
        ...state,
        bonifications: action.payload,
      };

    default:
      return state;
  }
};

export default breedReducer;

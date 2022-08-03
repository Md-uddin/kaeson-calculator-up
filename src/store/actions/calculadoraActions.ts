import { bonificationType } from "types/commonTypes";
import * as types from "../types";
import { initialStateTypes } from "../reducers/calculadoraReducer";

type DispatchType<type> = (params: type) => any;

const setPrice = (price: number) => (dispatch: any) => {
  dispatch({
    type: types.SET_PRICE,
    payload: +price,
  });
};

const setPercentage = (percentage: number) => (dispatch: any) => {
  dispatch({
    type: types.SET_PERCENTAGE,
    payload: percentage,
  });
};

const setYears = (years: number) => (dispatch: any) => {
  dispatch({
    type: types.SET_YEARS,
    payload: years,
  });
};

const setMinInterest = (minInterest: number) => (dispatch: any) => {
  dispatch({
    type: types.SET_MIN_INTEREST,
    payload: minInterest,
  });
};

const setMaxInterest = (maxInterest: number) => (dispatch: any) => {
  dispatch({
    type: types.SET_MAX_INTEREST,
    payload: maxInterest,
  });
};

const setQuoteFirstYear = (quoteFirstYear: number) => (dispatch: any) => {
  dispatch({
    type: types.SET_QUOTE_FIRST_YEAR,
    payload: quoteFirstYear,
  });
};

const setQuoteRestYears = (quoteRestYears: number) => (dispatch: any) => {
  dispatch({
    type: types.SET_QUOTE_REST_YEARS,
    payload: quoteRestYears,
  });
};

const addBonification = (bonification: bonificationType) => (dispatch: any) => {
  dispatch({
    type: types.ADD_BONIFICATION,
    payload: bonification,
  });
};

const selectBonification =
  (bonification: bonificationType) => (dispatch: any) => {
    dispatch({
      type: types.SELECT_BONIFICATION,
      payload: bonification,
    });
  };

const removeBonification =
  (bonification: bonificationType) => (dispatch: any) => {
    dispatch({
      type: types.REMOVE_BONIFICATION,
      payload: bonification,
    });
  };

const updateExpense =
  (expenses: initialStateTypes["expenses"][0]) =>
  (dispatch: (params: any) => any) => {
    dispatch({
      type: types.UPDATE_EXPENSE,
      payload: expenses,
    });
  };

const updateBonification =
  (bonifications: bonificationType) => (dispatch: any) => {
    dispatch({
      type: types.UPDATE_BONIFICATION,
      payload: bonifications,
    });
  };

export {
  setPrice,
  setPercentage,
  setYears,
  setMinInterest,
  setMaxInterest,
  setQuoteFirstYear,
  setQuoteRestYears,
  addBonification,
  selectBonification,
  removeBonification,
  updateExpense,
  updateBonification,
};

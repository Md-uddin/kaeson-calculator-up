import { initialStateTypes } from "store/reducers/calculadora";
import { bonificationType } from "types/commonTypes";
import * as types from "../types";


type paramsType<type> = { type: string; payload: type };
export type DispatchType<type> = (params: paramsType<type>) => never;

const setPrice = (price: number) => (dispatch: DispatchType<number>) => {
  dispatch({
    type: types.SET_PRICE,
    payload: +price,
  });
};

const setPercentage =
  (percentage: number) => (dispatch: DispatchType<number>) => {
    dispatch({
      type: types.SET_PERCENTAGE,
      payload: percentage,
    });
  };

const setYears = (years: number) => (dispatch: DispatchType<number>) => {
  dispatch({
    type: types.SET_YEARS,
    payload: years,
  });
};

const setMinInterest =
  (minInterest: number) => (dispatch: DispatchType<number>) => {
    dispatch({
      type: types.SET_MIN_INTEREST,
      payload: minInterest,
    });
  };

const setMaxInterest =
  (maxInterest: number) => (dispatch: DispatchType<number>) => {
    dispatch({
      type: types.SET_MAX_INTEREST,
      payload: maxInterest,
    });
  };

const setQuoteFirstYear =
  (quoteFirstYear: number) => (dispatch: DispatchType<number>) => {
    dispatch({
      type: types.SET_QUOTE_FIRST_YEAR,
      payload: quoteFirstYear,
    });
  };

const setQuoteRestYears =
  (quoteRestYears: number) => (dispatch: DispatchType<number>) => {
    dispatch({
      type: types.SET_QUOTE_REST_YEARS,
      payload: quoteRestYears,
    });
  };

const addBonification =
  (bonification: bonificationType) =>
  (dispatch: DispatchType<bonificationType>) => {
    dispatch({
      type: types.ADD_BONIFICATION,
      payload: bonification,
    });
  };

const selectBonification =
  (bonification: bonificationType) =>
  (dispatch: DispatchType<bonificationType>) => {
    dispatch({
      type: types.SELECT_BONIFICATION,
      payload: bonification,
    });
  };

const removeBonification =
  (bonification: bonificationType) =>
  (dispatch: DispatchType<bonificationType>) => {
    dispatch({
      type: types.REMOVE_BONIFICATION,
      payload: bonification,
    });
  };

const updateExpense =
  (expenses: initialStateTypes["expenses"][0]) =>
  (dispatch: DispatchType<initialStateTypes["expenses"][0]>) => {
    dispatch({
      type: types.UPDATE_EXPENSE,
      payload: expenses,
    });
  };

const updateBonification =
  (bonifications: bonificationType) => (dispatch: DispatchType<bonificationType>) => {
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

import * as types from "../types";

const setPrice = (price) => (dispatch) => {
  dispatch({
    type: types.SET_PRICE,
    payload: +price,
  });
};

const setPercentage = (percentage) => (dispatch) => {
  dispatch({
    type: types.SET_PERCENTAGE,
    payload: percentage,
  });
};

const setYears = (years) => (dispatch) => {
  dispatch({
    type: types.SET_YEARS,
    payload: years,
  });
};

const setMinInterest = (minInterest) => (dispatch) => {
  dispatch({
    type: types.SET_MIN_INTEREST,
    payload: minInterest,
  });
};

const setMaxInterest = (maxInterest) => (dispatch) => {
  dispatch({
    type: types.SET_MAX_INTEREST,
    payload: maxInterest,
  });
};

const setQuoteFirstYear = (quoteFirstYear) => (dispatch) => {
  dispatch({
    type: types.SET_QUOTE_FIRST_YEAR,
    payload: quoteFirstYear,
  });
};

const setQuoteRestYears = (quoteRestYears) => (dispatch) => {
  dispatch({
    type: types.SET_QUOTE_REST_YEARS,
    payload: quoteRestYears,
  });
};

const addBonification = (bonification) => (dispatch) => {
  dispatch({
    type: types.ADD_BONIFICATION,
    payload: bonification,
  });
};

const selectBonification = (bonification) => (dispatch) => {
  dispatch({
    type: types.SELECT_BONIFICATION,
    payload: bonification,
  });
};

const removeBonification = (bonification) => (dispatch) => {
  dispatch({
    type: types.REMOVE_BONIFICATION,
    payload: bonification,
  });
};

const updateExpense = (expenses) => (dispatch) => {
  dispatch({
    type: types.UPDATE_EXPENSE,
    payload: expenses,
  });
};

const updateBonification = (bonifications) => (dispatch) => {
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

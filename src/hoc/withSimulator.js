/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  setPrice as setPriceAction,
  setPercentage as setPercentageAction,
  setYears as setYearsAction,
  setMinInterest as setMinInterestAction,
  setMaxInterest as setMaxInterestAction,
  setQuoteFirstYear as setQuoteFirstYearAction,
  setQuoteRestYears as setQuoteRestYearsAction,
  addBonification as addBonificationAction,
  selectBonification as selectBonificationAction,
  removeBonification as removeBonificationAction,
  updateExpense as updateExpenseAction,
  updateBonification as updateBonificationAction,
} from "store/actions/calculadoraActions";

const decimalPrecision = 2;

const withSimulator = (WrappedComponent) => {
  const Hoc = (props) => {
    const {
      years,
      percentage,
      price,
      minInterest,
      maxInterest,
      setQuoteFirstYear,
      setQuoteRestYears,
      bonifications,
    } = props;

    useEffect(() => {
      calcFirstYear();
      calcRestYears();
    }, [price, percentage, years, minInterest, maxInterest, bonifications]);

    const calcFirstYear = () => {
      const numQuotes = years * 12;
      const C = (percentage * price) / 100;

      const percentInterest = minInterest / (12 * 100);

      const quote =
        (C * percentInterest) / (1 - Math.pow(1 + percentInterest, -numQuotes));

      setQuoteFirstYear(quote.toFixed(decimalPrecision));
    };

    const calcRestYears = () => {
      const numQuotes = years * 12;
      const balance = (percentage * price) / 100;
      const percentInterest =
        (maxInterest - getTotalBonifications()) / (12 * 100);

      const quote =
        (balance * percentInterest) /
        (1 - Math.pow(1 + percentInterest, -numQuotes));

      setQuoteRestYears(quote.toFixed(decimalPrecision));
    };

    const getTotalBonifications = () => {
      const bonificationsValue = bonifications.reduce((acc, bonification) => {
        if (bonification.active) {
          return acc + bonification.value;
        }
        return acc;
      }, 0);
      return bonificationsValue.toFixed(2);
    };

    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = (state) => {
    const { calculadora } = state;
    const bonificationsValue = calculadora.bonifications.reduce(
      (acc, bonification) => {
        if (bonification.active) {
          return acc + bonification.value;
        }
        return acc;
      },
      0
    );
    const totalExpenses = calculadora.expenses.reduce(
      (acc, expense) => acc + expense.value,
      0
    );

    return {
      ...calculadora,
      totalBonifications: bonificationsValue,
      totalExpenses,
    };
  };

  const mapStateToDispatch = (dispatch) => {
    return {
      setPrice: (price) => dispatch(setPriceAction(price)),
      setPercentage: (percentage) => dispatch(setPercentageAction(percentage)),
      setYears: (years) => dispatch(setYearsAction(years)),
      setMinInterest: (minInterest) =>
        dispatch(setMinInterestAction(minInterest)),
      setMaxInterest: (maxInterest) =>
        dispatch(setMaxInterestAction(maxInterest)),
      setQuoteFirstYear: (quoteFirstYear) =>
        dispatch(setQuoteFirstYearAction(quoteFirstYear)),
      setQuoteRestYears: (quoteRestYears) =>
        dispatch(setQuoteRestYearsAction(quoteRestYears)),
      addBonification: (bonification) =>
        dispatch(addBonificationAction(bonification)),
      selectBonification: (bonification) =>
        dispatch(selectBonificationAction(bonification)),
      removeBonification: (bonification) =>
        dispatch(removeBonificationAction(bonification)),
      updateExpense: (key, value) => dispatch(updateExpenseAction(key, value)),
      updateBonification: (key, value) =>
        dispatch(updateBonificationAction(key, value)),
    };
  };

  return connect(mapStateToProps, mapStateToDispatch)(Hoc);
};

export default withSimulator;

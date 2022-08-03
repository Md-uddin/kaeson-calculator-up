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
import { initialStateTypes } from "store/reducers/calculadora";

import { bonificationType } from "types/commonTypes";

const decimalPrecision = 2;
type HocTypes = {
  years?: initialStateTypes["years"];
  percentage?: initialStateTypes["percentage"];
  price?: initialStateTypes["price"];
  minInterest?: initialStateTypes["minInterest"];
  maxInterest?: initialStateTypes["maxInterest"];
  setQuoteFirstYear?: (params: number) => never;
  setQuoteRestYears?: (params: number) => never;
  bonifications?: Array<bonificationType>;
  totalBonifications?: number;
  totalExpenses?: number;
  expenses: initialStateTypes["expenses"];
  quoteFirstYear: initialStateTypes["quoteFirstYear"];
  quoteRestYears: initialStateTypes["quoteRestYears"];
};

const withSimulator = (WrappedComponent: any) => {
  const Hoc = (props: HocTypes) => {
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
      if (years && percentage && price && minInterest) {
        const numQuotes = years && years * 12;

        const C = (percentage * price) / 100;

        const percentInterest = minInterest / (12 * 100);

        const quote =
          (C * percentInterest) /
          (1 - Math.pow(1 + percentInterest, -numQuotes));

        setQuoteFirstYear &&
          setQuoteFirstYear(parseInt(quote.toFixed(decimalPrecision)));
      }
    };

    const calcRestYears = () => {
      if (years && percentage && price && maxInterest) {
        const numQuotes = years * 12;
        const balance = (percentage * price) / 100;
        const percentInterest =
          (maxInterest - getTotalBonifications()) / (12 * 100);

        const quote =
          (balance * percentInterest) /
          (1 - Math.pow(1 + percentInterest, -numQuotes));

        setQuoteRestYears &&
          setQuoteRestYears(parseInt(quote.toFixed(decimalPrecision)));
      }
    };

    const getTotalBonifications = () => {
      const bonificationsValue =
        bonifications &&
        bonifications.reduce((acc: number, bonification: bonificationType) => {
          if (bonification.active) {
            return acc + bonification.value;
          }
          return acc;
        }, 0);
      return bonificationsValue ? parseInt(bonificationsValue.toFixed(2)) : 0;
    };

    return <WrappedComponent {...props} />;
  };
  ////////
  const mapStateToProps = (state: { calculadora: initialStateTypes }) => {
    const { calculadora } = state;

    const bonificationsValue = calculadora.bonifications.reduce(
      (acc: number, bonification: bonificationType) => {
        if (bonification.active) {
          return acc + bonification.value;
        }
        return acc;
      },
      0
    );
    const totalExpenses = calculadora.expenses.reduce(
      (acc: number, expense: initialStateTypes["expenses"][0]) =>
        acc + expense.value,
      0
    );

    return {
      ...calculadora,
      totalBonifications: bonificationsValue,
      totalExpenses,
    };
  };

  const mapStateToDispatch = (dispatch: (prams: any) => undefined) => {
    return {
      setPrice: (price: initialStateTypes["price"]) =>
        dispatch(setPriceAction(price)),
      setPercentage: (percentage: initialStateTypes["percentage"]) =>
        dispatch(setPercentageAction(percentage)),
      setYears: (years: initialStateTypes["years"]) =>
        dispatch(setYearsAction(years)),
      setMinInterest: (minInterest: initialStateTypes["minInterest"]) =>
        dispatch(setMinInterestAction(minInterest)),
      setMaxInterest: (maxInterest: initialStateTypes["maxInterest"]) =>
        dispatch(setMaxInterestAction(maxInterest)),
      setQuoteFirstYearDispatch: (
        quoteFirstYear: initialStateTypes["quoteFirstYear"]
      ) => dispatch(setQuoteFirstYearAction(quoteFirstYear)),
      setQuoteRestYearsDispatch: (
        quoteRestYears: initialStateTypes["quoteRestYears"]
      ) => dispatch(setQuoteRestYearsAction(quoteRestYears)),
      addBonification: (bonification: bonificationType) =>
        dispatch(addBonificationAction(bonification)),
      selectBonification: (bonification: bonificationType) =>
        dispatch(selectBonificationAction(bonification)),
      removeBonification: (bonification: bonificationType) =>
        dispatch(removeBonificationAction(bonification)),
      updateExpense: (expense: initialStateTypes["expenses"][0]) =>
        dispatch(updateExpenseAction(expense)),
      updateBonification: (bonification: bonificationType) =>
        dispatch(updateBonificationAction(bonification)),
    };
  };

  return connect(mapStateToProps, mapStateToDispatch)(Hoc);
};

export default withSimulator;

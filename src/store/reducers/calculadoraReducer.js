import * as types from "../types";

const initialState = {
  price: 170000,
  percentage: 80,
  years: 25,
  minInterest: 1.3,
  maxInterest: 2.3,
  quoteFirstYear: 0,
  quoteRestYears: 0,
  expenses: [
    {
      key: "comision",
      name: "Comisión de apertura",
      value: 350,
    },
    {
      key: "tasacion",
      name: "Tasación",
      value: 278.3,
    },
    {
      key: "gestoria",
      name: "Gestoría",
      value: 380,
    },
    {
      key: "registro",
      name: "Registro",
      value: 444.37,
    },
    {
      key: "notaria",
      name: "Notaría",
      value: 809,
    },
    {
      key: "iva",
      name: "IVA/IGIC",
      value: 17500,
    },
    {
      key: "ajd",
      name: "Actos jurídicos documentados",
      value: 175,
    },
    {
      key: "otros",
      name: "Otros",
      value: 15.73,
    },
  ],
  bonifications: [
    {
      key: "vida",
      name: "Seguro de vida",
      value: 0.15,
      active: false,
    },
    {
      key: "hogar",
      name: "Seguro de hogar",
      value: 0.1,
      active: false,
    },
    {
      key: "nominas",
      name: "Nóminas",
      value: 0.4,
      active: false,
    },
    {
      key: "tarjetas",
      name: "Uso de tarjetas",
      value: 0.15,
      active: false,
    },
    {
      key: "domiciliaciones",
      name: "Domiciliaciones",
      value: 0.1,
      active: false,
    },
  ],
};

const breedReducer = (state = initialState, action) => {
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

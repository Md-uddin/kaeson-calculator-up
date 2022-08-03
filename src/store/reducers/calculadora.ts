import { bonificationType } from "types/commonTypes";

export interface initialStateTypes {
  price: number;
  percentage: number;
  years: number;
  minInterest: number;
  maxInterest: number;
  quoteFirstYear: number;
  quoteRestYears: number;
  expenses: Array<Omit<bonificationType, "active">>;
  bonifications: Array<bonificationType>;
}

export type actionsType = {
  type: string;
  payload: bonificationType | number;
};
export const initialState: initialStateTypes = {
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

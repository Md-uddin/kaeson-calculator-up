/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import Bonifications from "../Bonifications/index";
import Resume from "components/Resume";
import SimulationData from "components/SimulationData";

import {
  CalculatorWrapper,
  InitialData,
  ResumeData,
} from "./Calculator.styled";
import withSimulator from "hoc/withSimulator";
import ExpensesData from "components/ExpensesData";

const Calculator = () => {
  return (
    <>
      
      <CalculatorWrapper>
        <InitialData>
          <SimulationData />
          <ExpensesData />
          <Bonifications />
        </InitialData>

        <ResumeData>
          <Resume />
        </ResumeData>
      </CalculatorWrapper>
    </>
  );
};

export default withSimulator(Calculator);

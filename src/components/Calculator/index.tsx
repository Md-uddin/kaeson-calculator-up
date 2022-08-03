/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import Bonifications from "../Bonifications/index";
import Resume from "components/Resume";
import SimulationData from "components/SimulationData";
import "./Calculator.css";
import withSimulator from "hoc/withSimulator";
import ExpensesData from "components/ExpensesData";

const Calculator = () => {
  return (
    <>
      <div className="grid gap-4  grid-rows-1 grid-cols-1 ">
        <div className="initialData bg-white grid gap-4 p-4 min-w-max">
          <SimulationData />
          <ExpensesData />
          <Bonifications />
        </div>
        <div className="border-2 border-gray-200 gap-4 grid grid-cols-1 grid-rows-1 bg-white p-4 min-w-max">
          <Resume />
        </div>
      </div>
    </>
  );
};

export default withSimulator(Calculator);

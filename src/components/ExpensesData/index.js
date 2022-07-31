import React from "react";
import withSimulator from "hoc/withSimulator";
import NumberFormat from "react-number-format";
import { SimulationDataContainer, Raw, Title } from "./ExpensesData.styled";

const ExpensesData = ({ expenses, updateExpense }) => {
  return (
    <section className="expenses">
      <h2>Gastos compraventa</h2>
      <SimulationDataContainer>
        {expenses.map((expense, index) => (
          <Raw key={expense.key}>
            <Title>{expense.name}</Title>
            <NumberFormat
              value={expense.value}
              onValueChange={(values) => {
                const newExpenses = expenses.map((e) =>
                  e.key === expense.key ? { ...e, value: +values.value } : e
                );
                updateExpense(newExpenses);
              }}
              displayType={"input"}
              thousandSeparator="."
              decimalSeparator=","
              suffix=" €"
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </Raw>
        ))}
      </SimulationDataContainer>
    </section>
  );
};

export default withSimulator(ExpensesData);

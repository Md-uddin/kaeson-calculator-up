import React from "react";
import withSimulator from "hoc/withSimulator";
import NumberFormat from "react-number-format";


const ExpensesData = ({ expenses, updateExpense }) => {
  return (
    <section className="expenses">
      <h2>Gastos compraventa</h2>
      <div className="bg-white">
        {expenses.map((expense, index) => (
          <div
            className="flex justify-between items-center p-2 border-b border-gray-300 w-full hover:bg-gray-50 h-[57px] row"
            key={expense.key}
          >
            <div className="row-title">{expense.name}</div>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default withSimulator(ExpensesData);

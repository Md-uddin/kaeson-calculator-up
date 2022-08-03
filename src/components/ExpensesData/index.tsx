import React from "react";
import withSimulator from "hoc/withSimulator";
import NumberFormat from "react-number-format";
import { bonificationFunction, bonificationType } from "types/commonTypes";

type ExpensesDataTypes = {
  expenses: Array<bonificationType>;
  updateExpense: bonificationFunction;
};
const ExpensesData = ({ expenses, updateExpense }: ExpensesDataTypes) => {
  return (
    <section className="expenses">
      <h2 className="font-bold text-2xl">Gastos compraventa</h2>
      <div className="bg-white">
        {expenses.map((expense: bonificationType, index: number) => (
          <div
            className="flex justify-between items-center p-2 border-b border-gray-300 w-full hover:bg-gray-50 h-[57px] row"
            key={index}
          >
            <div className="row-title">{expense.name}</div>
            <NumberFormat
              value={expense.value}
              onValueChange={(values) => {
                const newExpenses = expenses.map((e: bonificationType) =>
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

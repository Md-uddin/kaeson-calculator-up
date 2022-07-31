import React from "react";
import withSimulator from "hoc/withSimulator";
import NumberFormat from "react-number-format";

const Resume = ({
  price,
  percentage,
  years,
  quoteFirstYear,
  quoteRestYears,
  totalBonifications,
  totalExpenses,
}) => {
  const getTotalPaidFirstYear = () => {
    const totalPaid = quoteFirstYear * 12;
    return totalPaid;
  };

  const getTotalPaidRestYears = () => {
    const totalPaid = quoteRestYears * ((years - 1) * 12);
    return totalPaid;
  };

  return (
    <>
      <h2>Resumen de cuotas</h2>
      <div className="bg-white">
        <div className="row flex p-2 w-full border-gray-300 justify-between hover:bg-gray-50">
          <h4 className="row-title">Nº de cuotas ({years} años)</h4>
          <NumberFormat
            value={years * 12}
            displayType={"text"}
            suffix=" cuotas"
          />
        </div>

        <div className="row flex p-2 w-full border-gray-300 justify-between hover:bg-gray-50">
          <h4 className="row-title">Hipoteca solicitada ({percentage}%)</h4>
          <NumberFormat
            value={(percentage * price) / 100}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix=" €"
            decimalScale={5}
          />
        </div>
        <div className="row flex p-2 w-full border-gray-300 justify-between hover:bg-gray-50">
          <h4 className="row-title">Cuota 1er año</h4>
          <NumberFormat
            value={quoteFirstYear}
            displayType={"text"}
            thousandSeparator="."
            decimalSeparator=","
            suffix=" €"
            decimalScale={2}
            fixedDecimalScale={true}
            renderText={(value, props) => (
              <div className="text-bold text-green-500 text-xl" {...props}>
                {value}
              </div>
            )}
          />
        </div>
        <div className="row flex p-2 w-full border-gray-300 justify-between hover:bg-gray-50">
          <h4 className="row-title">
            Resto cuotas (bonificaciones aplicadas:
            {totalBonifications.toFixed(2)}
            %)
          </h4>
          <NumberFormat
            value={quoteRestYears}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix=" €"
            decimalScale={2}
            renderText={(value, props) => (
              <div className="font-bold text-orange-500 text-xl" {...props}>
                {value}
              </div>
            )}
          />
        </div>

        <div className="row flex p-2 w-full border-gray-300 justify-between hover:bg-gray-50">
          <h4 className="row-title">Gastos compraventa</h4>
          <NumberFormat
            value={totalExpenses}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix=" €"
            decimalScale={2}
          />
        </div>
        <div className="row flex p-2 w-full border-gray-300 justify-between hover:bg-gray-50">
          <h4 className="row-title">Total pagos primer año</h4>
          <NumberFormat
            value={getTotalPaidFirstYear()}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix=" €"
            decimalScale={2}
          />
        </div>

        <div className="row flex p-2 w-full border-gray-300 justify-between hover:bg-gray-50">
          <h4 className="row-title">
            Total pagos resto de los {years - 1} años
          </h4>
          <NumberFormat
            value={getTotalPaidRestYears()}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix=" €"
            decimalScale={2}
          />
        </div>

        <div className="row flex p-2 w-full border-gray-300 justify-between  hover:bg-gray-50 bg-gray-50">
          <h4 className="row-title">Total de la fiesta</h4>
          <div>
            <NumberFormat
              value={getTotalPaidFirstYear() + getTotalPaidRestYears()}
              displayType={"text"}
              decimalSeparator=","
              thousandSeparator="."
              suffix=" €"
              decimalScale={2}
              renderText={(value, props) => (
                <div className=" font-bold" {...props}>
                  {value}
                </div>
              )}
            />
            <NumberFormat
              value={getTotalPaidFirstYear() + getTotalPaidRestYears() - 140000}
              displayType={"text"}
              decimalSeparator=","
              thousandSeparator="."
              suffix=" €"
              decimalScale={2}
              renderText={(value, props) => (
                <div className="text-red-500 text-xs text-right" {...props}>
                  +{value}
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default withSimulator(Resume);

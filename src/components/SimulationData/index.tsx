import React from "react";
import withSimulator from "hoc/withSimulator";
import NumberFormat from "react-number-format";
import { bonificationFunction } from "types/commonTypes";
import { initialStateTypes } from "store/reducers/calculadora";

type simulationDataTypes = {
  price: initialStateTypes["price"];
  setPrice: bonificationFunction<number>;
  percentage: initialStateTypes["percentage"];
  setPercentage: bonificationFunction<number>;
  years: initialStateTypes["years"];
  setYears: bonificationFunction<number>;
  minInterest: initialStateTypes["minInterest"];
  setMinInterest: bonificationFunction<number>;
  maxInterest: initialStateTypes["maxInterest"];
  setMaxInterest: bonificationFunction<number>;
};
const SimulationData = ({
  price,
  setPrice,
  percentage,
  setPercentage,
  years,
  setYears,
  minInterest,
  setMinInterest,
  maxInterest,
  setMaxInterest,
}: simulationDataTypes) => {
  return (
    <section className="simulation">
      <h2 className="font-bold text-2xl">Información básica</h2>
      <p className="my-4">
        Rellena los datos de tu hipoteca para obtener una simulación.
      </p>
      <div className="bg-white">
        <div className="flex justify-between items-center p-2 border-b border-gray-300 w-full hover:bg-gray-50 h-[57px] row">
          <h5 className="row-title">Importe del inmueble</h5>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="flex flex-row items-center md:mr-4 mr-2">
              <div
                className="plus-minus-icon"
                onClick={() => setPrice(price + 1000)}
              >
                +
              </div>
              <div
                className="plus-minus-icon"
                onClick={() => setPrice(price - 1000)}
              >
                -
              </div>
            </div>
            <NumberFormat
              value={price}
              onValueChange={(values) => setPrice(parseFloat(values.value))}
              displayType={"input"}
              thousandSeparator="."
              decimalSeparator=","
              suffix=" €"
            />
          </div>
        </div>
        <div className="flex justify-between items-center p-2 border-b border-gray-300 w-full hover:bg-gray-50 h-[57px] row">
          <h5 className="row-title">% solicitado a financiar</h5>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="flex flex-row items-center md:mr-4 mr-2">
              <div
                className="plus-minus-icon"
                onClick={() => setPercentage(percentage + 1)}
              >
                +
              </div>
              <div
                className="plus-minus-icon"
                onClick={() => setPercentage(percentage - 1)}
              >
                -
              </div>
            </div>
            <NumberFormat
              value={percentage}
              onValueChange={(values) =>
                setPercentage(parseFloat(values.value))
              }
              displayType={"input"}
              thousandSeparator="."
              decimalSeparator=","
              suffix=" %"
            />
          </div>
        </div>

        <div className="flex justify-between items-center p-2 border-b border-gray-300 w-full hover:bg-gray-50 h-[57px] row">
          <h5 className="row-title">Duración de la hipoteca</h5>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="flex flex-row items-center md:mr-4 mr-2">
              <div
                className="plus-minus-icon"
                onClick={() => setYears(years + 1)}
              >
                +
              </div>
              <div
                className="plus-minus-icon"
                onClick={() => setYears(years - 1)}
              >
                -
              </div>
            </div>
            <NumberFormat
              value={years}
              onValueChange={(values) => setYears(parseFloat(values.value))}
              displayType={"input"}
              thousandSeparator="."
              decimalSeparator=","
              suffix=" años"
            />
          </div>
        </div>

        <div className="flex justify-between items-center p-2 border-b border-gray-300 w-full hover:bg-gray-50 h-[57px] row">
          <h5 className="row-title">Interés bonificado</h5>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="flex flex-row items-center md:mr-4 mr-2">
              <div
                className="plus-minus-icon"
                onClick={() => setMinInterest(minInterest + 0.05)}
              >
                +
              </div>
              <div
                className="plus-minus-icon"
                onClick={() => setMinInterest(minInterest - 0.05)}
              >
                -
              </div>
            </div>
            <NumberFormat
              value={minInterest}
              onValueChange={(values) =>
                setMinInterest(parseFloat(values.value))
              }
              displayType={"input"}
              thousandSeparator="."
              decimalSeparator=","
              suffix=" %"
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </div>
        </div>

        <div className="flex justify-between items-center p-2 border-b border-gray-300 w-full hover:bg-gray-50 h-[57px] row">
          <h5 className="row-title">Interés sin bonificar</h5>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="flex flex-row items-center md:mr-4 mr-2">
              <div
                className="plus-minus-icon"
                onClick={() => setMaxInterest(maxInterest + 0.05)}
              >
                +
              </div>
              <div
                className="plus-minus-icon"
                onClick={() => setMaxInterest(maxInterest - 0.05)}
              >
                -
              </div>
            </div>
            <NumberFormat
              value={maxInterest}
              onValueChange={(values) =>
                setMaxInterest(parseFloat(values.value))
              }
              displayType={"input"}
              thousandSeparator="."
              decimalSeparator=","
              suffix=" %"
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default withSimulator(SimulationData);

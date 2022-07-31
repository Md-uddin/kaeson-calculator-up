import React from "react";
import withSimulator from "hoc/withSimulator";
import NumberFormat from "react-number-format";
import {
  SimulationDataContainer,
  Raw,
  Title,
  IconsContainer,
  Icon,
} from "./SimulationData.styled";

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
}) => {
  return (
    <section className="simulation">
      <h2 className="text-blue-500 ">Información básica</h2>
      <p>Rellena los datos de tu hipoteca para obtener una simulación.</p>
      <SimulationDataContainer>
        <Raw>
          <Title>Importe del inmueble</Title>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconsContainer>
              <Icon onClick={() => setPrice(price + 1000)}>+</Icon>
              <Icon onClick={() => setPrice(price - 1000)}>-</Icon>
            </IconsContainer>
            <NumberFormat
              value={price}
              onValueChange={(values) => setPrice(values.value)}
              displayType={"input"}
              thousandSeparator="."
              decimalSeparator=","
              suffix=" €"
            />
          </div>
        </Raw>
        <Raw>
          <Title>% solicitado a financiar</Title>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconsContainer>
              <Icon onClick={() => setPercentage(percentage + 1)}>+</Icon>
              <Icon onClick={() => setPercentage(percentage - 1)}>-</Icon>
            </IconsContainer>
            <NumberFormat
              value={percentage}
              onValueChange={(values) => setPercentage(values.value)}
              displayType={"input"}
              thousandSeparator="."
              decimalSeparator=","
              suffix=" %"
            />
          </div>
        </Raw>

        <Raw>
          <Title>Duración de la hipoteca</Title>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconsContainer>
              <Icon onClick={() => setYears(years + 1)}>+</Icon>
              <Icon onClick={() => setYears(years - 1)}>-</Icon>
            </IconsContainer>
            <NumberFormat
              value={years}
              onValueChange={(values) => setYears(values.value)}
              displayType={"input"}
              thousandSeparator="."
              decimalSeparator=","
              suffix=" años"
            />
          </div>
        </Raw>

        <Raw>
          <Title>Interés bonificado</Title>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconsContainer>
              <Icon onClick={() => setMinInterest(minInterest + 0.05)}>+</Icon>
              <Icon onClick={() => setMinInterest(minInterest - 0.05)}>-</Icon>
            </IconsContainer>
            <NumberFormat
              value={minInterest}
              onValueChange={(values) => setMinInterest(values.value)}
              displayType={"input"}
              thousandSeparator="."
              decimalSeparator=","
              suffix=" %"
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </div>
        </Raw>

        <Raw>
          <Title>Interés sin bonificar</Title>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconsContainer>
              <Icon onClick={() => setMaxInterest(maxInterest + 0.05)}>+</Icon>
              <Icon onClick={() => setMaxInterest(maxInterest - 0.05)}>-</Icon>
            </IconsContainer>
            <NumberFormat
              value={maxInterest}
              onValueChange={(values) => setMaxInterest(values.value)}
              displayType={"input"}
              thousandSeparator="."
              decimalSeparator=","
              suffix=" %"
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </div>
        </Raw>
      </SimulationDataContainer>
    </section>
  );
};

export default withSimulator(SimulationData);

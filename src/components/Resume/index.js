import React from "react";
import withSimulator from "hoc/withSimulator";

import NumberFormat from "react-number-format";
import { Raw, ResumeContainer, Title } from "./Resume.styled";

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
      <ResumeContainer>
        <Raw>
          <Title>Nº de cuotas ({years} años)</Title>
          <NumberFormat
            value={years * 12}
            displayType={"text"}
            suffix=" cuotas"
          />
        </Raw>

        <Raw>
          <Title>Hipoteca solicitada ({percentage}%)</Title>
          <NumberFormat
            value={(percentage * price) / 100}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix=" €"
            decimalScale={5}
          />
        </Raw>

        {/* <Raw>
          <Title>Interés primer año ({minInterest.toFixed(2)}%)</Title>
          <NumberFormat
            value={minInterest / 12}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix=" %"
            decimalScale={5}
          />
        </Raw> */}

        <Raw>
          <Title>Cuota 1er año</Title>
          <NumberFormat
            value={quoteFirstYear}
            displayType={"text"}
            thousandSeparator="."
            decimalSeparator=","
            suffix=" €"
            decimalScale={2}
            fixedDecimalScale={true}
            renderText={(value, props) => (
              <div
                style={{
                  fontWeight: "bold",
                  color: "green",
                  fontSize: "1.3rem",
                }}
                {...props}
              >
                {value}
              </div>
            )}
          />
        </Raw>

        {/* <Raw>
          <Title>
            Interés resto de años (
            {(maxInterest - totalBonifications).toFixed(2)}
            %)
          </Title>
          <NumberFormat
            value={(maxInterest - totalBonifications) / 12}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix=" %"
            decimalScale={5}
          />
        </Raw> */}

        <Raw>
          <Title>
            Resto cuotas (bonificaciones aplicadas:
            {totalBonifications.toFixed(2)}
            %)
          </Title>
          <NumberFormat
            value={quoteRestYears}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix=" €"
            decimalScale={2}
            renderText={(value, props) => (
              <div
                style={{
                  fontWeight: "bold",
                  color: "orange",
                  fontSize: "1.3rem",
                }}
                {...props}
              >
                {value}
              </div>
            )}
          />
        </Raw>

        <Raw>
          <Title>Gastos compraventa</Title>
          <NumberFormat
            value={totalExpenses}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix=" €"
            decimalScale={2}
          />
        </Raw>
        <Raw>
          <Title>Total pagos primer año</Title>
          <NumberFormat
            value={getTotalPaidFirstYear()}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix=" €"
            decimalScale={2}
          />
        </Raw>

        <Raw>
          <Title>Total pagos resto de los {years - 1} años</Title>
          <NumberFormat
            value={getTotalPaidRestYears()}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix=" €"
            decimalScale={2}
          />
        </Raw>

        <Raw style={{ backgroundColor: "#f0f0f0" }}>
          <Title>Total de la fiesta</Title>
          <div>
            <NumberFormat
              value={getTotalPaidFirstYear() + getTotalPaidRestYears()}
              displayType={"text"}
              decimalSeparator=","
              thousandSeparator="."
              suffix=" €"
              decimalScale={2}
              renderText={(value, props) => (
                <div style={{ fontWeight: "bold" }} {...props}>
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
                <div
                  style={{
                    color: "red",
                    fontSize: "0.85rem",
                    textAlign: "right",
                  }}
                  {...props}
                >
                  +{value}
                </div>
              )}
            />
          </div>
        </Raw>
      </ResumeContainer>
    </>
  );
};

export default withSimulator(Resume);

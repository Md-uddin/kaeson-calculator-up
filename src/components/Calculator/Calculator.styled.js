import styled from "styled-components";

export const CalculatorWrapper = styled.div`
  background-color: #f5f5f5;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

export const InitialData = styled.div`
  background-color: #fff;
  border: 2px solid #ddd;
  display: grid;
  gap: 1rem;
  grid-template-areas: "simulation expenses bonifications";
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem;
  .bonifications {
    grid-area: bonifications;
  }
  .simulation {
    grid-area: simulation;
  }
  .expenses {
    grid-area: expenses;
  }
  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "simulation expenses"
      "bonifications bonifications";
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "simulation"
      "expenses"
      "bonifications";
  }
`;

export const ResumeData = styled.div`
  border: 2px solid #ddd;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  background-color: #fff;
  padding: 1rem;
`;

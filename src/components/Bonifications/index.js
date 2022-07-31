import React from "react";

import withSimulator from "hoc/withSimulator";
import BonificationsTable from "./BonificationsTable";
import { BonificationsWrapper } from "./Bonifications.styled";
import BonificationsCreate from "components/BonificationsCreate";

const Bonifications = () => {
  return (
    <section className="bonifications">
      <h2>Vinculaciones y bonificaciones</h2>
      <BonificationsWrapper>
        <BonificationsTable />
      </BonificationsWrapper>
      <BonificationsCreate />
    </section>
  );
};

export default withSimulator(Bonifications);

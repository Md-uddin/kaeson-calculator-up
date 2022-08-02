import React from "react";
import "./style.css";
import withSimulator from "hoc/withSimulator";
import BonificationsTable from "./BonificationsTable";
import BonificationsCreate from "components/BonificationsCreate";

const Bonifications = () => {
  return (
    <section className="bonifications">
      <h2 className="font-bold text-2xl">Vinculaciones y bonificaciones</h2>
      <div className="bg-white bonificationWrapper">
        <BonificationsTable />
      </div>
      <BonificationsCreate />
    </section>
  );
};

export default withSimulator(Bonifications);

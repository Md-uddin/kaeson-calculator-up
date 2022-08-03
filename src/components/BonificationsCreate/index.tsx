import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NumberFormat from "react-number-format";
import withSimulator from "hoc/withSimulator";
import "./styles.css";
import { bonificationFunction, bonificationType } from "types/commonTypes";

///types

const BonificationsCreate = ({ addBonification }:{addBonification:bonificationFunction<bonificationType>}) => {
  const initialState: bonificationType = {
    key: uuidv4(),
    name: null,
    value: 0,
    active: true,
  };


  const [bonification, setBonification] = useState(initialState);

  const handleAddBonification = () => {
    addBonification(bonification);
    setBonification(initialState);
  };

  return (
    <section>
      <h4>Añadir bonificación</h4>
      <div
        className="flex bg-white bonificationsCreateWrapper"
        key={bonification.key}
      >
        <input
          type="text"
          placeholder="Descripción bonificación"
          defaultValue={bonification.name || ""}
          onChange={(e) => {
            setBonification({ ...bonification, name: e.target.value });
          }}
        />

        <NumberFormat
          value={bonification.value}
          onValueChange={(values) =>
            setBonification({ ...bonification, value: +values.value })
          }
          displayType={"input"}
          thousandSeparator="."
          decimalSeparator=","
          suffix=" %"
          decimalScale={2}
          fixedDecimalScale={true}
        />

        <button
          disabled={!bonification.name || !bonification.value}
          type="button"
          onClick={handleAddBonification}
        >
          Añadir
        </button>
      </div>
    </section>
  );
};

export default withSimulator(BonificationsCreate);

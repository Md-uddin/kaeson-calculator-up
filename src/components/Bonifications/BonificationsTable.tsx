import withSimulator from "hoc/withSimulator";
import React, { FC } from "react";
import NumberFormat from "react-number-format";
import { bonificationFunction, bonificationType } from "types/commonTypes";

//////types
interface BonifcationsProps {
  bonifications: Array<bonificationType>;
  selectBonification: bonificationFunction;
  removeBonification: bonificationFunction;
  updateBonification: bonificationFunction;
  totalBonifications: number;
}

const BonificationsTable: FC<BonifcationsProps> = ({
  bonifications,
  selectBonification,
  removeBonification,
  totalBonifications,
  updateBonification,
}) => {
  if (!bonifications.length) {
    return <div>No hay bonificaciones en la lista</div>;
  }

  console.log({});
  return (
    <table border={0} width="100%" cellSpacing="0" cellPadding="0">
      <tbody>
        {bonifications.map((bonification: bonificationType) => (
          <tr key={bonification.key}>
            <td width="40" className="center">
              <input
                type="checkbox"
                name={bonification.name || "loading..."}
                checked={bonification.active}
                onChange={() => {
                  const newBonifications = bonifications.map(
                    (b: bonificationType) => {
                      return b.name === bonification.name
                        ? { ...b, active: !b.active }
                        : b;
                    }
                  );
                  // console.log({ newBonifications });
                  selectBonification(newBonifications);
                }}
              />
            </td>
            <td>{bonification.name}</td>
            <td width="200" className="text-right">
              <div className="flex items-center">
                <div className="flex sm:mr-4 mr-2">
                  <div
                    className="plus-minus-icon"
                    onClick={() => {
                      const newBonifications = bonifications.map(
                        (e: bonificationType) =>
                          e.key === bonification.key
                            ? { ...e, value: e.value + 0.05 }
                            : e
                      );
                      updateBonification(newBonifications);
                    }}
                  >
                    +
                  </div>{" "}
                  <div
                    className="plus-minus-icon"
                    onClick={() => {
                      const newBonifications = bonifications.map(
                        (e: bonificationType) =>
                          e.key === bonification.key
                            ? { ...e, value: e.value - 0.05 }
                            : e
                      );
                      updateBonification(newBonifications);
                    }}
                  >
                    -
                  </div>
                </div>

                <NumberFormat
                  value={bonification.value}
                  decimalSeparator=","
                  thousandSeparator="."
                  suffix=" %"
                  decimalScale={2}
                  fixedDecimalScale={true}
                  onValueChange={(values) => {
                    const newBonifications = bonifications.map(
                      (e: bonificationType) =>
                        e.key === bonification.key
                          ? { ...e, value: +values.value }
                          : e
                    );
                    updateBonification(newBonifications);
                  }}
                />
              </div>
            </td>
            <td width="100" className="text-center">
              <span onClick={() => removeBonification(bonification)}>
                Borrar
              </span>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4} style={{ textAlign: "right" }}>
            Bonificaciones aplicadas:
            <NumberFormat
              value={totalBonifications}
              displayType={"text"}
              decimalSeparator=","
              thousandSeparator="."
              suffix=" %"
              decimalScale={2}
              fixedDecimalScale={true}
              renderText={(
                value: string
                // props: object | null
              ): React.ReactNode => (
                <span
                  style={{
                    fontWeight: "bold",
                    color: "green",
                    marginLeft: "10px",
                  }}
                  // {...props}
                >
                  {value}
                </span>
              )}
            />
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default withSimulator(BonificationsTable);

import React from "react";

const styles = {
  table: {
    margin: "0 auto",
    textAlign: "center",
    borderCollapse: "collapse",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f2f2f2",
  },
  th: {
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
  },
  td: {
    padding: "10px",
    backgroundColor: "#fff",
  },
  alternateRow: {
    backgroundColor: "#f9f9f9",
  },
};

const BulletPointChart = (props) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>{props.packageName}</th>
        </tr>
      </thead>
      <tbody>
        {(props.bulletPoints ?? []).map((point, i) => {
          return (
            <tr>
              <td
                style={{
                  ...styles.td,
                  ...(i % 2 === 0 && styles.alternateRow),
                }}
              >
                {point}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BulletPointChart;

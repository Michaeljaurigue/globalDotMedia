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
        {/* {(props.bulletPoints ?? []).map((point, i) => {
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
        })} */}
        <tr>
          <td style={styles.td}>{props.one}</td>
        </tr>
        <tr>
          <td style={{ ...styles.td, ...styles.alternateRow }}>{props.two}</td>
        </tr>
        <tr>
          <td style={styles.td}>{props.three}</td>
        </tr>
        <tr>
          <td style={{ ...styles.td, ...styles.alternateRow }}>{props.four}</td>
        </tr>
        <tr>
          <td style={styles.td}>{props.five}</td>
        </tr>
        <tr>
          <td style={{ ...styles.td, ...styles.alternateRow }}>{props.six}</td>
        </tr>
        <tr>
          <td style={styles.td}>{props.seven}</td>
        </tr>
        <tr>
          <td style={{ ...styles.td, ...styles.alternateRow }}>
            {props.eight}
          </td>
        </tr>
        <tr>
          <td style={styles.td}>{props.nine}</td>
        </tr>
        <tr>
          <td style={{ ...styles.td, ...styles.alternateRow }}>{props.ten}</td>
        </tr>
        <tr>
          <td style={styles.td}>{props.eleven}</td>
        </tr>
        <tr>
          <td style={{ ...styles.td, ...styles.alternateRow }}>
            {props.twelve}
          </td>
        </tr>
        <tr>
          <td style={styles.td}>{props.thirteen}</td>
        </tr>
        <tr>
          <td style={{ ...styles.td, ...styles.alternateRow }}>
            {props.fourteen}
          </td>
        </tr>
        <tr>
          <td style={styles.td}>{props.fifteen}</td>
        </tr>
        <tr>
          <td style={{ ...styles.td, ...styles.alternateRow }}>
            {props.sixteen}
          </td>
        </tr>
        <tr>
          <td style={styles.td}>{props.seventeen}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BulletPointChart;

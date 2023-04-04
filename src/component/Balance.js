import React from "react";

const Balance = (props) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <span style={{ fontWeight: "500", fontSize: "15px" }}>YOUR BALANCE</span>
      <br />
      <span style={{ fontWeight: "bold", fontSize: "25px" }}>${props.balance}</span>
    </div>
  );
};

export default Balance;

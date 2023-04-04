import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <span style={{ fontWeight: "bold" }}>{props.text}</span>
      <span style={{ color: props.text === "INCOME" ? "green" : "red", fontWeight: "bold" }}>{props.balance}</span>
    </div>
  );
};

export default Card;

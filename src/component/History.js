import React from "react";

function History(props) {
  return (
    <div className="history-div" style={{ borderRight: props.amount > 0 ? "4px solid green" : "4px solid red" }}>
      <div>{props.text}</div>
      <div>{props.amount}</div>
    </div>
  );
}

export default History;

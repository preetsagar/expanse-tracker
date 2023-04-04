import React, { useState } from "react";

function AddTransaction(props) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
    // console.log("Text", event.target.value);
  }
  function handleAmountChange(event) {
    setAmount(event.target.value);
    // console.log("Amount ", event.target.value);
  }
  function handleClick() {
    props.addTransaction({ text, amount: amount || 0 });
    setText("");
    setAmount("");
  }

  return (
    <div className="addTransaction-div">
      <span className="text">Text</span>
      <input value={text} onChange={handleTextChange} />
      <span className="text">Amount</span>
      <input value={amount} onChange={handleAmountChange} placeholder="0" />
      <button onClick={handleClick}>Add Transaction</button>
    </div>
  );
}

export default AddTransaction;

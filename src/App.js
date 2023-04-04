import "./App.css";
import "./style.css";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Card from "./component/Card";
import History from "./component/History";
import AddTransaction from "./component/AddTransaction";
import { useEffect, useState } from "react";

function App() {
  const [transaction, setTransaction] = useState([]);
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");

  function addTransaction(obj) {
    // console.log(obj);
    setTransaction([...transaction, obj]);
  }

  useEffect(() => {
    let income = 0;
    let expense = 0;
    transaction.forEach((obj) => {
      if (obj.amount[0] === "-") {
        expense += parseFloat(obj.amount);
      } else {
        income += parseFloat(obj.amount);
      }
    });

    setIncome(income);
    setExpense(expense);
  }, [transaction]);

  return (
    <div className="outer-box">
      <div className="Box">
        <Header />
        <Balance balance={income + expense} />
        <div className="card-div">
          <Card text="INCOME" balance={income} />
          <Card text="EXPENSE" balance={expense} />
        </div>
        {transaction.length > 0 && <span className="sub-heading">History</span>}
        {transaction.map((obj, index) => {
          return <History text={obj.text} amount={obj.amount} key={index} />;
        })}
        <span className="sub-heading space">Add New Transaction</span>
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </div>
  );
}

export default App;

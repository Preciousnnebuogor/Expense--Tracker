import { useState } from "react";

export default function Home() {
  const [transaction, setTransaction] = useState([]);
  const [currentInput, setCurrentInput] = useState({
    description: "",
    amount: "",
  });

  const handleTransaction = () => {
    if (!currentInput.description || !currentInput.amount) return;
    setTransaction((prev) => [...prev, currentInput]);
    setCurrentInput({ description: "", amount: "" });
    console.log(handleTransaction);
  };

  transaction.map((data) => {
    <div>{}</div>;
  });

  return (
    <div className="container">
      <div className="content">
        <h1 className="param1">Expense Tracker</h1>
        <div className="section1">
          <p className="param2">Your balance</p>
          <h2 className="param3">$ 0,000,000</h2>
          <div className="displayIncome">
            <div className="income">
              <p>Income</p>
              <h3>$ 0,000</h3>
            </div>
            <div className="expenses">
              <p>Expenses</p>
              <h3>$ 0,000</h3>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="transaction">
            <p className="transact-p"> Transactions </p>
            <div className="transact-border">
              <p>food</p>
              <p>200</p>
            </div>

            <div className="transaction-list">
              {transaction.map((data, index) => {
                return (
                  <div className="transaction-item">
                    <p>{data.description}</p>
                    <p
                      style={{
                        color: parseFloat(data.amount) < 0 ? "red" : "green",
                      }}
                    >
                      {data.amount}
                    </p>
                
                  </div>
                );
              })}

              {/* <div className="transaction-item">
                <p>Salary</p>
                <p>+ $200</p>
              </div> */}
            </div>
          </div>

          <div className="add-transaction">
            <p className="transact-p2">Add transactions</p>
            <div className="descript">
              <p>Description</p>
              <input
                type="text"
                name="description"
                required
                onChange={(e) =>
                  setCurrentInput((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                value={currentInput.description}
                className="input"
                placeholder="Enter description..."
              />
            </div>

            <div className="amount">
              <p>Amount</p>
              <input
                name="amount"
                type="number"
                className="input"
                required
                onChange={(e) =>
                  setCurrentInput((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                value={currentInput.amount}
                placeholder="Enter amount..."
              />
              <p className="param4">Use negative (-) for expenses</p>
            </div>

            <div className="button">
              <button onClick={handleTransaction}>Add Transactions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

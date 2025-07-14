export default function Home(){
    return (
      <div className="container">
        <div className="content">
          <h1 className="param1">Expense Tracker</h1>
          <div className="section1">
            <p className="param2">Your balance</p>
            <h2 className="param3">$ 22,000,000</h2>
            <div className="displayIncome">
              <div className="income">
                <p>Income</p>
                <h3>$ 20,000</h3>
              </div>
              <div className="expenses">
                <p>Expenses</p>
                <h3>$ 30,000</h3>
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="transaction">
              <p className="transact-p"> Transactions </p>
              <div className="transact-border">
                <p>Title</p>
                <p>Amount</p>
              </div>
            </div>

            <div className="add-transaction">
              <p className="transact-p2">Add transactions</p>
              <div className="descript">
                <p>Description</p>
                <input className="input" placeholder="Enter description..." />
              </div>

              <div className="amount">
                <p>Amount</p>
                <input className="input" placeholder="Enter amount..." />
                <p className='param4'>Use negative (-) for expenses</p>
              </div>

              <div className="button">
                <button>Add Transactions</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
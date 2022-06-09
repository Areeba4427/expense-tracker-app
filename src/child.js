import React, { useContext, useState } from 'react'
import { transContext } from './transaction.js';

function Child() {

  let { transactions, addTransaction } = useContext(transContext);

  let [newDesc, setDesc] = useState("");    //setting by default values
  let [newAmount, setAmount] = useState(0);
  // console.log(newDesc , newAmount);


  const handle_addition = (event) => {
    event.preventDefault();
    if(Number(newAmount) == 0){
      alert("Plese enter valid amount");
      return false;
    }
    
    addTransaction({
      amount: Number(newAmount),
      desc: newDesc
    })
  }

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) 
        income += transactions[i].amount;
      
    }
    return income;

  }


  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount <= 0) 
        expense +=  transactions[i].amount;
      
    
    }
    return expense;
  }

  return (

    <div className="App container">
      <div className="text-container">
        <div>
          <h2>Expense Tracker</h2>
          <h4>Your Balance <br />{getIncome() + getExpense()}</h4>

        </div>
        <div className="expense-container">
          <h5>Expense<br />{getExpense()}</h5>
          <h5>Income <br />{getIncome()}</h5>
        </div>
        <div className="container-detail">
          <h4>History</h4>
          <hr />

          <ul className='list'>

            {transactions.map((transObj, ind) => {
              return (
                <li key={ind}>
                  <span>{transObj.desc}</span>
                  <span>{transObj.amount}</span>
                </li>
              );
            }

            )}

          </ul>


          <div>
            <h4>Add Transaction</h4>
            <hr />




            <br />
            <form className="transaction-form" onSubmit={handle_addition}>
              <label>
                Description<br />
                <input type="text" onChange={(ev) => setDesc(ev.target.value)} required />
              </label>
              <br />
              <label>
                Amount<br />
                <input type="number" onChange={(ep) => setAmount(ep.target.value)} required />
              </label>                                             
              <br />
              <button>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Child;
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Moneyform() {
  const [moneyAmount, setMoneyAmount] = useState("");
  const [category, setCategory] = useState("");
  const [expenseList, setExpenseList] = useState([]);

  function moneyAmountTextHandler(e) {
    setMoneyAmount(e.target.value);
  }

  function categoryTextHandler(e) {
    setCategory(e.target.value);
  }

  function addExpense(e) {
    e.preventDefault();
    const newExpense = [
      ...expenseList,
      {
        id: uuidv4(),
        moneyAmount: moneyAmount,
        category: category,
      },
    ];
    setExpenseList(newExpense);
    console.log(expenseList);
  }
  return (
    <div>
      <form>
        <label htmlFor="amount">Amount: $</label>
        <input required type="text" id="amount" name="amount" placeholder="Enter Number" onChange={moneyAmountTextHandler}></input>
        <label> Category: </label>
        <select name="category" id="category" required onChange={categoryTextHandler} value={category}>
          <option disabled>Select a Category</option>
          <option value="food">Food</option>
          <option value="housing">Housing</option>
          <option value="transportation">Transportation</option>
          <option value="personal">Personal Spending</option>
          <option value="medical">Medical</option>
        </select>
        <button onClick={addExpense}>Submit</button>
      </form>
      <div className="expenseList">
        {expenseList.map((expense) => {
          return (
            <div>
              <h2>${expense.moneyAmount}</h2>
              <h2>{expense.category}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Moneyform;

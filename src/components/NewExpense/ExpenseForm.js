import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm({ onSaveExpenseData, onCancel }) {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  const defaultStateObj = {
    title: "",
    amount: "",
    date: ""
  };

  const [userInput, setUserInput] = useState(defaultStateObj);

  function titleChangeHandler(e) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: e.target.value
      };
    });
  }

  function amountChangeHandler(e) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: e.target.value
      };
    });
  }

  function dateChangeHandler(e) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: e.target.value
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    // do nothing is user hasn't entered any input

    if (
      userInput.title === "" ||
      userInput.amount === "" ||
      userInput.date === ""
    ) {
      return;
    }

    userInput.id = Math.random().toString();
    userInput.date = new Date(userInput.date); // the selected date is a string, so it needs to be converted!

    onSaveExpenseData(userInput);
    setUserInput(defaultStateObj);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.amount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-1-1"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

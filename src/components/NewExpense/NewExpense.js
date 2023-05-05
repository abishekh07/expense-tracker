import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense({ getNewExpenseData }) {
  const [toggleForm, setToggleForm] = useState(false);

  function handleNewExpenseData(enteredExpenseData) {
    getNewExpenseData(enteredExpenseData);
    setToggleForm(false);
  }

  function addNewExpenseHandler() {
    setToggleForm(true);
  }

  function cancelExpenseHandler() {
    setToggleForm(false);
  }

  return (
    <div className="new-expense">
      {toggleForm && (
        <ExpenseForm
          onSaveExpenseData={handleNewExpenseData}
          onCancel={cancelExpenseHandler}
        />
      )}
      {!toggleForm && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;

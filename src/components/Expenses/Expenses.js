import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  function filterExpensesBasedOnYear(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeYear={filterExpensesBasedOnYear}
          selected={filteredYear}
        />

        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;

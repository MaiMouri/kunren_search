import React, { useState } from 'react';
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import Courses from "./components/Courses";
import NewExpense from "./components/NewExpense/NewExpense";

const jsonData = require('./Courses.json');
console.log(typeof (jsonData));

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [courses, setCourses] = useState(jsonData);

  // DELETE add new expenses
  const addExpensesHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };


  return (
    <div>
      <h2>第4次産業革命スキル習得講座検索</h2>
      {/* <NewExpense onAddExpense={addExpensesHandler} /> */}
      {/* <Expenses items={expenses} /> */}
      <Courses items={courses} />
    </div>
  );
}

export default App;

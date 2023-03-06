import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [expenseInput, setExpenseInput] = useState('');

  const handleExpenseInput = (event) => {
    setExpenseInput(event.target.value);
  };

  const handleAddExpense = () => {
    const expense = expenseInput.split(' - ');
    const expenseName = expense[0];
    const expensePrice = parseFloat(expense[1]);

    const newExpense = {
      name: expenseName,
      price: expensePrice
    };

    setExpenses([...expenses, newExpense]);
    setTotalExpense(totalExpense + expensePrice);
    setExpenseInput('');
  };

  return (
    <div id='main'>
      <input
        id='expense-input'
        value={expenseInput}
        onChange={handleExpenseInput}
      />
      <button id='expense-button' onClick={handleAddExpense}>
        Add Expense
      </button>
      <div id='expense-list'>
        {expenses.map((expense, index) => (
          <div key={index}>
            {expense.name} - {expense.price}
          </div>
        ))}
      </div>
      <div id='total-expense'>Total Expense: {totalExpense}</div>
    </div>
  );
};

export default App;
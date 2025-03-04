import React, { useState, useEffect } from "react";
import axios from "axios";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import FilterExpenses from "./components/FilterExpenses";
import TotalExpenses from "./components/TotalExpenses";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  // Fetch all expenses
  const fetchExpenses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/expenses");
      setExpenses(response.data);
    } catch (err) {
      console.error("Error fetching expenses:", err);
    }
  };

  // Fetch filtered expenses
  const fetchFilteredExpenses = async (filters) => {
    try {
      const { category, date } = filters;
      const response = await axios.get("http://localhost:5000/api/expenses/filter", {
        params: { category, date },
      });
      setExpenses(response.data);
    } catch (err) {
      console.error("Error fetching filtered expenses:", err);
    }
  };

  // Fetch total expenses for date range
  const fetchTotal = async (start, end) => {
    try {
      const response = await axios.get("http://localhost:5000/api/expenses/total", {
        params: { start, end },
      });
      setTotal(response.data.totalAmount);
    } catch (err) {
      console.error("Error fetching total expenses:", err);
    }
  };

  useEffect(() => {
    fetchExpenses(); // Initially fetch all expenses
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary p-6 flex items-center justify-center">
      <div className="w-full max-w-xl bg-card-bg p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-primary mb-6">💰 Expense Tracker</h1>

        <ExpenseForm onExpenseAdded={fetchExpenses} />
        <FilterExpenses onFilter={fetchFilteredExpenses} />
        <TotalExpenses onDateChange={fetchTotal} total={total} />
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
};

export default App;

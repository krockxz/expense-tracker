import React, { useState } from "react";
import axios from "axios";

const ExpenseForm = ({ onExpenseAdded }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/expenses", { amount, category, date, description });
      onExpenseAdded(); // Refresh the expense list after adding a new expense
      setAmount("");
      setCategory("");
      setDate("");
      setDescription("");
    } catch (err) {
      console.error("Error adding expense:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-md hover:bg-gray-dark hover:text-white transition duration-200"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;

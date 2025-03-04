import React, { useState } from "react";

const FilterExpenses = ({ onFilter }) => {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleFilter = () => {
    onFilter({ category, date });
  };

  return (
    <div className="mb-6 p-6 bg-card-bg rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-center text-secondary mb-4">🔍 Filter Expenses</h3>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Category"
          className="p-3 border border-gray-300 rounded-md w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="date"
          className="p-3 border border-gray-300 rounded-md w-full"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          onClick={handleFilter}
          className="bg-primary text-white px-4 py-3 rounded-md hover:bg-teal-600 transition"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FilterExpenses;

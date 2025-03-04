import React, { useState } from "react";

const TotalExpenses = ({ onDateChange, total }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleTotal = () => {
    onDateChange(startDate, endDate);
  };

  return (
    <div className="mb-6 p-6 bg-card-bg rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-center text-secondary mb-4">📊 View Total Expenses</h3>
      <div className="flex gap-4 mb-4">
        <input
          type="date"
          className="p-3 border border-gray-300 rounded-md w-full"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="p-3 border border-gray-300 rounded-md w-full"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button
          onClick={handleTotal}
          className="bg-primary text-white px-4 py-3 rounded-md hover:bg-gray-dark transition"
        >
          Get Total
        </button>
      </div>
      <h4 className="text-2xl font-bold text-center text-primary">Total: ${total}</h4>
    </div>
  );
};

export default TotalExpenses;

import React from "react";

const ExpenseList = ({ expenses }) => {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="mt-8 space-y-6">
      <h3 className="text-3xl font-semibold text-center text-primary mb-6">📜 Expense List</h3>

      {expenses.length === 0 ? (
        <p className="text-center text-secondary text-lg">No expenses added yet.</p>
      ) : (
        expenses.map((expense, index) => (
          <div
            key={index}
            className="bg-card-bg p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-col">
                <p className="text-lg font-semibold text-primary">{expense.category}</p>
                <p className="text-sm text-secondary">{formatDate(expense.date)}</p>
              </div>
              <p className="text-2xl font-bold text-green-500">${expense.amount}</p>
            </div>

            <p className="text-sm text-secondary">{expense.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ExpenseList;

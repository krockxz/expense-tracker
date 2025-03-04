const Expense = require('../models/Expense');

// ✅ 1. Add a new expense (POST /expenses)
exports.addExpense = async (req, res) => {
  try {
    const { amount, category, date, description } = req.body;
    const expense = new Expense({ amount, category, date, description });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// ✅ 2. Get all expenses (GET /expenses)
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({});
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// ✅ 3. Get filtered expenses (GET /expenses?category=Food&date=YYYY-MM-DD)
exports.getFilteredExpenses = async (req, res) => {
  try {
    const { category, date } = req.query;
    let query = {};

    if (category) query.category = category;
    if (date) query.date = new Date(date); // Convert to Date object

    const expenses = await Expense.find(query);
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// ✅ 4. Get total expenses for a date range (GET /expenses/total?start=YYYY-MM-DD&end=YYYY-MM-DD)
exports.getTotalExpenses = async (req, res) => {
  try {
    const { start, end } = req.query;
    const total = await Expense.aggregate([
      {
        $match: {
          date: { $gte: new Date(start), $lte: new Date(end) }
        }
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" }
        }
      }
    ]);

    res.status(200).json({ totalAmount: total.length > 0 ? total[0].totalAmount : 0 });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

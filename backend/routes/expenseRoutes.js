const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.post('/', expenseController.addExpense);

router.get('/', expenseController.getAllExpenses);

router.get('/filter', expenseController.getFilteredExpenses);

router.get('/total', expenseController.getTotalExpenses);

module.exports = router;

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const expenseRoutes = require('./routes/expenseRoutes');

dotenv.config();

const app = express();
app.use(express.json()); // for parsing application/json

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// API routes
app.use('/api/expenses', expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

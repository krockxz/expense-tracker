
---

# Expense Tracker

A simple **Expense Tracker** web application built with **React** and **Node.js**.

This app allows users to add, filter, and view their expenses, making it easier to track their spending over time. The frontend is built using React, while the backend API is built using Node.js and Express.

---

## **Features**

- Add new expenses (Amount, Category, Date, Description)
- Filter expenses by category and date range
- View total expenses for a specific date range
- Responsive and interactive design

---

## **Installation and Setup**

### **Step 1: Clone the repository**

Clone the project to your local machine using Git:

```bash
git clone https://github.com/krockxz/expense-tracker.git
```

### **Step 2: Install Dependencies for Frontend**

Navigate to the frontend directory and install the required dependencies.

```bash
cd frontend
npm install
```

This will install all the dependencies listed in `frontend/package.json`, including **React**, **Axios**, and **TailwindCSS**.

### **Step 3: Install Dependencies for Backend**

Next, navigate to the backend directory (if you have it as a separate folder) and install the required dependencies.

```bash
cd backend
npm install
```

This will install all the dependencies listed in `backend/package.json`, including **Express**, **Cors**, and other necessary libraries for the backend.

### **Step 4: Configure the Environment**

- Make sure that your **API URL** is configured correctly in your frontend. The test env has been commited.

If you're using `.env` files, you can set the API URL in your frontend’s `.env` file like this:

```env
REACT_APP_API_URL=http://localhost:5000
```

### **Step 5: Running the Application**

Now that everything is set up, you can run both the frontend and backend simultaneously.

#### **Run the Backend**:

1. Open a terminal in the **backend directory** and run the following command:

```bash
npm start
```

This will start the backend server on `http://localhost:5000` (default port).

#### **Run the Frontend**:

2. Open another terminal in the **frontend directory** and run:

```bash
npm start
```

This will start the frontend development server on `http://localhost:3000`.

You can now access the app in your browser at `http://localhost:3000`.

---

## **API Endpoints**

- **GET `/api/expenses`**: Fetch all expenses.
- **GET `/api/expenses/filter`**: Filter expenses by category and date.
  - Query parameters: `category`, `date`
- **GET `/api/expenses/total`**: Fetch total expenses for a given date range.
  - Query parameters: `start`, `end`

---

## **Tech Stack**

- **Frontend**: React, TailwindCSS, Axios
- **Backend**: Node.js, Express
- **Database**: Can be connected to any database(here MongoDB)
- **CORS**: Enabled for allowing requests from frontend

---

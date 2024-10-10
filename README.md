
# Banking Management System

A modern banking management system built with Python (Flask) and MySQL for the backend, and React with Redux and Material-UI for the frontend. This application allows users to manage bank accounts, perform deposits and withdrawals, transfer funds, and much more.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)

## Introduction

This application allows users to manage their bank accounts through a modern web-based interface. The backend is built with Flask and MySQL, and the frontend is developed using React, Redux, and Material-UI to ensure a modern, responsive, and user-friendly experience.

## Features

1. **Add New Account**: Open a new bank account by providing required personal details like name, date of birth, checking, and savings balances.
2. **View All Accounts**: View all existing accounts with detailed information.
3. **Search Account**: Search for an account by account number and view account details.
4. **Deposit Money**: Deposit money into checking or savings accounts.
5. **Withdraw Money**: Withdraw money from checking or savings accounts.
6. **Transfer Money**: Transfer money between accounts or to another user’s account.
7. **Savings to Checkings/Checkings to Savings**: Transfer money between checking and savings accounts within the same user account.
8. **Delete Account**: Close and delete a bank account.
9. **Responsive Frontend**: A clean and modern user interface using Material-UI, with responsive design for various screen sizes.

## Requirements

### Backend:
- Python 3.x
- MySQL
- Flask
- Flask-CORS

### Frontend:
- Node.js (v14 or higher recommended)
- React.js
- Redux
- Material-UI

## Installation

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/banking-management-system.git
   cd banking-management-system/backend
   ```

2. Create a Python virtual environment (optional but recommended):

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # Linux/MacOS
   venv\Scripts\activate  # Windows
   ```

3. Install required dependencies:

   ``` bash
   pip install -r requirements.txt
   ```

4. Set up your MySQL database:

   - Create a MySQL database.
   - Configure the MySQL username and password in your \`Banking_init.py\` or \`Banking_proj.py\` file.
   - Run your MySQL setup scripts if available.

5. Run the Flask backend:

   ```bash
   python Banking_proj.py
   ```

### Frontend Setup

1. Navigate to the \`frontend\` directory:

   ```bash
   cd ../frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Run the React app:

   ```bash
   npm start
   ```

4. Your app should now be running at \`http://localhost:3000\`.

## Usage

1. **Add Account**: Navigate to the "Add Account" section to create a new bank account by entering the required details.
2. **View Accounts**: Go to the "View Accounts" section to see a table of all bank accounts.
3. **Search Account**: Use the "Search Account" feature to find details of a specific account by entering the account number.
4. **Deposit/Withdraw**: Once an account is selected, deposit or withdraw money by following the prompts.
5. **Transfer Money**: Transfer funds from one account to another using the "Transfer Money" feature.

### Backend Endpoints

- `POST /add-account`: Adds a new account.
- `GET /view-accounts`: Retrieves a list of all accounts.
- `GET /search-account/<account_number>`: Retrieves account details for a given account number.


from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="your_username",
    password="your_password",
    database="your_database"
)
mycur = db.cursor()

@app.route('/add-account', methods=['POST'])
def add_account():
    data = request.json
    ano = data['account_number']
    fname = data['first_name']
    lname = data['last_name']
    dob = data['dob']
    c_balance = data['c_balance']
    s_balance = data['s_balance']
    doa = data['doa']

    try:
        sql = f"INSERT INTO accounts VALUES({ano}, '{fname}', '{lname}', '{dob}', {c_balance}, {s_balance}, '{doa}')"
        mycur.execute(sql)
        db.commit()
        return jsonify({"message": "Account created successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# View all accounts
@app.route('/view-accounts', methods=['GET'])
def view_accounts():
    try:
        sql = "SELECT * FROM accounts"
        mycur.execute(sql)
        accounts = mycur.fetchall()
        result = []
        for account in accounts:
            result.append({
                "account_number": account[0],
                "first_name": account[1],
                "last_name": account[2],
                "dob": account[3],
                "checking_balance": account[4],
                "savings_balance": account[5],
                "created_on": account[6]
            })
        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Search account by account number
@app.route('/search-account/<int:account_number>', methods=['GET'])
def search_account(account_number):
    try:
        sql = f"SELECT * FROM accounts WHERE account_number = {account_number}"
        mycur.execute(sql)
        account = mycur.fetchone()
        if account:
            return jsonify({
                "account_number": account[0],
                "first_name": account[1],
                "last_name": account[2],
                "dob": account[3],
                "checking_balance": account[4],
                "savings_balance": account[5],
                "created_on": account[6]
            }), 200
        else:
            return jsonify({"message": "Account not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Deposit money into an account
@app.route('/deposit', methods=['POST'])
def deposit():
    data = request.json
    account_number = data['account_number']
    amount = data['amount']
    account_type = data['account_type']

    try:
        if account_type.lower() == 'checking':
            sql = f"UPDATE accounts SET checkings_balance = checkings_balance + {amount} WHERE account_number = {account_number}"
        elif account_type.lower() == 'savings':
            sql = f"UPDATE accounts SET savings_balance = savings_balance + {amount} WHERE account_number = {account_number}"
        else:
            return jsonify({"message": "Invalid account type"}), 400

        mycur.execute(sql)
        db.commit()
        return jsonify({"message": "Deposit successful"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Withdraw money from an account
@app.route('/withdraw', methods=['POST'])
def withdraw():
    data = request.json
    account_number = data['account_number']
    amount = data['amount']
    account_type = data['account_type']

    try:
        if account_type.lower() == 'checking':
            sql = f"UPDATE accounts SET checkings_balance = checkings_balance - {amount} WHERE account_number = {account_number}"
        elif account_type.lower() == 'savings':
            sql = f"UPDATE accounts SET savings_balance = savings_balance - {amount} WHERE account_number = {account_number}"
        else:
            return jsonify({"message": "Invalid account type"}), 400

        mycur.execute(sql)
        db.commit()
        return jsonify({"message": "Withdrawal successful"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Transfer money between two accounts
@app.route('/transfer', methods=['POST'])
def transfer():
    data = request.json
    from_account = data['from_account']
    to_account = data['to_account']
    amount = data['amount']

    try:
        sql = f"SELECT checkings_balance FROM accounts WHERE account_number = {from_account}"
        mycur.execute(sql)
        balance = mycur.fetchone()[0]
        
        if balance < float(amount):
            return jsonify({"message": "Insufficient funds"}), 400

        sql = f"UPDATE accounts SET checkings_balance = checkings_balance - {amount} WHERE account_number = {from_account}"
        mycur.execute(sql)

        sql = f"UPDATE accounts SET checkings_balance = checkings_balance + {amount} WHERE account_number = {to_account}"
        mycur.execute(sql)

        db.commit()
        return jsonify({"message": "Transfer successful"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Delete an account by account number
@app.route('/delete-account/<int:account_number>', methods=['DELETE'])
def delete_account(account_number):
    try:
        sql = f"DELETE FROM accounts WHERE account_number = {account_number}"
        mycur.execute(sql)
        db.commit()
        return jsonify({"message": "Account deleted successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)

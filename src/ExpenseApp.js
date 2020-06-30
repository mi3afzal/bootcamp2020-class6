import React, { useState } from 'react';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { Footer } from './components/Footer';


function ExpenseApp() {

    const initialExpenseData = {
        balance: 2000,
        income: 5000,
        expense: -3000,
        transactions: [
            { amount: 5000, desc: "Salery" },
            { amount: -500, desc: "Cold Drinks" },
            { amount: -2300, desc: "Electric Bill" },
            { amount: -200, desc: "Gas Bill" },
        ]
    };

    let [expenseData, setExpenseData] = useState(initialExpenseData);

    const handleAddition = (newAmount, newDesc) => {
        if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        }
        expenseData.transactions.push({
            amount: Number(newAmount),
            desc: newDesc
        });
        if (Number(newAmount) > 0) expenseData.income = expenseData.income + Number(newAmount);
        else expenseData.expense = expenseData.expense + Number(newAmount);
        expenseData.balance = expenseData.balance + Number(newAmount);
        setExpenseData({...expenseData});
    }

    const handleDeletion = (actionIndex) => {
        expenseData.transactions = expenseData.transactions.filter(
            (object, index) => {
                if(index === actionIndex){
                    if (object.amount > 0) expenseData.income = expenseData.income - object.amount;
                    else expenseData.expense = expenseData.expense - object.amount;
                    expenseData.balance = expenseData.balance - object.amount;
                    return false;
                }
                else return true;
            }
        );
        setExpenseData({...expenseData});
        /* deleteTransaction(index) */
    }

    return (
        <div className="container">
            <Header />
            <Balance balance={expenseData.balance} />
            <IncomeExpenses income={expenseData.income} expense={expenseData.expense} />
            <TransactionList transactions={expenseData.transactions} handleDeletion={handleDeletion} />
            <AddTransaction handleAddition={handleAddition} />
            <Footer />
        </div>
    );
}

export default ExpenseApp;

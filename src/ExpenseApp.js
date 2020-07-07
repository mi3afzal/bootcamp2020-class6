import React, { useState } from 'react';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { Footer } from './components/Footer';

import { initialExpenseData, ExpenseContext } from "./expenseContext";

function ExpenseApp() {
    const expenseState = useState(initialExpenseData);

    return (
        <ExpenseContext.Provider value={expenseState}>
            <div className="container">
                <Header />
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
                <Footer />
            </div>
        </ExpenseContext.Provider>
    );
}

export default ExpenseApp;

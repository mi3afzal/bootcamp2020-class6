import { createContext } from "react";


export const initialExpenseData = {
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


export const ExpenseContext = createContext(initialExpenseData);
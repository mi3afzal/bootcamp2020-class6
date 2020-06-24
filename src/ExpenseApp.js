import React, { useState } from 'react';

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
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);


    const handleAddition = (event) => {
        event.preventDefault();
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


        setDesc('');
        setAmount('');
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
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> ${expenseData.balance}</h3>

            <div className="expense-container">
                <h3 className='income'>INCOME <br /> ${expenseData.income}</h3>
                <h3 className='expense'>EXPENSE <br /> ${expenseData.expense}</h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="transaction-list">
                {expenseData.transactions.map((transObj, index) => {
                    return (
                    <li key={index} className={transObj.amount < 0 ? 'expense-li' : 'income-li'}>
                        <button className='del' onClick={ () => handleDeletion(index) }>X</button>
                        <div className="transaction">
                            <span>{transObj.desc}</span>
                            <span>${transObj.amount}</span>
                        </div>
                    </li>
                    )
                })}

            </ul>

            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description <br />
                    <input type="text"
                        value={newDesc}
                        placeholder="Enter Description..."
                        onChange={(ev) => setDesc(ev.target.value)}
                        required />
                </label>

                <br />
                <label>
                    Enter Amount <br />
                    <input type="number"
                        value={newAmount}
                        placeholder="Enter Amount..."
                        onChange={(ev) => setAmount(ev.target.value)}
                        required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>
            <hr />
            <center><footer>Made with {'\u2665'} by Muhammad Irfan Afzal</footer></center>
        </div>
    );
}

export default ExpenseApp;

import React from 'react';


function ExpenseApp() {

    let transactions = [
        { amount: 5000, desc: "Salery" },
        { amount: -500, desc: "Cold Drinks" },
        { amount: -2300, desc: "Electric Bill" },
        { amount: -200, desc: "Gas Bill" },
    
    ];

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> $3000</h3>

            <div className="expense-container">
                <h3 className='income'>INCOME <br /> $5000</h3>
                <h3 className='expense'>EXPENSE <br /> $2000</h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="transaction-list">
                {transactions.map((transObj, index) => {
                    return (
                    <li key={index} className={transObj.amount < 0 ? 'expense-li' : 'income-li'}>
                        <button className='del' onClick="">X</button>
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

            <form className="transaction-form" onSubmit="">
                <label>
                    Enter Description <br />
                    <input type="text"
                        value=""
                        placeholder="Enter Description..."
                        onChange=""
                        required />
                </label>

                <br />
                <label>
                    Enter Amount <br />
                    <input type="number"
                        value=""
                        placeholder="Enter Amount..."
                        onChange=""
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

import React, { useContext }  from 'react';
import { ExpenseContext } from "../expenseContext";

export const TransactionList = () => {

	const [expenseData, setExpenseData] = useContext(ExpenseContext);
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
    }

	return (
		<div>
			<h3>History</h3>
			<hr />

			<ul className="transaction-list">
				{expenseData.transactions.map((transObj, index) => {
					return (
						<li key={index} className={transObj.amount < 0 ? 'expense-li' : 'income-li'}>
							<button className='del' onClick={() => handleDeletion(index)}>X</button>
							<div className="transaction">
								<span>{transObj.desc}</span>
								<span>${transObj.amount}</span>
							</div>
						</li>
					)
				})}

			</ul>
		</div>
	)
}

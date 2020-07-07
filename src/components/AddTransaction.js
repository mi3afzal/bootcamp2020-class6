import React, { useState, useContext } from 'react'
import { ExpenseContext } from "../expenseContext";

export const AddTransaction = () => {
	const [newDesc, setDesc] = useState("");
	const [newAmount, setAmount] = useState(0);

	const [expenseData, setExpenseData] = useContext(ExpenseContext);
	const handleAddition = (newAmount, newDesc) => {
        expenseData.transactions.push({
            amount: Number(newAmount),
            desc: newDesc
        });
        if (Number(newAmount) > 0) expenseData.income = expenseData.income + Number(newAmount);
        else expenseData.expense = expenseData.expense + Number(newAmount);
        expenseData.balance = expenseData.balance + Number(newAmount);
        setExpenseData({...expenseData});
    }

	const onSubmit = (event) => {
		event.preventDefault();
		if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        }
		handleAddition(newAmount, newDesc);
		setDesc('');
        setAmount('');
	}

	return (
		<div>
			<h3>Add new transaction</h3>
            <hr />
			<form className="transaction-form" onSubmit={onSubmit}>
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
					Enter Amount <br />(negative - expense, positive - income) <br />
					<input type="number"
						value={newAmount}
						placeholder="Enter Amount..."
						onChange={(ev) => setAmount(ev.target.value)}
						required />
				</label>
				<br />
				<input type="submit" value="Add Transaction" />
			</form>
		</div>
	)
}

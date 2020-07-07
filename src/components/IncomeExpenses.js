import React, { useContext } from 'react';
import { ExpenseContext } from '../expenseContext';

export const IncomeExpenses = () => {
	const expenseData = useContext(ExpenseContext)[0];
	return (
		<div className="expense-container">
			<h3 className='income'>INCOME <br /> ${expenseData.income}</h3>
			<h3 className='expense'>EXPENSE <br /> ${expenseData.expense}</h3>
		</div>
	)
}

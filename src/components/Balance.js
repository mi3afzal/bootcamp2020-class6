import React, { useContext } from 'react';
import { ExpenseContext } from '../expenseContext';

export const Balance = () => {
	const expenseData = useContext(ExpenseContext)[0];
	return (
		<h3>Your Balance <br /> ${expenseData.balance}</h3>
	)
}

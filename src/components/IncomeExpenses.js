import React from 'react';

export const IncomeExpenses = (props) => {
	return (
		<div className="expense-container">
			<h3 className='income'>INCOME <br /> ${props.income}</h3>
			<h3 className='expense'>EXPENSE <br /> ${props.expense}</h3>
		</div>
	)
}

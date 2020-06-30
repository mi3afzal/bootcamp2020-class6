import React from 'react';

export const TransactionList = (props) => {

	return (
		<div>
			<h3>History</h3>
			<hr />

			<ul className="transaction-list">
				{props.transactions.map((transObj, index) => {
					return (
						<li key={index} className={transObj.amount < 0 ? 'expense-li' : 'income-li'}>
							<button className='del' onClick={() => props.handleDeletion(index)}>X</button>
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

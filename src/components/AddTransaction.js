import React, { useState } from 'react'


export const AddTransaction = (props) => {
	const [newDesc, setDesc] = useState("");
	const [newAmount, setAmount] = useState(0);

	const onSubmit = (event) => {
		event.preventDefault();
		props.handleAddition(newAmount, newDesc);
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

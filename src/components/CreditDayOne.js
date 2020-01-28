import React from 'react';

const CreditDayOne = ({ initialDate, initialData, currencyFormat }) => (
	<div className="level">
		<div className="has-text-centered">
			<p className="heading">Starting Date</p>
			<p className="title">{initialDate}</p>
		</div>
		<div className="has-text-centered">
			<p className="heading">Interest Rate</p>
			<p className="title">{initialData.interest_rate}%</p>
		</div>
		<div className="has-text-centered">
			<p className="heading">Starting Balance</p>
			<p className="title">{currencyFormat(initialData.balance)}</p>
		</div>
		<div className="has-text-centered">
			<p className="heading">Starting Contributions</p>
			<p className="title">{currencyFormat(initialData.contribution)}</p>
		</div>
	</div>
);

export default CreditDayOne;

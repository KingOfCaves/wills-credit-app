import React from 'react';

const CreditYearly = ({ yearlyData, currencyFormat, page }) => (
	<table className="table is-fullwidth is-bordered is-hoverable">
		<thead>
			<tr>
				<th>Dates</th>
				<th>Balance</th>
				<th>Contributions</th>
			</tr>
		</thead>
		<tbody>
			{yearlyData[page].map((data) => (
				<tr key={data.date}>
					<td>{data.date}</td>
					<td>{currencyFormat(data.balance)}</td>
					<td>{currencyFormat(data.contribution)}</td>
				</tr>
			))}
		</tbody>
	</table>
);

export default CreditYearly;

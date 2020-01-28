import React, { useState, useEffect } from 'react';
import CreditSelection from './CreditSelection';
import CreditInfo from './CreditInfo';
import Splash from './Splash';

const CreditApp = () => {
	const [data, setData] = useState(null);
	const [dates, setDates] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('/data.json', { method: 'GET', mode: 'no-cors' })
			.then((response) => response.json())
			.then((data) => {
				const {
					'Credit Card': credit_card,
					'Line Of Credit': line_of_credit,
					Car: car,
					Dates: dates
				} = data;
				setData({ credit_card, line_of_credit, car });
				setDates(dates);
			})
			.catch((error) => {
				setError('Something went wrong! The data could not be fetched.');
			});
	}, []);

	return (
		<div className="section">
			{!data || error ? (
				<div className="container">
					<p>{error}</p>
					<Splash />
				</div>
			) : (
				<div className="container">
					<CreditSelection
						data={data}
						setSelectedCategory={setSelectedCategory}
					/>
					<CreditInfo 
						selectedCategory={selectedCategory} 
						dates={dates} 
					/>
				</div>
			)}
		</div>
	);
};

export default CreditApp;

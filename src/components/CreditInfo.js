import React, { useState, useEffect } from 'react';
import CreditDayOne from './CreditDayOne';
import CreditPagination from './CreditPagination';
import CreditYearly from './CreditYearly';

const CreditInfo = ({ dates, selectedCategory }) => {
	const [initialData, setInitialData] = useState({
		balance: 0,
		interest_rate: 0,
		contribution: 0
	});
	const [yearlyData, setYearlyData] = useState(null);
	const [initialDate, setInitialDate] = useState('Day, 00 Jan 0000');
	const [page, setPage] = useState(0);

	useEffect(() => {
		if (selectedCategory) {
			const initData = {
				date: dates[0] || 'NONE',
				balance: selectedCategory.balance[0] || 0,
				interest_rate: selectedCategory.interest_rate || 0,
				contribution: selectedCategory.contributions[0] || 0
			};

			const datesYearly = dates.slice(1);
			const balanceYearly = selectedCategory.balance.slice(1);
			const contributionsYearly = selectedCategory.contributions.slice(1);

			const structuredYearlyData = datesYearly.map((year, yearIndex) => {
				return year.map((month, monthIndex) => ({
					date: checkIndex(() => month, 'N/A'),
					balance: checkIndex(
						() => balanceYearly[yearIndex][monthIndex],
						0
					),
					contribution: checkIndex(
						() => contributionsYearly[yearIndex][monthIndex],
						0
					)
				}));
			});

			setInitialData({
				balance: initData.balance,
				interest_rate: initData.interest_rate,
				contribution: initData.contribution
			});
			setInitialDate(initData.date);
			setYearlyData(structuredYearlyData);
			setPage(0);
		}
	}, [dates, selectedCategory]);

	const checkIndex = (fn, fallback) => {
		try {
			return fn();
		} catch (error) {
			return fallback;
		}
	};

	const currencyFormat = (number) => {
		return typeof number === 'number'
			? `$${number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
			: number;
	};

	return (
		<React.Fragment>
			{!selectedCategory || !yearlyData ? (
				<div className="notification is-warning has-text-centered">
					Please select a category to get started.
				</div>
			) : (
				<div>
					<CreditDayOne
						initialData={initialData}
						initialDate={initialDate}
						currencyFormat={currencyFormat}
					/>
					<CreditYearly
						yearlyData={yearlyData}
						page={page}
						currencyFormat={currencyFormat}
					/>
					<CreditPagination
						yearlyData={yearlyData}
						page={page}
						setPage={setPage}
					/>
				</div>
			)}
		</React.Fragment>
	);
};

export default CreditInfo;

import React from 'react';

const CreditPagination = ({ setPage, page, yearlyData }) => {
	const changePage = (direction) => {
		const [min, max] = [0, yearlyData.length - 1];
		switch (direction) {
			case 'next':
				return setPage(page < max ? page + 1 : page);
			case 'previous':
				return setPage(page > min ? page - 1 : page);
			default:
				if (typeof direction === 'number' && min < direction < max) {
					return setPage(direction);
				}
		}
	};

	return (
		<nav className="pagination is-centered">
			<div
				className="pagination-previous"
				onClick={() => changePage('previous')}
			>
				Previous
			</div>
			<div className="pagination-next" onClick={() => changePage('next')}>
				Next
			</div>
			<ul className="pagination-list">
				{yearlyData.map((data, index) => (
					<li key={index + 1}>
						<div
							className={`pagination-link ${
								page === index ? 'is-current' : ''
							}`}
							onClick={() => changePage(index)}
						>
							{index + 1}
						</div>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default CreditPagination;

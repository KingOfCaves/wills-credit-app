import React, { useState, useEffect } from 'react';

const CreditSelection = ({ data, setSelectedCategory }) => {
	const [categories, setCategories] = useState([]);
	const [activeCategory, setActiveCategory] = useState('');

	useEffect(() => {
		const keys = Object.keys(data);
		setCategories(keys);
	}, [data]);

	const onActivateCategory = (category) => {
		setActiveCategory(category);
		setSelectedCategory(data[category]);
	};

	const textFormat = (text) => {
		return text
			.split('_')
			.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
			.join(' ');
	};

	return (
		<React.Fragment>
			<div className="buttons has-addons is-centered">
				{categories.map((category) => (
					<button
						key={category}
						className={`button ${
							activeCategory === category ? 'is-info' : ''
						}`}
						onClick={() => onActivateCategory(category)}
					>
						Show {textFormat(category)} Information
					</button>
				))}
			</div>
		</React.Fragment>
	);
};

export default CreditSelection;

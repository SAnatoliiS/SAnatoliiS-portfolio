import React from 'react';
import { sample } from 'lodash';

const Controls = ({ items, chooseItem, openNewItemModal }) => {
	const onChoose = () => {
		const chosenItem = sample(items.map(item => item.id));
		chooseItem(chosenItem);
	};
	const onOpenAddModal = () => {
		openNewItemModal();
	};
	return (
		<div>
			<button type="button" className="btn btn-primary" onClick={onChoose}>
				CHOOSE
			</button>
			<button
				type="button"
				className="btn btn-primary"
				onClick={onOpenAddModal}
			>
				ADD
			</button>
		</div>
	);
};

export default Controls;

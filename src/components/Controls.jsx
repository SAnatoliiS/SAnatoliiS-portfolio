import React from 'react';
import { sample } from 'lodash';

const Controls = ({ items, choose, openNewItemModal }) => {
	const onChoose = () => {
		const chosenItem = sample(items.map(item => item.id));
		choose(chosenItem);
	};
	return (
		<div className="controls">
			<button
				type="button"
				className="btn-primary button"
				onClick={openNewItemModal}
			>
				ADD
			</button>
			<button
				type="button"
				className="btn-primary button flex__button"
				onClick={onChoose}
				disabled={items.length === 0}
			>
				CHOOSE
			</button>
		</div>
	);
};

export default Controls;

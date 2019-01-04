import React from 'react';

const Item = ({ removeItem, item: { id: itemId, title } }) => {
	const onRemoveItem = id => () => {
		removeItem(id);
	};
	return (
		<div>
			<p>{title}</p>
			<button onClick={onRemoveItem(itemId)}>x</button>
		</div>
	);
};

export default Item;

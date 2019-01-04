import React from 'react';
import Item from '../containers/Item';

const ItemList = ({ resetList, items }) => {
	const onResetList = () => {
		resetList();
	};
	return (
		<div>
			{items.length > 0 ? <button onClick={onResetList}>clear</button> : null}
			{items.map(item => (
				<Item key={item.id} item={item} />
			))}
		</div>
	);
};

export default ItemList;

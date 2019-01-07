import React from 'react';
import Item from '../containers/Item';

const ItemList = ({ resetList, items }) => {
	const onResetList = () => {
		resetList();
	};
	return (
		<div>
			<div className="item-list-header">
				<div>Your options</div>
				{items.length > 0 ? (
					<button className="button button--link" onClick={onResetList}>
						Remove all
					</button>
				) : null}
			</div>
			<div className="item-list">
				{items.map(item => (
					<Item key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default ItemList;

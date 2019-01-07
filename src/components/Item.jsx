import React from 'react';

const Item = ({ removeItem, item: { id: itemId, title, info } }) => {
	const onRemoveItem = id => () => {
		removeItem(id);
	};
	return (
		<div className="item">
			<div>
				<p>{title}</p>
				{info && <p className="blockquote item-info">{'- ' + info}</p>}
			</div>
			<button className="button button--link" onClick={onRemoveItem(itemId)}>
				Remove
			</button>
		</div>
	);
};

export default Item;

import React from 'react';

const Description = ({ items }) => {
	return (
		<div className="desription-container">
			<div className="description">
				<p className="description__title">Note:</p>
				{items.length === 0 ? (
					<p className="description__note">
						First you need to add some options
					</p>
				) : (
					<div>
						<p className="description__note">"ADD" - to add more options</p>
						<p className="description__note">"CHOOSE" - to make desicion</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Description;

import React from 'react';
import Modal from 'react-modal';

const ChosenItem = ({ chosenItem: { title, info }, unChoose }) => {
	const onUnChoose = () => {
		unChoose();
	};
	return (
		<Modal
			className="modal-common modal-common--chosen"
			isOpen={!!title}
			onRequestClose={onUnChoose}
		>
			<div className="modal__header">Chosen option</div>
			<div className="modal__body">
				<h3 className="chosen-modal__title">{title}</h3>
				{info ? (
					<p className="blockquote chosen-modal__info">{`- ${info}`}</p>
				) : null}
				<div className="modal__buttons">
					<button className="btn-primary button" onClick={onUnChoose}>
						Okay
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default ChosenItem;

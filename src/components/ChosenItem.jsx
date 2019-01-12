import React from 'react';
import Modal from 'react-modal';

const ChosenItem = ({ chosenItem: { title, info }, unChoose, isOpenModal }) => {
	const onUnChoose = () => {
		unChoose();
	};
	return (
		<Modal
			className="modal-common modal-common--chosen"
			isOpen={isOpenModal}
			onRequestClose={onUnChoose}
			closeTimeoutMS={200}
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

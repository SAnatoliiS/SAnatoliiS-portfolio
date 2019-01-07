import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Modal from 'react-modal';

const NewItem = ({
	isNewItemModalOpen,
	addItem,
	reset,
	handleSubmit,
	closeNewItemModal
}) => {
	const onAddItem = values => {
		addItem(values);
		reset();
		closeNewItemModal();
	};
	const closeModal = () => {
		reset();
		closeNewItemModal();
	};
	return (
		<Modal
			isOpen={isNewItemModalOpen}
			onRequestClose={closeModal}
			contentLabel="What is your next option?"
			className="modal-common"
		>
			<div className="modal__header">New option</div>
			<form className="modal__body" onSubmit={handleSubmit(onAddItem)}>
				<div className="new-item-modal__fields">
					<div>Title*:</div>
					<Field
						className="new-item-modal__title-field"
						name="title"
						required
						component="input"
						type="text"
					/>
					<div>Additional Info (not required):</div>
					<Field
						className="new-item-modal__info-field"
						name="info"
						component="input"
						type="text"
					/>
				</div>
				<div className="modal__buttons">
					<button className="btn-primary button" onClick={closeModal}>
						Cancel
					</button>
					<button className="btn-primary button" type="submit">
						Add
					</button>
				</div>
			</form>
		</Modal>
	);
};

Modal.setAppElement('body');

export default reduxForm({
	form: 'newItem'
})(NewItem);

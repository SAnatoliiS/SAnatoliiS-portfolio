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
		<Modal isOpen={isNewItemModalOpen} onRequestClose={closeModal}>
			<form onSubmit={handleSubmit(onAddItem)}>
				<Field
					name="title"
					required
					component="input"
					placeholder="Title*"
					type="text"
				/>
				<Field
					name="info"
					component="input"
					placeholder="Additional Info"
					type="text"
				/>
				<button type="submit">Add</button>
			</form>
		</Modal>
	);
};

Modal.setAppElement('body');

export default reduxForm({
	form: 'newItem'
})(NewItem);

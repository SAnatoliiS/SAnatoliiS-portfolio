import { connect } from 'react-redux';
import NewItem from '../components/NewItem.jsx';
import { addItem } from '../actions/items';
import { closeNewItemModal } from '../actions/modals';

const mapStateToProps = ({ openModals: { newItem } }) => ({
	isNewItemModalOpen: newItem
});

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
	closeNewItemModal: () => dispatch(closeNewItemModal())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewItem);

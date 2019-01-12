import { connect } from 'react-redux';
import ChosenItem from '../components/ChosenItem.jsx';
import { unChoose } from '../actions/chosen';
import { closeChosenItemModal } from '../actions/modals';

const mapStateToProps = ({ items, chosenItemId, openModals }) => ({
	chosenItem: items.find(item => item.id === chosenItemId) || {},
	isOpenModal: openModals.chosenItem
});
const mapDispatchToProps = dispatch => ({
	unChoose: () => {
		dispatch(closeChosenItemModal());
		setTimeout(() => dispatch(unChoose()), 200);
	}
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChosenItem);

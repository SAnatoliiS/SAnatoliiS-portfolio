import { connect } from 'react-redux';
import Controls from '../components/Controls.jsx';
import { choose } from '../actions/chosen';
import { openNewItemModal, openChosenItemModal } from '../actions/modals';

const mapStateToProps = ({ items }) => ({
	items
});

const mapDispatchToProps = dispatch => ({
	choose: id => {
		dispatch(choose(id));
		dispatch(openChosenItemModal());
	},
	openNewItemModal: () => dispatch(openNewItemModal())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Controls);

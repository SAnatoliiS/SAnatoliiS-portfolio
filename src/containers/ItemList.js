import { connect } from 'react-redux';
import ItemList from '../components/ItemList.jsx';
import { startResetList } from '../actions/items';

const mapStateToProps = ({ items }) => ({
	items
});

const mapDispatchToProps = dispatch => ({
	resetList: () => dispatch(startResetList())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemList);

import { connect } from 'react-redux';
import Item from '../components/Item.jsx';
import { startRemoveItem } from '../actions/items';

const mapDispatchToProps = dispatch => ({
	removeItem: id => dispatch(startRemoveItem(id))
});

export default connect(
	null,
	mapDispatchToProps
)(Item);

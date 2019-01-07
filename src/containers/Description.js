import { connect } from 'react-redux';
import Description from '../components/Description.jsx';

const mapStateToProps = ({ items }) => ({
	items
});

export default connect(mapStateToProps)(Description);

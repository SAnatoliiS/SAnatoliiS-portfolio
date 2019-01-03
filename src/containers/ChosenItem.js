import { connect } from 'react-redux'
import ChosenItem from '../components/ChosenItem.jsx'
import { unChoose } from '../actions/chosen'

const mapStateToProps = ({ items, chosenItemId }) => ({
  chosenItem: items.find(item => item.id === chosenItemId) || {}
})
const mapDispatchToProps = (dispatch) => ({
  unChoose: () => dispatch(unChoose())
})
export default connect(mapStateToProps, mapDispatchToProps)(ChosenItem)
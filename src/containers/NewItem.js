import { connect } from 'react-redux'
import NewItem from '../components/NewItem.jsx'
import { addItem } from '../actions/items'

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(NewItem)
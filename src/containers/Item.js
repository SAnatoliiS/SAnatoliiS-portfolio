import { connect } from 'react-redux'
import Item from '../components/Item.jsx'
import { removeItem } from '../actions/items'

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItem(id))
})

export default connect( null, mapDispatchToProps)(Item);
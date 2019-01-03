import { connect } from 'react-redux'
import ItemList from "../components/ItemList.jsx"
import { reset } from '../actions/items'

const mapStateToProps = ({items}) => ({
  items
})

const mapDispatchToProps = (dispatch) => ({
  resetList: () => dispatch(reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
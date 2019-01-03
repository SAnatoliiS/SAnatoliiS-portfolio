import { connect } from 'react-redux'
import ItemList from "../components/ItemList.jsx"
import { resetList } from '../actions/items'

const mapStateToProps = ({items}) => ({
  items
})

const mapDispatchToProps = (dispatch) => ({
  resetList: () => dispatch(resetList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
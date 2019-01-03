import { connect } from 'react-redux'
import Controls from '../components/Controls.jsx'
import { choose, unChoose } from '../actions/chosen'

const mapStateToProps = ({ items }) => ({
  items
})

const mapDispatchToProps = (dispatch) => ({
  chooseItem: (id) => dispatch(choose(id)),
  unChoose: () => dispatch(unChoose())
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
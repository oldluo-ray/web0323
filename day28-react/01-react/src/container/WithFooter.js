import { connect } from 'react-redux'
import Footer from '../components/Footer/Footer'
import { allCheckedTodo, deleteAllDone } from '../redux/actions'

export default connect((state) => ({ list: state.list }), {
  allCheckedTodo,
  deleteAllDone,
})(Footer)

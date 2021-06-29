import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import { addTodo } from '../redux/actions'

export default connect(null, { addTodo })(Header)

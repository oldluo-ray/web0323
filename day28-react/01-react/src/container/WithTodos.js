import { connect } from 'react-redux'
import Todos from '../Todos'

export default connect((state) => ({ list: state.list }))(Todos)

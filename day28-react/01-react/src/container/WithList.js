import { connect } from 'react-redux'
import List from '../components/List/List'

export default connect((state) => ({ list: state.list }))(List)

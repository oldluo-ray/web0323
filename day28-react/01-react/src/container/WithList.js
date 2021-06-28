import { connect } from 'react-redux'

import List from '../components/List'
import { getDataAsync } from '../redux/actions'

export default connect((state) => ({ list: state.list }), { getDataAsync })(
  List
)

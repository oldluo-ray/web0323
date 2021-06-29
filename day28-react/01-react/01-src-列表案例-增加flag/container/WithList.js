import { connect } from 'react-redux'

import List from '../components/List'
import { getDataAsync, setFlag } from '../redux/actions'

export default connect((state) => ({ list: state.list, flag: state.flag }), {
  getDataAsync,
  setFlag,
})(List)

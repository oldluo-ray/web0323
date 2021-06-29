import { connect } from 'react-redux'

import List from '../components/List'
import { getDataAsync, setFlag } from '../redux/actions'

export default connect(
  (state) => ({
    list: state.getDataReducer.list,
    flag: state.setFlagReducer.flag,
  }),
  {
    getDataAsync,
    setFlag,
  }
)(List)

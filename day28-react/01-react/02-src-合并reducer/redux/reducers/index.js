// 这个文件,用于合并reducer
import { combineReducers } from 'redux'
import getDataReducer from './getDataReducer'
import setFlagReducer from './setFlagReducer'

const rootReducer = combineReducers({
 getDataReducer,
 setFlagReducer,
})

export default rootReducer

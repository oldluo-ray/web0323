import { connect } from 'react-redux'
import Item from '../components/Item/Item'
import { updateTodo, deleteTodo } from '../redux/actions'
function mapStateToProps(state, props) {
  console.log('withItem', state, props)
  return {
    item: { ...props.item },
  }
}
export default connect(mapStateToProps, { updateTodo, deleteTodo })(Item)
// connect函数第一次调用,的第一个参数是一个函数, 函数可以接收到两个参数,第一个是redux最新的数据,第二个是这个高阶组件接收到的props的值
// export default connect((state, props) => ({ item: props.item }), {
//   updateTodo,
// })(Item)

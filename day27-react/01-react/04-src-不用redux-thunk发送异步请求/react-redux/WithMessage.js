import { connect } from 'react-redux'
import { push } from '../redux/actions'
import Message from '../Message'
// 这个方法,可以用来将redux数据,传递给展示组件
// 这个方法,会被调用多次,创建组件的时候,调用一次,数据发生还会被调用,因为数据发生变化了.需要将最新的数据传递给展示组件
// function mapStateToProps(state) {
//   // console.log('mapStatetoProps')
//   return {
//     arr: state.arr,
//   }
// }

// 这个方法,只会再创建组件的时候调用一次,只要把封装好的函数,传入到展示组件里面就可以了.不需要调用多次
// function mapDispatchToProps(dispatch) {
//   console.log('mapDispatchToProps')
//   return {
//     xxx: (data) => {
//       dispatch(push(data))
//     },
//   }
// }

export default connect(
  // 注意: 要返回的是一个对象,所以要记得加小括号,否则认为语法错误
  (state) => ({ arr: state.arr }),
  //connect函数,会根据这个actionCreator对应生成一个新的函数
  // push:(data)=>{
  //   dispatch(push(data))
  // }
  // 最后将生成和actionCreator一样名字的函数,通过props传递给展示组件
  { push }
)(Message)

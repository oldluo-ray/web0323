import { connect } from 'react-redux'
import { push } from '../redux/actions'
import Message from '../Message'
// 这个方法,可以用来将redux数据,传递给展示组件
// 这个方法,会被调用多次,创建组件的时候,调用一次,数据发生还会被调用,因为数据发生变化了.需要将最新的数据传递给展示组件
function mapStateToProps(state) {
  // console.log('mapStatetoProps')
  return {
    arr: state.arr,
  }
}

// 这个方法,只会再创建组件的时候调用一次,只要把封装好的函数,传入到展示组件里面就可以了.不需要调用多次
function mapDispatchToProps(dispatch) {
  console.log('mapDispatchToProps')
  return {
    xxx: (data) => {
      dispatch(push(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)

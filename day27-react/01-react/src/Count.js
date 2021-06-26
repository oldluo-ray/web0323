import React, { Component } from 'react'
import { connect } from 'react-redux'
class Count extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>计数器案例</h1>
        <div>{this.props.count}</div>
        <button
          onClick={() => {
            this.props.dispatch({ type: 'INCREMENT' })
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log(state)
  return {
    count: state.count,
  }
}
export default connect(mapStateToProps)(Count)
// function connect(){
//  return () => {
//       return class extends Compeont{
//     }
// }
// }

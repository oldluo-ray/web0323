import React, { Component } from 'react'

class Count extends Component {
  render() {
    console.log('count', this.props)
    return (
      <div>
        <h1>计数器案例</h1>
        <div>{this.props.count}</div>
        <button
          onClick={() => {
            // this.props.dispatch(increment())
            this.props.inc()
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}

export default Count

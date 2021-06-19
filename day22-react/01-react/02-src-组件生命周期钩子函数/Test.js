import React, { Component } from 'react'

export default class Test extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
    console.log('constructor')
  }
  render() {
    console.log('render')
    return (
      <div>
        <div>{this.state.count}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            })
          }}
        >
          按钮
        </button>
      </div>
    )
  }

  componentDidMount() {
    console.log('componentdidmount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}

import React, { Component } from 'react'
import testContext from './context'
export default class Son extends Component {
  //   render() {
  //     return (
  //       <testContext.Consumer>{(data) => <div>{data}</div>}</testContext.Consumer>
  //     )
  //   }
  static contextType = testContext
  render() {
    return <div>{this.context}</div>
  }
}

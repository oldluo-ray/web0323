import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    return <h5>detail的内容~~~{this.props.match.params.id}</h5>
  }
}

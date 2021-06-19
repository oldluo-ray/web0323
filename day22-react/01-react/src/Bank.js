import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Bank extends Component {
  componentDidMount() {
    // PubSub.publish('话题', 值)
    PubSub.publish('money', 0.5)
  }
  render() {
    return <div></div>
  }
}

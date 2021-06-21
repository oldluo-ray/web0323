import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Bank extends Component {
  componentDidMount() {
    PubSub.subscribe('eat', (topic, data) => {
      console.log(data)
    })
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            // PubSub.publish('话题', 值)
            PubSub.publish('money', 0.5)
          }}
        >
          Bank发布信息按钮
        </button>
      </div>
    )
  }
}

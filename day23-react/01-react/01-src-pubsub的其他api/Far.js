import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Son from './Son'
export default class Far extends Component {
  componentDidMount() {
    this.token = PubSub.subscribe('money', (topic, data) => {
      console.log('Far --' + data)
    })
  }

  render() {
    return (
      <div>
        <Son></Son>
        <button
          onClick={() => {
            PubSub.publish('eat', '面包')
          }}
        >
          Far按钮
        </button>
        <button
          onClick={() => {
            // PubSub.unsubscribe(this.token) // 取消指定的订阅
            // PubSub.unsubscribe('money') // 取消指定话题的订阅
            PubSub.clearAllSubscriptions() // 取消所有的订阅
          }}
        >
          Far取消订阅按钮
        </button>
      </div>
    )
  }
}

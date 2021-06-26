import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Message from '../Message'
import News from '../News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className='nav nav-tabs'>
            <li>
              <Link to='/home/news'>News</Link>
            </li>
            <li>
              <Link to='/home/message'>Message</Link>
            </li>
          </ul>
          <div>
            <div>
              {/* <News></News>
              <Message></Message> */}
              <Route path="/home/news" component={News}></Route>
              <Route path="/home/message" component={Message}></Route>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

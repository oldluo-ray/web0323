import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              <Link className='list-group-item' to='/about'>
                About
              </Link>
              <Link className='list-group-item' to='/home'>
                Home
              </Link>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* <Home></Home>
                <About></About> */}
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Router>
    )
  }
}

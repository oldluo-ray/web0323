import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Count from './Count'

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Count></Count>
      </div>
    </Provider>
  )
}

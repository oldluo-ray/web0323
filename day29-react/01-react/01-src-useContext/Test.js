import React, { useContext } from 'react'
import testContext from './context'
export default function Test() {
  const context = useContext(testContext)
  console.log(context)
  return <div>test组件</div>
}

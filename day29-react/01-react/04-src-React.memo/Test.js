import React from 'react'

function Test(props) {
  console.log('Test组件渲染了-' + props.count)
  return <div>{props.count}</div>
}
// export default React.memo(Test)
export default Test

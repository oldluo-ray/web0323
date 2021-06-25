import React from 'react'

export default function Test(props) {
  console.log(props)
  return <div ref={props.xxxref}>test</div>
}
// export default React.forwardRef((props, ref) => {
//   console.log(props, ref)
//   return <div ref={ref}>test组件</div>
// })

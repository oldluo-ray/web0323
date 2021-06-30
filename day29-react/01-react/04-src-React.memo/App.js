import React, { useState, useEffect } from 'react'
import Test from './Test'
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
}

function App() {
  console.log('app渲染了')
  const [count, setCount] = useState(0)
  return (
    <div>
      <button
        onClick={() => {
          setCount(getRandomIntInclusive(1, 2))
        }}
      >
        按钮
      </button>
      <Test count={count}></Test>
    </div>
  )
}
// class App extends React.Component {
//   state = {
//     count: 0,
//   }
//   render() {
//     console.log('app渲染了')
//     return (
//       <div>
//         <button
//           onClick={() => {
//             this.setState({
//               count: getRandomIntInclusive(1, 2),
//             })
//           }}
//         >
//           按钮
//         </button>
//         <Test count={this.state.count}></Test>
//       </div>
//     )
//   }
// }

export default App

import testContext from './context'
import Test from './Test'
import Counter from './Count'
export default function App() {
  return (
    <testContext.Provider value={{ name: 'zs' }}>
      {/* <Test></Test> */}
      <Counter initialCount={0}></Counter>
    </testContext.Provider>
  )
}

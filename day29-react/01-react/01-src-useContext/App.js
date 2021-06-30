import testContext from './context'
import Test from './Test'
export default function App() {
  return (
    <testContext.Provider value={{ name: 'zs' }}>
      <Test></Test>
    </testContext.Provider>
  )
}

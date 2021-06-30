import React, { useState, useCallback } from 'react'
import Button from './Button'

export default function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  const handleClickButton1 = () => {
    setCount1(count1 + 1)
  }

  // useCallback返回的还是一个函数,函数的结构,基本上相当于useCallback中的回调函数,只是可以监听到对应的某个state的变化,如果数据变化了,使用了这个useCallback的组件才会更新,如果数据没有发生变化,就不更新了
  const handleClickButton2 = useCallback(() => {
    setCount2(count2 + 1)
  }, [count2])
  //   const handleClickButton2 = () => {
  //     setCount2(count2 + 1)
  //   }

  return (
    <div>
      <div>
        <Button onClickButton={handleClickButton1}>Button1</Button>
      </div>
      <div>
        <Button onClickButton={handleClickButton2}>Button2</Button>
      </div>
      <div>
        <Button
          onClickButton={() => {
            setCount3(count3 + 1)
          }}
        >
          Button3
        </Button>
      </div>
    </div>
  )
}

import React, { useState, useMemo } from 'react'
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
}
export default function WithMemo() {
  const [count, setCount] = useState(1)
  const [val, setValue] = useState('')

  // useMemo返回的是上一次计算的结果,如果第二个参数监听的数据,发生变化了,useMemo的回调才会被调用,然后返回最新的计算的结果,如果监听的参数没有发生变化,回调函数就不会执行
  const expensive = useMemo(() => {
    console.log('compute')
    let sum = 0
    for (let i = 0; i < count * 100; i++) {
      sum += i
    }
    return sum
  }, [count])

  return (
    <div>
      <h4>
        {count}-{expensive}
      </h4>
      {val}
      <div>
        <button onClick={() => setCount(getRandomIntInclusive(1, 2))}>
          +c1
        </button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </div>
  )
}

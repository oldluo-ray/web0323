// 自定义hook. 要求: 自定义的hook,必须是以use开头: 比如:useXXX
import { useState, useEffect } from 'react'
export default function usePostion() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    // 挂载:
    window.addEventListener('mousemove', mousemoveHandle)
    return () => {
      //卸载
      window.removeEventListener('mousemove', mousemoveHandle)
    }
  }, [])

  function mousemoveHandle(e) {
    setX(e.clientX)
    setY(e.clientY)
  }

  return { x, y }
}

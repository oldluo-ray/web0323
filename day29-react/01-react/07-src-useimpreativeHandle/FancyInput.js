import React, { useRef, useImperativeHandle, forwardRef } from 'react'
function FancyInput(props, ref) {
  const inputRef = useRef()
  // 使用了useImperativeHandle,就可以将自定义的内容,暴露给父组件,这样父组件就不能获取到子组件的dom对象了,而是拿到子组件中想要暴露的内容.相对更安全
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
      // return 1
    },
  }))
  return <input ref={inputRef} />
}
FancyInput = forwardRef(FancyInput)
export default FancyInput

import React from 'react'

const Button = ({ onClickButton, children }) => {
  return (
    <>
      <button onClick={onClickButton}>{children}</button>
      <span>{Math.random()}</span>
    </>
  )
}

export default React.memo(Button) //React.memo 相当于就是类组件的PureComponent
// export default Button //React.memo 相当于就是类组件的PureComponent

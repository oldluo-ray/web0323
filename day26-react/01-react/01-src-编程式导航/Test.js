import React from 'react'
import { withRouter } from 'react-router-dom';

 function Test(props) {
    console.log(props);
    return (
        <div>
            Test组件
            <button onClick={()=>{
                props.history.push('/home')
            }}>test按钮</button>
            
        </div>
    )
}

export default  withRouter(Test)

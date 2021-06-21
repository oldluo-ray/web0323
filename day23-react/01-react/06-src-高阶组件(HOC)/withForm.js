import React from 'react'
export default function withForm(WrappedComponent) {
  return class With extends React.Component {
    // react调试工具,优先显示组件的displayName静态属性,然后是name属性,如果都没有就显示_temp
    static displayName = 'With' + WrappedComponent.name
    state = {
      username: '',
      password: '',
      repassword: '',
    }

    fn = (type) => (e) => {
      this.setState({
        [type]: e.target.value,
      })
    }

    render() {
      return (
        <WrappedComponent
          //  username={this.state.username}
          //  password={this.state.password}
          {...this.state}
          {...this.props}
          fn={this.fn}
        ></WrappedComponent>
      )
    }
  }
}

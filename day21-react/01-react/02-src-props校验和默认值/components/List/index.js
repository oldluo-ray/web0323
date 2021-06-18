import React, { Component } from 'react'
import PropTypes from 'prop-types'
// props校验的目的: 是为了让别人使用我们封装好的组件时,可以报更加清晰的错误
class List extends Component {
  // static xxx = 值 添加静态属性(简写)
  static propTypes = {
    list: PropTypes.array.isRequired,
  }
  // 配置默认props
  static defaultProps = {
    list: [
      '应该添加一个list属性',
      'list属性的值是数组',
      '数组中存放可以直接渲染的数据',
    ],
  }
  render() {
    // this.props.list
    return (
      <div>
        <ul>
          {this.props.list.map((item) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}
// List.xxx = 值 添加静态属性 标准写法
export default List

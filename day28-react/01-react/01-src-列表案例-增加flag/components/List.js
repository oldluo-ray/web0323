import React from 'react'

export default function List(props) {
  console.log(props)
  let newList = [...props.list]

  // 判断props.flag的值是不是child,如果是就过滤数据
  if (props.flag === 'child') {
    //对props.list进行过滤
    newList = props.list.filter((item) => {
      return item.age < 18
    })
  }

  return (
    <div>
      <button
        onClick={() => {
          props.getDataAsync()
        }}
      >
        获取列表数据
      </button>
      <button
        onClick={() => {
          // props.getDataAsync()
          // 修改存储在redux里面的那个标识
          props.setFlag('child')
        }}
      >
        展示小于18岁的用户数据
      </button>
      <ul>
        {/* 不管是第一次获取到所有数据,还是要展示部分数据,都要执行ul里面的这段代码. 
        所以如果要展示部分数据,或展示所有的数据,都不应该直接修改redux的数据. 应该在渲染之前,进行一个判断.在渲染前,根据判断依据,将展示组件拿到的数组,进行过滤.然后渲染 */}
        {newList.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <div>{item.age}</div>
            <p>{item.info}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

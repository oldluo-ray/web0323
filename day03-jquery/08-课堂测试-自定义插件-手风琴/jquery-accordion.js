$.fn.accordion = function (obj) {
  // 将obj.colors里面颜色,添加给li
  // 获取页面上的所有li
  var $lis = $(this).find('li')
  // 给每一个li添加宽度
  //先计算每一个li应该是多少
  var agvWidth = $(this).width() / $lis.length
  $lis.css({ width: agvWidth })
  // 给每一个li添加颜色
  $lis.each(function (index, element) {
    $(element).css('background-color', obj.colors[index])
  })

  // 鼠标移入到li里面,当前li变宽,其他的兄弟li变窄
  // 要定义一个li最窄的默认值
  obj.minWidth = obj.minWidth || 100
  // 还要限制minWidth. 给出一个合理的区间
  if (obj.minWidth > 200 || obj.minWidth < 50) {
    throw new Error('请填写正确最小宽度,取值范围是50~200(别瞎写!!!!)')
    // return
  }
  // 根据最小值,计算最大值
  var maxWidth = $(this).width() - ($lis.length - 1) * obj.minWidth
  $lis.on('mouseenter', function () {
    $(this)
      .stop(true)
      .animate({ width: maxWidth })
      .siblings()
      .stop(true)
      .animate({ width: obj.minWidth })
  })

  // 鼠标移出wrap.让每一个li都恢复平均值
  $(this).on('mouseleave', function () {
    $lis.stop(true).animate({ width: agvWidth })
  })
}

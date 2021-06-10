'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var username = 'module3';
function fn3() {
  console.log(username);
}

// 默认导出
// 注意: 只能写一次, 后面写的是变量名,函数名
exports.default = fn3;
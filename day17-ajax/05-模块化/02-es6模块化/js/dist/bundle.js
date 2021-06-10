(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module4');

var _module6 = _interopRequireDefault(_module5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 导入总结:
// 1. 如果导入的是自定义模块,需要些路径,如果是第三方模块,直接写模块名
// 2. 分别导出和统一导出的模块,导入形式是一样的. 并且{}里面的变量名必须和导出的名字是一致的
// 3. 如果统一/分别导出时,变量的名字和其他的变量冲突了,可以通过as对象变量进行重命名
// 4. 默认导出的模块,导入时,不关心变量名或函数名,在导入时要重新起一个名字
// 5. 三种导出方式,可以在一个模块中同时出现.导入时,都中导入方式一起写.默认导出的值,要写在前面

// module3 默认导出
// module1 分别导出
console.log(_module.username, _module.age);

// module4. 三种导出都使用了
// 注意: 默认导出的值,要写在前面

// module2 统一导出

console.log(_module2.username);
(0, _module2.fn2)();
(0, _module4.default)();
console.log(_module6.default);
console.log(_module5.user);
(0, _module5.fn)();
},{"./module1":2,"./module2":3,"./module3":4,"./module4":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// es6中导出数据
// 分别导出
// 注意: 写多次, 后面要写的是声明变量的语句
var username = exports.username = 'module1';
var age = exports.age = 18;
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var username = 'module2';
function fn2() {
  console.log('module2-fn2');
}

// 统一导出
// 注意: 写多次, 一般使用了统一导出,就写一次, 里面要写的应该是变量名和函数名
exports.username = username;
exports.fn2 = fn2;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fn = function fn() {
  console.log('4');
};
// let test = {
//   xxx: 'xxx',
// }

var user = exports.user = 'module4';
exports.fn = fn;
// export default test

exports.default = { xxx: 'xxxx' };
},{}]},{},[1]);

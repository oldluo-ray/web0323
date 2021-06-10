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
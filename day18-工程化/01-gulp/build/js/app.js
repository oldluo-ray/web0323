"use strict";

var _module = require("./module1");

var _module2 = _interopRequireDefault(require("./module2"));

var _module3 = require("./module3");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log(_module.username);
console.log(1 === 2);
(0, _module2["default"])();
console.log(_module3.age);
console.log('呵呵呵');
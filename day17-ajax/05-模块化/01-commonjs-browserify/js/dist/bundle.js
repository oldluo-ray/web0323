(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const module1 = require('./module1')
const module2 = require('./module2')
const module3 = require('./module3')
console.log(module1.username)
console.log(module2.username)
console.log(module3.username)

},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
let username = 'module1'
module.exports = { username }

},{}],3:[function(require,module,exports){
let username = 'module2'
function fn2() {
  console.log('module2-fn2')
}
module.exports = { username, fn2 }

},{}],4:[function(require,module,exports){
let username = 'module3'
function fn3() {
  console.log('module2-fn3')
}
module.exports = { username, fn3 }

},{}]},{},[1]);

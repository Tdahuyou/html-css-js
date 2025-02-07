// ./js/modules/module1.js
define(function (require, exports, module) {
  // 内部变量数据
  var data = 'module1 data';
  // 内部函数
  function show() {
    console.log('[module1]: ' + data);
  }

  // 向外暴露
  exports.show = show;
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: 'itemHeight',
    value: function itemHeight() {
      var item = document.querySelectorAll('.news-item__title'),
          initHeight = 0;
      for (var i = 0; i < item.length; i++) {
        if (item[i].clientHeight > initHeight) {
          initHeight = item[i].clientHeight;
        }
        item[i].style.height = initHeight + 'px';
      }
    }
  }, {
    key: 'init',
    value: function init() {
      this.itemHeight();
    }
  }]);

  return App;
}();

var app = new App();
app.init();
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),_redis=require("redis"),_redis2=_interopRequireDefault(_redis),Repository=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"test",value:function(e){return new Promise(function(r){var n=_redis2["default"].createClient(e.port,e.host,e.options);n.on("ready",function(){n.quit(),r({configuration:e,error:null})}).on("error",function(n){r({configuration:e,error:n})})})}}]),e}();exports["default"]=Repository;
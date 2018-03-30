module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("spee.ch");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(4);
module.exports = __webpack_require__(5);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("whatwg-fetch");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// require the spee.ch package
var Speech = __webpack_require__(0);
// get the local configs
var loggerConfig = __webpack_require__(6); // make these direct
var mysqlConfig = __webpack_require__(7);
var siteConfig = __webpack_require__(8);
var slackConfig = __webpack_require__(12);

try {
    console.log('Current directory (index.js): ' + process.cwd());
    // create a new spee.ch server
    var server = new Speech.Server();
    // configure server
    server.configureLogger(loggerConfig);
    server.configureMysql(mysqlConfig);
    server.configureSiteDetails(siteConfig);
    server.configureSlack(slackConfig);
    server.configureClientBundle();
    server.configureModels();
    server.configureRoutes();
    // initialize (creates the express app and configures it)
    server.initialize();
    // start the server (syncs db and
    server.start();
} catch (error) {
    console.log('server startup error:', error);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  logLevel: 'debug'
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    database: 'lbry',
    username: 'lbry',
    password: 'yYa5B6f7WuGq1613q9D7UWP3HT'
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pages = __webpack_require__(9);

module.exports = {
    analytics: {
        googleId: 'UA-60403362-6'
    },
    assetDefaults: {
        title: 'someting cool',
        thumbnail: 'https://spee.ch/assets/img/video_thumb_default.png',
        description: 'this cool thing is brought to you by billbitt.spee.ch'
    },
    auth: {
        sessionKey: 'n$a1n#sl1jas1df23'
    },
    details: {
        port: 3000,
        title: 'billbitt.Spee.ch',
        host: 'https://dev1.spee.ch',
        description: 'billbitt.spee.ch running on dev1.spee.ch'
    },
    publishing: {
        additionalClaimAddresses: ['banpwixPosfVDWnGvXqU2af36Qpsd7buGd'],
        disabled: false,
        disabledMessage: 'Please check back soon or join our discord channel for updates.',
        primaryClaimAddress: 'bDZ2wPwtULUGxT7GXuNLpQhXmdPRUTUkcL',
        thumbnailChannel: '@stuffff',
        thumbnailChannelId: 'idk',
        uploadDirectory: '/home/lbry/Uploads'
    },
    customComponents: {
        pages: pages
    },
    routes: {
        publicFolder: 'static'
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HomePage = __webpack_require__(10);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AboutPage = __webpack_require__(11);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    HomePage: _HomePage2.default,
    AboutPage: _AboutPage2.default
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(0),
    NavBar = _require.Containers.NavBar;

var HomePage = function (_React$Component) {
    _inherits(HomePage, _React$Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
    }

    _createClass(HomePage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'row row--tall flex-container--column' },
                _react2.default.createElement(NavBar, null),
                _react2.default.createElement(
                    'div',
                    { className: 'row row--tall row--padded flex-container--column' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Welcome to billbitt.spee.ch!'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Check out my custom about page'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: 'https://github.com/lbryio/spee.ch#speech-as-a-package' },
                        'And make your own site!'
                    )
                )
            );
        }
    }]);

    return HomePage;
}(_react2.default.Component);

;

exports.default = HomePage;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(0),
    NavBar = _require.Containers.NavBar;

var AboutPage = function (_React$Component) {
    _inherits(AboutPage, _React$Component);

    function AboutPage() {
        _classCallCheck(this, AboutPage);

        return _possibleConstructorReturn(this, (AboutPage.__proto__ || Object.getPrototypeOf(AboutPage)).apply(this, arguments));
    }

    _createClass(AboutPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(NavBar, null),
                _react2.default.createElement(
                    'div',
                    { className: 'row row--padded' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Welcome to my custom about page!'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'billbitt.spee.ch is a custom implementation of spee.ch'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'I used the spee.ch package and modified it with my own custom pages!'
                    )
                )
            );
        }
    }]);

    return AboutPage;
}(_react2.default.Component);

;

exports.default = AboutPage;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    slackWebHook: null, // enter a webhook if you wish to push logs to slack; otherwise leave as `null`
    slackErrorChannel: null, // enter a slack channel (#example) for errors to be sent to; otherwise leave null
    slackInfoChannel: null // enter a slack channel (#info) for info level logs to be sent to otherwise leave null
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGE4NjFmMTkwNmZjY2M2Y2ZjNDUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3BlZS5jaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aGF0d2ctZmV0Y2hcIiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2xvZ2dlckNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvbXlzcWxDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL3NpdGVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYWdlcy9Ib21lUGFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL0Fib3V0UGFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL3NsYWNrQ29uZmlnLmpzIl0sIm5hbWVzIjpbIlNwZWVjaCIsInJlcXVpcmUiLCJsb2dnZXJDb25maWciLCJteXNxbENvbmZpZyIsInNpdGVDb25maWciLCJzbGFja0NvbmZpZyIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiY3dkIiwic2VydmVyIiwiU2VydmVyIiwiY29uZmlndXJlTG9nZ2VyIiwiY29uZmlndXJlTXlzcWwiLCJjb25maWd1cmVTaXRlRGV0YWlscyIsImNvbmZpZ3VyZVNsYWNrIiwiY29uZmlndXJlQ2xpZW50QnVuZGxlIiwiY29uZmlndXJlTW9kZWxzIiwiY29uZmlndXJlUm91dGVzIiwiaW5pdGlhbGl6ZSIsInN0YXJ0IiwiZXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIiwibG9nTGV2ZWwiLCJkYXRhYmFzZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJwYWdlcyIsImFuYWx5dGljcyIsImdvb2dsZUlkIiwiYXNzZXREZWZhdWx0cyIsInRpdGxlIiwidGh1bWJuYWlsIiwiZGVzY3JpcHRpb24iLCJhdXRoIiwic2Vzc2lvbktleSIsImRldGFpbHMiLCJwb3J0IiwiaG9zdCIsInB1Ymxpc2hpbmciLCJhZGRpdGlvbmFsQ2xhaW1BZGRyZXNzZXMiLCJkaXNhYmxlZCIsImRpc2FibGVkTWVzc2FnZSIsInByaW1hcnlDbGFpbUFkZHJlc3MiLCJ0aHVtYm5haWxDaGFubmVsIiwidGh1bWJuYWlsQ2hhbm5lbElkIiwidXBsb2FkRGlyZWN0b3J5IiwiY3VzdG9tQ29tcG9uZW50cyIsInJvdXRlcyIsInB1YmxpY0ZvbGRlciIsIkhvbWVQYWdlIiwiQWJvdXRQYWdlIiwiTmF2QmFyIiwiQ29udGFpbmVycyIsIkNvbXBvbmVudCIsInNsYWNrV2ViSG9vayIsInNsYWNrRXJyb3JDaGFubmVsIiwic2xhY2tJbmZvQ2hhbm5lbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxvQzs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7O0FDQUE7QUFDQSxJQUFNQSxTQUFTLG1CQUFBQyxDQUFRLENBQVIsQ0FBZjtBQUNBO0FBQ0EsSUFBTUMsZUFBZSxtQkFBQUQsQ0FBUSxDQUFSLENBQXJC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QUFBQSxzQkFBSyxXQUFVLGlCQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFGSixhQURKO0FBVUQ7Ozs7RUFacUIsZ0JBQU1HLFM7O0FBYTdCOztrQkFFY0gsUzs7Ozs7Ozs7O0FDbEJmOUIsT0FBT0MsT0FBUCxHQUFpQjtBQUNiaUMsa0JBQW1CLElBRE4sRUFDYTtBQUMxQkMsdUJBQW1CLElBRk4sRUFFYTtBQUMxQkMsc0JBQW1CLElBSE4sQ0FHYTtBQUhiLENBQWpCLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGE4NjFmMTkwNmZjY2M2Y2ZjNDUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzcGVlLmNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic3BlZS5jaFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2hhdHdnLWZldGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2hhdHdnLWZldGNoXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVxdWlyZSB0aGUgc3BlZS5jaCBwYWNrYWdlXG5jb25zdCBTcGVlY2ggPSByZXF1aXJlKCdzcGVlLmNoJyk7XG4vLyBnZXQgdGhlIGxvY2FsIGNvbmZpZ3NcbmNvbnN0IGxvZ2dlckNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnL2xvZ2dlckNvbmZpZy5qcycpOyAvLyBtYWtlIHRoZXNlIGRpcmVjdFxuY29uc3QgbXlzcWxDb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy9teXNxbENvbmZpZy5qcycpO1xuY29uc3Qgc2l0ZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnL3NpdGVDb25maWcuanMnKTtcbmNvbnN0IHNsYWNrQ29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcvc2xhY2tDb25maWcuanMnKTtcblxudHJ5IHtcbiAgICBjb25zb2xlLmxvZyhgQ3VycmVudCBkaXJlY3RvcnkgKGluZGV4LmpzKTogJHtwcm9jZXNzLmN3ZCgpfWApO1xuICAgIC8vIGNyZWF0ZSBhIG5ldyBzcGVlLmNoIHNlcnZlclxuICAgIGNvbnN0IHNlcnZlciA9IG5ldyBTcGVlY2guU2VydmVyKCk7XG4gICAgLy8gY29uZmlndXJlIHNlcnZlclxuICAgIHNlcnZlci5jb25maWd1cmVMb2dnZXIobG9nZ2VyQ29uZmlnKTtcbiAgICBzZXJ2ZXIuY29uZmlndXJlTXlzcWwobXlzcWxDb25maWcpO1xuICAgIHNlcnZlci5jb25maWd1cmVTaXRlRGV0YWlscyhzaXRlQ29uZmlnKTtcbiAgICBzZXJ2ZXIuY29uZmlndXJlU2xhY2soc2xhY2tDb25maWcpO1xuICAgIHNlcnZlci5jb25maWd1cmVDbGllbnRCdW5kbGUoKTtcbiAgICBzZXJ2ZXIuY29uZmlndXJlTW9kZWxzKCk7XG4gICAgc2VydmVyLmNvbmZpZ3VyZVJvdXRlcygpO1xuICAgIC8vIGluaXRpYWxpemUgKGNyZWF0ZXMgdGhlIGV4cHJlc3MgYXBwIGFuZCBjb25maWd1cmVzIGl0KVxuICAgIHNlcnZlci5pbml0aWFsaXplKCk7XG4gICAgLy8gc3RhcnQgdGhlIHNlcnZlciAoc3luY3MgZGIgYW5kXG4gICAgc2VydmVyLnN0YXJ0KCk7XG59IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdzZXJ2ZXIgc3RhcnR1cCBlcnJvcjonLCBlcnJvcik7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbG9nTGV2ZWw6ICdkZWJ1ZycsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL2xvZ2dlckNvbmZpZy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZGF0YWJhc2U6ICdsYnJ5JyxcclxuICAgIHVzZXJuYW1lOiAnbGJyeScsXHJcbiAgICBwYXNzd29yZDogJ3lZYTVCNmY3V3VHcTE2MTNxOUQ3VVdQM0hUJyxcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL215c3FsQ29uZmlnLmpzIiwiY29uc3QgcGFnZXMgPSByZXF1aXJlKCdjbGllbnQvcGFnZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYW5hbHl0aWNzOiB7XG4gICAgICAgIGdvb2dsZUlkOiAnVUEtNjA0MDMzNjItNicsXG4gICAgfSxcbiAgICBhc3NldERlZmF1bHRzOiB7XG4gICAgICAgIHRpdGxlICAgICAgOiAnc29tZXRpbmcgY29vbCcsXG4gICAgICAgIHRodW1ibmFpbCAgOiAnaHR0cHM6Ly9zcGVlLmNoL2Fzc2V0cy9pbWcvdmlkZW9fdGh1bWJfZGVmYXVsdC5wbmcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ3RoaXMgY29vbCB0aGluZyBpcyBicm91Z2h0IHRvIHlvdSBieSBiaWxsYml0dC5zcGVlLmNoJyxcbiAgICB9LFxuICAgIGF1dGg6IHtcbiAgICAgICAgc2Vzc2lvbktleTogJ24kYTFuI3NsMWphczFkZjIzJyxcbiAgICB9LFxuICAgIGRldGFpbHM6IHtcbiAgICAgICAgcG9ydCAgICAgICA6IDMwMDAsXG4gICAgICAgIHRpdGxlICAgICAgOiAnYmlsbGJpdHQuU3BlZS5jaCcsXG4gICAgICAgIGhvc3QgICAgICAgOiAnaHR0cHM6Ly9kZXYxLnNwZWUuY2gnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ2JpbGxiaXR0LnNwZWUuY2ggcnVubmluZyBvbiBkZXYxLnNwZWUuY2gnLFxuICAgIH0sXG4gICAgcHVibGlzaGluZzoge1xuICAgICAgICBhZGRpdGlvbmFsQ2xhaW1BZGRyZXNzZXM6IFsnYmFucHdpeFBvc2ZWRFduR3ZYcVUyYWYzNlFwc2Q3YnVHZCddLFxuICAgICAgICBkaXNhYmxlZCAgICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlZE1lc3NhZ2UgICAgICAgICA6ICdQbGVhc2UgY2hlY2sgYmFjayBzb29uIG9yIGpvaW4gb3VyIGRpc2NvcmQgY2hhbm5lbCBmb3IgdXBkYXRlcy4nLFxuICAgICAgICBwcmltYXJ5Q2xhaW1BZGRyZXNzICAgICA6ICdiRFoyd1B3dFVMVUd4VDdHWHVOTHBRaFhtZFBSVVRVa2NMJyxcbiAgICAgICAgdGh1bWJuYWlsQ2hhbm5lbCAgICAgICAgOiAnQHN0dWZmZmYnLFxuICAgICAgICB0aHVtYm5haWxDaGFubmVsSWQgICAgICA6ICdpZGsnLFxuICAgICAgICB1cGxvYWREaXJlY3RvcnkgICAgICAgICA6ICcvaG9tZS9sYnJ5L1VwbG9hZHMnLFxuICAgIH0sXG4gICAgY3VzdG9tQ29tcG9uZW50czoge1xuICAgICAgICBwYWdlcyxcbiAgICB9LFxuICAgIHJvdXRlczoge1xuICAgICAgICBwdWJsaWNGb2xkZXI6ICdzdGF0aWMnLFxuICAgIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL3NpdGVDb25maWcuanMiLCJpbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9Ib21lUGFnZSc7XHJcbmltcG9ydCBBYm91dFBhZ2UgZnJvbSAnLi9BYm91dFBhZ2UnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBIb21lUGFnZSxcclxuICAgIEFib3V0UGFnZSxcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3BhZ2VzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IHsgQ29udGFpbmVyczogeyBOYXZCYXIgfSB9ID0gcmVxdWlyZSgnc3BlZS5jaCcpO1xuXG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cgcm93LS10YWxsIGZsZXgtY29udGFpbmVyLS1jb2x1bW4nfT5cbiAgICAgICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93IHJvdy0tdGFsbCByb3ctLXBhZGRlZCBmbGV4LWNvbnRhaW5lci0tY29sdW1uJ30+XG4gICAgICAgICAgICAgICAgPGgyPldlbGNvbWUgdG8gYmlsbGJpdHQuc3BlZS5jaCE8L2gyPlxuICAgICAgICAgICAgICAgIDxwPkNoZWNrIG91dCBteSBjdXN0b20gYWJvdXQgcGFnZTwvcD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly9naXRodWIuY29tL2xicnlpby9zcGVlLmNoI3NwZWVjaC1hcy1hLXBhY2thZ2UnfT5BbmQgbWFrZSB5b3VyIG93biBzaXRlITwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wYWdlcy9Ib21lUGFnZS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgeyBDb250YWluZXJzOiB7IE5hdkJhciB9IH0gPSByZXF1aXJlKCdzcGVlLmNoJyk7XG5cbmNsYXNzIEFib3V0UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1wYWRkZWQnPlxuICAgICAgICAgICAgICAgIDxoMz5XZWxjb21lIHRvIG15IGN1c3RvbSBhYm91dCBwYWdlITwvaDM+XG4gICAgICAgICAgICAgICAgPHA+YmlsbGJpdHQuc3BlZS5jaCBpcyBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiBvZiBzcGVlLmNoPC9wPlxuICAgICAgICAgICAgICAgIDxwPkkgdXNlZCB0aGUgc3BlZS5jaCBwYWNrYWdlIGFuZCBtb2RpZmllZCBpdCB3aXRoIG15IG93biBjdXN0b20gcGFnZXMhPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wYWdlcy9BYm91dFBhZ2UvaW5kZXguanN4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc2xhY2tXZWJIb29rICAgICA6IG51bGwsICAvLyBlbnRlciBhIHdlYmhvb2sgaWYgeW91IHdpc2ggdG8gcHVzaCBsb2dzIHRvIHNsYWNrOyBvdGhlcndpc2UgbGVhdmUgYXMgYG51bGxgXG4gICAgc2xhY2tFcnJvckNoYW5uZWw6IG51bGwsICAvLyBlbnRlciBhIHNsYWNrIGNoYW5uZWwgKCNleGFtcGxlKSBmb3IgZXJyb3JzIHRvIGJlIHNlbnQgdG87IG90aGVyd2lzZSBsZWF2ZSBudWxsXG4gICAgc2xhY2tJbmZvQ2hhbm5lbCA6IG51bGwsICAvLyBlbnRlciBhIHNsYWNrIGNoYW5uZWwgKCNpbmZvKSBmb3IgaW5mbyBsZXZlbCBsb2dzIHRvIGJlIHNlbnQgdG8gb3RoZXJ3aXNlIGxlYXZlIG51bGxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcvc2xhY2tDb25maWcuanMiXSwic291cmNlUm9vdCI6IiJ9
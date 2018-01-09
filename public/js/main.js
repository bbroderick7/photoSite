webpackJsonp([0],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBarDesktopHeadings = function NavBarDesktopHeadings() {
  return _react2.default.createElement(
    "div",
    { className: "row" },
    _react2.default.createElement(
      "div",
      { id: "stills-navbar", className: "col-sm-offset-1 col-lg-2 col-xs-3 landing-subheader" },
      _react2.default.createElement(
        "a",
        { href: "/stills" },
        _react2.default.createElement(
          "h3",
          null,
          "Stills"
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { id: "projects-navbar", className: "col-lg-2 col-xs-3 landing-subheader" },
      _react2.default.createElement(
        "a",
        { href: "/projects" },
        _react2.default.createElement(
          "h3",
          null,
          "Projects"
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { id: "about-navbar", className: "col-lg-2 col-xs-3 landing-subheader" },
      _react2.default.createElement(
        "a",
        { href: "/about" },
        _react2.default.createElement(
          "h3",
          null,
          "About"
        )
      )
    )
  );
};

var NavBarMobile = function (_Component) {
  _inherits(NavBarMobile, _Component);

  function NavBarMobile(props) {
    _classCallCheck(this, NavBarMobile);

    var _this = _possibleConstructorReturn(this, (NavBarMobile.__proto__ || Object.getPrototypeOf(NavBarMobile)).call(this, props));

    _this.state = {
      open: false
    };
    _this.toggleNav = _this.toggleNav.bind(_this);
    return _this;
  }

  _createClass(NavBarMobile, [{
    key: "toggleNav",
    value: function toggleNav() {
      if (this.state.open == false) {
        document.getElementById("mobileNav").style.height = "170px";
        this.setState({ open: true });
      } else {
        document.getElementById("mobileNav").style.height = "0px";
        this.setState({ open: false });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var selectedname = this.props.selector;
      var mytitle = this.state.open ? _react2.default.createElement(
        "h5",
        { id: "mobile-selection-header" },
        selectedname,
        " ",
        _react2.default.createElement(
          "span",
          { className: "downTriangle" },
          "\u25B4"
        )
      ) : _react2.default.createElement(
        "h5",
        { id: "mobile-selection-header" },
        selectedname,
        " ",
        _react2.default.createElement(
          "span",
          { className: "downTriangle" },
          "\u25BE"
        )
      );
      return _react2.default.createElement(
        "div",
        { className: "col-xs-5" },
        _react2.default.createElement(
          "div",
          { onClick: this.toggleNav, className: "my-mobile-navbar-container" },
          mytitle
        ),
        _react2.default.createElement(
          "div",
          { id: "mobileNav", className: "my-mobile-navbar-overlay" },
          _react2.default.createElement(
            "div",
            { className: "my-mobile-navbar-overlay-content" },
            _react2.default.createElement(
              "a",
              { href: "/stills" },
              _react2.default.createElement(
                "h4",
                null,
                "Stills"
              )
            ),
            _react2.default.createElement(
              "a",
              { href: "/projects" },
              _react2.default.createElement(
                "h4",
                null,
                "Projects"
              )
            ),
            _react2.default.createElement(
              "a",
              { href: "/about" },
              _react2.default.createElement(
                "h4",
                null,
                "About"
              )
            )
          )
        )
      );
    }
  }]);

  return NavBarMobile;
}(_react.Component);

var NavBar = exports.NavBar = function (_Component2) {
  _inherits(NavBar, _Component2);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    var _this2 = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

    _this2.state = {
      screenWidth: 0
    };
    _this2.getSize = _this2.getSize.bind(_this2);
    return _this2;
  }

  _createClass(NavBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.getSize);
      var aa = document.getElementById(this.props.selector);
      if (aa != null) {
        aa.children[0].id = "selected-subheader";
      }
    }
  }, {
    key: "getSize",
    value: function getSize() {
      console.log(screen.width);
      this.setState({ screenWidth: screen.width });
    }
  }, {
    key: "render",
    value: function render() {
      var mobileSelector = this.props.selector.slice(0, this.props.selector.indexOf('-'));
      var contextualSubheading = screen.width < 600 ? _react2.default.createElement(NavBarMobile, { selector: mobileSelector }) : _react2.default.createElement(NavBarDesktopHeadings, null);
      var nameHeading = screen.width < 600 ? _react2.default.createElement(
        "h3",
        null,
        "brendan broderick."
      ) : _react2.default.createElement(
        "h1",
        null,
        "brendan broderick."
      );
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "row typewriter-container" },
          _react2.default.createElement(
            "div",
            { className: "col-lg-6 col-xs-12" },
            nameHeading
          )
        ),
        contextualSubheading
      );
    }
  }]);

  return NavBar;
}(_react.Component);

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/
var SideBarExpand = function (_Component) {
  _inherits(SideBarExpand, _Component);

  function SideBarExpand(props) {
    _classCallCheck(this, SideBarExpand);

    return _possibleConstructorReturn(this, (SideBarExpand.__proto__ || Object.getPrototypeOf(SideBarExpand)).call(this, props));
  }

  _createClass(SideBarExpand, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'myNav', className: 'overlay' },
        _react2.default.createElement(
          'a',
          { href: 'javascript:void(0)', className: 'closebtn', onClick: this.props.closeNav },
          '\xD7'
        ),
        _react2.default.createElement(
          'div',
          { className: 'overlay-content' },
          _react2.default.createElement(
            'a',
            { href: '/' },
            'Home'
          ),
          _react2.default.createElement(
            'a',
            { href: '/stills' },
            'Stills'
          ),
          _react2.default.createElement(
            'a',
            { href: '/projects' },
            'Projects'
          ),
          _react2.default.createElement(
            'a',
            { href: '/about' },
            'About'
          )
        )
      );
    }
  }]);

  return SideBarExpand;
}(_react.Component);

var DesktopHeader = function (_Component2) {
  _inherits(DesktopHeader, _Component2);

  function DesktopHeader(props) {
    _classCallCheck(this, DesktopHeader);

    return _possibleConstructorReturn(this, (DesktopHeader.__proto__ || Object.getPrototypeOf(DesktopHeader)).call(this, props));
  }

  _createClass(DesktopHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv headerDiv' },
        _react2.default.createElement(SideBarExpand, { closeNav: this.props.closeNav }),
        _react2.default.createElement(
          'div',
          { onClick: this.props.openNav },
          _react2.default.createElement(
            'div',
            { className: 'b-logo' },
            _react2.default.createElement(
              'a',
              { href: '/' },
              _react2.default.createElement(
                'h2',
                null,
                'b'
              )
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'spanNav' },
            '\u2630'
          ),
          _react2.default.createElement(
            'div',
            { className: 'vertical-text' },
            _react2.default.createElement(
              'h4',
              null,
              'brendan broderick'
            )
          )
        )
      );
    }
  }]);

  return DesktopHeader;
}(_react.Component);

var Header = function (_Component3) {
  _inherits(Header, _Component3);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
  }

  _createClass(Header, [{
    key: 'openNav',
    value: function openNav() {
      document.getElementById("myNav").style.width = "100%";
    }
  }, {
    key: 'closeNav',
    value: function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(DesktopHeader, { openNav: this.openNav, closeNav: this.closeNav });
    }
  }]);

  return Header;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Header);

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactRouterDom = __webpack_require__(6);

var _header = __webpack_require__(116);

var _header2 = _interopRequireDefault(_header);

var _landing = __webpack_require__(239);

var _landing2 = _interopRequireDefault(_landing);

var _projects = __webpack_require__(240);

var _projects2 = _interopRequireDefault(_projects);

var _logout = __webpack_require__(241);

var _logout2 = _interopRequireDefault(_logout);

var _peru = __webpack_require__(242);

var _peru2 = _interopRequireDefault(_peru);

var _stills = __webpack_require__(243);

var _stills2 = _interopRequireDefault(_stills);

var _about = __webpack_require__(244);

var _about2 = _interopRequireDefault(_about);

var _deloache = __webpack_require__(245);

var _deloache2 = _interopRequireDefault(_deloache);

var _experiment = __webpack_require__(246);

var _experiment2 = _interopRequireDefault(_experiment);

var _jackson = __webpack_require__(247);

var _jackson2 = _interopRequireDefault(_jackson);

var _nashville = __webpack_require__(248);

var _nashville2 = _interopRequireDefault(_nashville);

var _bolivia = __webpack_require__(249);

var _bolivia2 = _interopRequireDefault(_bolivia);

var _colorado = __webpack_require__(250);

var _colorado2 = _interopRequireDefault(_colorado);

var _moab = __webpack_require__(251);

var _moab2 = _interopRequireDefault(_moab);

var _concertify = __webpack_require__(252);

var _concertify2 = _interopRequireDefault(_concertify);

var _blackstar = __webpack_require__(253);

var _blackstar2 = _interopRequireDefault(_blackstar);

var _facePay = __webpack_require__(254);

var _facePay2 = _interopRequireDefault(_facePay);

var _solitaire = __webpack_require__(255);

var _solitaire2 = _interopRequireDefault(_solitaire);

var _vmil = __webpack_require__(256);

var _vmil2 = _interopRequireDefault(_vmil);

var _vutensils = __webpack_require__(257);

var _vutensils2 = _interopRequireDefault(_vutensils);

var _game = __webpack_require__(258);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Bring app CSS into the picture
__webpack_require__(259);
/*************************************************************************/

var MyApp = function (_Component) {
  _inherits(MyApp, _Component);

  function MyApp(props) {
    _classCallCheck(this, MyApp);

    var _this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this, props));

    _this.state = {
      user: {
        username: _this.getCookieVal(document.cookie, "username"),
        email: _this.getCookieVal(document.cookie, "email")
      }
    };
    _this.setGameAndUserState = _this.setGameAndUserState.bind(_this);
    _this.logoutUser = _this.logoutUser.bind(_this);
    return _this;
  }

  _createClass(MyApp, [{
    key: 'getCookieVal',
    value: function getCookieVal(cookieString, cookieKey) {
      if (cookieString.search(cookieKey) == -1) {
        return '';
      }
      var nameString = cookieString.substr(cookieString.search(cookieKey));
      if (nameString.search(";") != -1) {
        return nameString.substr(0, nameString.search(";")).split("=")[1];
      } else {
        return nameString.split("=")[1];
      }
    }
  }, {
    key: 'deleteLeftOverCookies',
    value: function deleteLeftOverCookies() {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var cookieAct = cookie.indexOf("=");
        var name = cookieAct > -1 ? cookie.substr(0, cookieAct) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    }
  }, {
    key: 'setGameAndUserState',
    value: function setGameAndUserState(username, email) {
      this.deleteLeftOverCookies();
      this.setState({ user: { username: username, email: email } });
      document.cookie = 'username=' + username;
      document.cookie = 'email=' + email;
    }
  }, {
    key: 'logoutUser',
    value: function logoutUser() {
      this.deleteLeftOverCookies();
      this.setState({ user: { username: '', email: '' } });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_landing2.default, null)
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/about', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_about2.default, { setGameAndUserState: _this2.setGameAndUserState, username: _this2.state.user.username })
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_projects2.default, { setGameAndUserState: _this2.setGameAndUserState, username: _this2.state.user.username })
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/concertify', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_concertify2.default, { setGameAndUserState: _this2.setGameAndUserState, username: _this2.state.user.username })
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/blackstar', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_blackstar2.default, { setGameAndUserState: _this2.setGameAndUserState, username: _this2.state.user.username })
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/facePay', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_facePay2.default, { setGameAndUserState: _this2.setGameAndUserState, username: _this2.state.user.username })
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/solitaire', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_solitaire2.default, { setGameAndUserState: _this2.setGameAndUserState, username: _this2.state.user.username })
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/vmil', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_vmil2.default, { setGameAndUserState: _this2.setGameAndUserState, username: _this2.state.user.username })
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/vutensils', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_vutensils2.default, { setGameAndUserState: _this2.setGameAndUserState, username: _this2.state.user.username })
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/stills/deloache', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_deloache2.default, { setGameAndUserState: _this2.setGameAndUserState, username: _this2.state.user.username })
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/stills/moab', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_moab2.default, { setGameAndUserState: _this2.setGameAndUserState, username: _this2.state.user.username })
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/stills/bolivia', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_bolivia2.default, { setGameAndUserState: _this2.setGameAndUserState, username: _this2.state.user.username })
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/stills/experiment', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_experiment2.default, { setGameAndUserState: _this2.setGameAndUserState, username: _this2.state.user.username })
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/stills/peru', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_peru2.default, null)
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/stills/jackson', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_jackson2.default, null)
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/stills/nashville', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_nashville2.default, null)
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/stills/colorado', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_colorado2.default, null)
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/stills', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_stills2.default, null)
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/game', render: function render(props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { user: _this2.state.user, logOutFunction: _this2.logoutUser }),
                _react2.default.createElement(_game2.default, null)
              );
            } })
        )
      );
    }
  }]);

  return MyApp;
}(_react.Component);

/* Think about storing some client-side state here */


var user = {
  username: '',
  email: ''
};

(0, _reactDom.render)(_react2.default.createElement(MyApp, null), document.getElementById('mainDiv'));

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubheaderNav = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubheaderMobileNav = function (_Component) {
  _inherits(SubheaderMobileNav, _Component);

  function SubheaderMobileNav(props) {
    _classCallCheck(this, SubheaderMobileNav);

    var _this = _possibleConstructorReturn(this, (SubheaderMobileNav.__proto__ || Object.getPrototypeOf(SubheaderMobileNav)).call(this, props));

    _this.state = {
      open: false
    };
    _this.toggleNav = _this.toggleNav.bind(_this);
    return _this;
  }

  _createClass(SubheaderMobileNav, [{
    key: "toggleNav",
    value: function toggleNav() {
      if (this.state.open == false) {
        document.getElementById("subheaderNav").style.height = "170px";
        this.setState({ open: true });
      } else {
        document.getElementById("subheaderNav").style.height = "0px";
        this.setState({ open: false });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var mytitle = this.state.open ? _react2.default.createElement(
        "h5",
        { id: "subheader-mobile-selection-header" },
        this.props.selected,
        " ",
        _react2.default.createElement(
          "span",
          { className: "downTriangle" },
          "\u25B4"
        )
      ) : _react2.default.createElement(
        "h5",
        { id: "subheader-mobile-selection-header" },
        this.props.selected,
        " ",
        _react2.default.createElement(
          "span",
          { className: "downTriangle" },
          "\u25BE"
        )
      );
      var displayHeadings = this.props.displayHeadings.map(function (subheading) {
        return _react2.default.createElement(
          "a",
          { href: subheading },
          _react2.default.createElement(
            "h4",
            { id: subheading + "pics" },
            subheading
          )
        );
      });
      return _react2.default.createElement(
        "div",
        { className: "col-xs-6" },
        _react2.default.createElement(
          "div",
          { onClick: this.toggleNav, className: "my-mobile-subheader-container" },
          mytitle
        ),
        _react2.default.createElement(
          "div",
          { id: "subheaderNav", className: "my-mobile-subheader-overlay" },
          _react2.default.createElement(
            "div",
            { className: "my-mobile-subheader-overlay-content" },
            displayHeadings,
            ";"
          )
        )
      );
    }
  }]);

  return SubheaderMobileNav;
}(_react.Component);

var SubheaderNav = exports.SubheaderNav = function (_Component2) {
  _inherits(SubheaderNav, _Component2);

  function SubheaderNav(props) {
    _classCallCheck(this, SubheaderNav);

    var _this2 = _possibleConstructorReturn(this, (SubheaderNav.__proto__ || Object.getPrototypeOf(SubheaderNav)).call(this, props));

    _this2.state = {
      screenWidth: 0
    };
    _this2.getSize = _this2.getSize.bind(_this2);
    return _this2;
  }

  _createClass(SubheaderNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.getSize);
      var aa = document.getElementById(this.props.selected + "pics");
      if (aa != null) {
        aa.id = "selected-subheader";
      }
    }
  }, {
    key: "getSize",
    value: function getSize() {
      console.log(screen.width);
      this.setState({ screenWidth: screen.width });
    }
  }, {
    key: "render",
    value: function render() {
      var subheaders = this.props.subheadings.map(function (subheading) {
        return _react2.default.createElement(
          "a",
          { href: subheading },
          _react2.default.createElement(
            "h3",
            { id: subheading + "pics" },
            subheading
          )
        );
      });
      if (screen.width < 600) {
        return _react2.default.createElement(SubheaderMobileNav, { displayHeadings: this.props.subheadings, selected: this.props.selected });
      } else {
        return _react2.default.createElement(
          "div",
          { className: "col-md-2 subheader-nav" },
          " ",
          subheaders,
          " "
        );
      }
    }
  }]);

  return SubheaderNav;
}(_react.Component);

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _header = __webpack_require__(116);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/
var HomeHeader = function (_Component) {
  _inherits(HomeHeader, _Component);

  function HomeHeader(props) {
    _classCallCheck(this, HomeHeader);

    return _possibleConstructorReturn(this, (HomeHeader.__proto__ || Object.getPrototypeOf(HomeHeader)).call(this, props));
  }

  _createClass(HomeHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Get the components DOM node
      var elem = _reactDom2.default.findDOMNode(this);
      // Set the opacity of the element to 0
      elem.style.opacity = 0;
      setTimeout(function () {
        window.requestAnimationFrame(function () {
          elem.style.transition = "opacity 5000ms";
          elem.style.opacity = 1;
        });
      }, 3000);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_header2.default, null);
    }
  }]);

  return HomeHeader;
}(_react.Component);

var NavBarSubheadings = function (_Component2) {
  _inherits(NavBarSubheadings, _Component2);

  function NavBarSubheadings(props) {
    _classCallCheck(this, NavBarSubheadings);

    return _possibleConstructorReturn(this, (NavBarSubheadings.__proto__ || Object.getPrototypeOf(NavBarSubheadings)).call(this, props));
  }

  _createClass(NavBarSubheadings, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Get the components DOM node
      var elem = _reactDom2.default.findDOMNode(this);
      // Set the opacity of the element to 0
      elem.style.opacity = 0;
      setTimeout(function () {
        window.requestAnimationFrame(function () {
          elem.style.transition = "opacity 5000ms";
          elem.style.opacity = 1;
        });
      }, 3000);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { id: 'stills-navbar', className: 'col-sm-offset-1 col-lg-2 col-xs-3 landing-subheader' },
          _react2.default.createElement(
            'a',
            { href: '/stills' },
            _react2.default.createElement(
              'h3',
              null,
              'Stills'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'projects-navbar', className: 'col-lg-2 col-xs-3 landing-subheader' },
          _react2.default.createElement(
            'a',
            { href: '/projects' },
            _react2.default.createElement(
              'h3',
              null,
              'Projects'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'about-navbar', className: 'col-lg-2 col-xs-3 landing-subheader' },
          _react2.default.createElement(
            'a',
            { href: '/about' },
            _react2.default.createElement(
              'h3',
              null,
              'About'
            )
          )
        )
      );
    }
  }]);

  return NavBarSubheadings;
}(_react.Component);

var NavBar = function NavBar() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'row typewriter-container' },
      _react2.default.createElement(
        'div',
        { className: 'typewriter col-lg-6 col-xs-12' },
        _react2.default.createElement(
          'h1',
          null,
          'brendan broderick.'
        )
      )
    ),
    _react2.default.createElement(NavBarSubheadings, null)
  );
};

var LandingBanner = function (_Component3) {
  _inherits(LandingBanner, _Component3);

  function LandingBanner(props) {
    _classCallCheck(this, LandingBanner);

    return _possibleConstructorReturn(this, (LandingBanner.__proto__ || Object.getPrototypeOf(LandingBanner)).call(this, props));
  }

  _createClass(LandingBanner, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Get the components DOM node
      var elem = _reactDom2.default.findDOMNode(this);
      // Set the opacity of the element to 0
      elem.style.opacity = 0;
      setTimeout(function () {
        window.requestAnimationFrame(function () {
          elem.style.transition = "opacity 5000ms";
          elem.style.opacity = 1;
        });
      }, 3000);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'col-xs-12 fillerArea' });
    }
  }]);

  return LandingBanner;
}(_react.Component);

var TitleBannerContainer = function (_Component4) {
  _inherits(TitleBannerContainer, _Component4);

  function TitleBannerContainer(props) {
    _classCallCheck(this, TitleBannerContainer);

    return _possibleConstructorReturn(this, (TitleBannerContainer.__proto__ || Object.getPrototypeOf(TitleBannerContainer)).call(this, props));
  }

  _createClass(TitleBannerContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Get the components DOM node
      var elem = _reactDom2.default.findDOMNode(this);
      // Set the opacity of the element to 0
      elem.style.opacity = 0;
      setTimeout(function () {
        window.requestAnimationFrame(function () {
          elem.style.transition = "opacity 5000ms";
          elem.style.opacity = 1;
        });
      }, 3000);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row landing-page-banners' },
          _react2.default.createElement(_titleBanner.TitleBanner, { id: "stills", name: "portfolio", nameAlt: "portfolio1", subheaders: ["Peru", "Bolivia", "Moab", "Jackson", "Colorado", "Nashville", "Experiment"] }),
          _react2.default.createElement(_titleBanner.TitleBanner, { id: "projects", name: "projects", nameAlt: "projects1", subheaders: ["Concertify", "FacePay", "Solitaire", "Black Star Rentals", "VUtensils"] }),
          _react2.default.createElement(_titleBanner.TitleBanner, { id: "about", name: "about", nameAlt: "about1", description: ["Brendan Broderick", "Denver, Colorado", "Vanderbilt University", "Computer Science & Economics"] })
        )
      );
    }
  }]);

  return TitleBannerContainer;
}(_react.Component);

var Landing = function (_Component5) {
  _inherits(Landing, _Component5);

  function Landing(props) {
    _classCallCheck(this, Landing);

    return _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));
  }

  _createClass(Landing, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(HomeHeader, null),
        _react2.default.createElement(
          'div',
          { className: 'outerDiv contentDiv col-xs-12' },
          _react2.default.createElement(LandingBanner, null),
          _react2.default.createElement(NavBar, null),
          _react2.default.createElement(TitleBannerContainer, null)
        )
      );
    }
  }]);

  return Landing;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Landing);

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _navBar = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/
var BannerSelection = function (_Component) {
  _inherits(BannerSelection, _Component);

  function BannerSelection(props) {
    _classCallCheck(this, BannerSelection);

    return _possibleConstructorReturn(this, (BannerSelection.__proto__ || Object.getPrototypeOf(BannerSelection)).call(this, props));
  }

  _createClass(BannerSelection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var elem = _reactDom2.default.findDOMNode(this);
      elem.style.opacity = 0;
      window.requestAnimationFrame(function () {
        elem.style.transition = "opacity 1000ms";
        elem.style.opacity = 1;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(_titleBanner.TitleBanner, { id: 'concertify-head', name: 'concertify', nameAlt: 'concertify1', description: ["Build Spotify Playlists from your favorite band's recent concert setlists"], folder: 'projects' }),
        _react2.default.createElement(_titleBanner.TitleBanner, { id: 'facePay-head', name: 'facePay', nameAlt: 'facePay1', description: ["Use facial recognition software to make purchases with facial identification"], folder: 'projects' }),
        _react2.default.createElement(_titleBanner.TitleBanner, { id: 'solitaire-head', name: 'solitaire', nameAlt: 'solitaire1', description: ["Play klondike solitaire, create a user profile and save and compare game results"], folder: 'projects' }),
        _react2.default.createElement(_titleBanner.TitleBanner, { id: 'blackStarRentals-head', name: 'blackstar', nameAlt: 'blackstar1', description: ["Rent bigger and better beds and futons in the Nashville area"], folder: 'projects' }),
        _react2.default.createElement(_titleBanner.TitleBanner, { id: 'vUtensils-head', name: 'vUtensils', nameAlt: 'vUtensils1', description: ["Make college cooking easy"], folder: 'projects' }),
        _react2.default.createElement(_titleBanner.TitleBanner, { id: 'vmil-head', name: 'vmil', nameAlt: 'vmil1', description: ["Improve patient experiences in clinical settings"], folder: 'projects' })
      );
    }
  }]);

  return BannerSelection;
}(_react.Component);

var Projects = function (_Component2) {
  _inherits(Projects, _Component2);

  function Projects(props) {
    _classCallCheck(this, Projects);

    return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));
  }

  _createClass(Projects, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "projects-navbar" }),
        _react2.default.createElement(BannerSelection, null)
      );
    }
  }]);

  return Projects;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Projects);

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logout = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Logout = exports.Logout = function (_Component) {
  _inherits(Logout, _Component);

  function Logout() {
    _classCallCheck(this, Logout);

    return _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).apply(this, arguments));
  }

  return Logout;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Logout);

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _navBar = __webpack_require__(10);

var _subheaderNav = __webpack_require__(12);

var _gallery = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Peru = function (_Component) {
  _inherits(Peru, _Component);

  function Peru(props) {
    _classCallCheck(this, Peru);

    var _this = _possibleConstructorReturn(this, (Peru.__proto__ || Object.getPrototypeOf(Peru)).call(this, props));

    _this.state = {
      photoArray: []
    };
    return _this;
  }

  _createClass(Peru, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      $.ajax({
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157668110748089&user_id=148642232%40N07&format=json&nojsoncallback=1"
      }).then(function (data) {
        var photoArray = data.photoset.photo;
        var photoUrls = photoArray.map(function (photo) {
          return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
        });
        var photoTitles = photoArray.map(function (photo) {
          return photo.title;
        });
        _this2.setState({ photoArray: data.photoset.photo });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "stills-navbar" }),
        _react2.default.createElement(
          'div',
          { className: 'row photo-container' },
          _react2.default.createElement(_subheaderNav.SubheaderNav, { selected: 'peru', subheadings: ["peru", "bolivia", "moab", "jackson", "colorado", "nashville", "experiment", "deloache"] }),
          _react2.default.createElement(_gallery.Gallery, { photoArray: this.state.photoArray })
        )
      );
    }
  }]);

  return Peru;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Peru);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _navBar = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var BannerSelection = function (_Component) {
  _inherits(BannerSelection, _Component);

  function BannerSelection(props) {
    _classCallCheck(this, BannerSelection);

    return _possibleConstructorReturn(this, (BannerSelection.__proto__ || Object.getPrototypeOf(BannerSelection)).call(this, props));
  }

  _createClass(BannerSelection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var elem = _reactDom2.default.findDOMNode(this);
      elem.style.opacity = 0;
      setTimeout(function () {
        window.requestAnimationFrame(function () {
          elem.style.transition = "opacity 1000ms";
          elem.style.opacity = 1;
        });
      }, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(_titleBanner.TitleBanner, { id: 'peru-head', name: 'peru', nameAlt: 'peru1', subheaders: ["Cordillera Blanca", "Streets", "Markets"], folder: 'stills' }),
        _react2.default.createElement(_titleBanner.TitleBanner, { id: 'bolivia-head', name: 'bolivia', nameAlt: 'bolivia1', subheaders: ["Chicha", "Amazon", "Cochabamba"], folder: 'stills' }),
        _react2.default.createElement(_titleBanner.TitleBanner, { id: 'moab-head', name: 'moab', nameAlt: 'moab1', subheaders: ["Dessert"], folder: 'stills' }),
        _react2.default.createElement(_titleBanner.TitleBanner, { id: 'jackson-head', name: 'jackson', nameAlt: 'jackson1', subheaders: ["Tetons"], folder: 'stills' }),
        _react2.default.createElement(_titleBanner.TitleBanner, { id: 'colorado-head', name: 'colorado', nameAlt: 'colorado1', subheaders: ["Maroon Bells", "RMNP"], folder: 'stills' }),
        _react2.default.createElement(_titleBanner.TitleBanner, { id: 'nashville-head', name: 'nashville', nameAlt: 'nashville1', subheaders: ["Midtown", "Broadway"], folder: 'stills' }),
        _react2.default.createElement(_titleBanner.TitleBanner, { id: 'exp-head', name: 'exp', nameAlt: 'exp1', subheaders: ["nature & perspective"] }),
        _react2.default.createElement(_titleBanner.TitleBanner, { id: 'deloche-head', name: 'deloache', nameAlt: 'deloache1', subheaders: ["Vanderbilt Deloache Award, 2015"], folder: 'stills' })
      );
    }
  }]);

  return BannerSelection;
}(_react.Component);

var Stills = function (_Component2) {
  _inherits(Stills, _Component2);

  function Stills(props) {
    _classCallCheck(this, Stills);

    return _possibleConstructorReturn(this, (Stills.__proto__ || Object.getPrototypeOf(Stills)).call(this, props));
  }

  _createClass(Stills, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "stills-navbar" }),
        _react2.default.createElement(BannerSelection, null)
      );
    }
  }]);

  return Stills;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Stills);

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _navBar = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var About = function (_Component) {
  _inherits(About, _Component);

  function About(props) {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "about-navbar" }),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement('div', { className: 'col-md-offset-3 col-xs-6', id: 'personal-photo' }),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-8' },
            _react2.default.createElement(
              'h1',
              null,
              'hey my name is brendan broderick'
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(About);

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _navBar = __webpack_require__(10);

var _subheaderNav = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Deloache = function (_Component) {
  _inherits(Deloache, _Component);

  function Deloache(props) {
    _classCallCheck(this, Deloache);

    var _this = _possibleConstructorReturn(this, (Deloache.__proto__ || Object.getPrototypeOf(Deloache)).call(this, props));

    _this.state = {
      galleryPhotos: []
    };
    return _this;
  }

  _createClass(Deloache, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      $.ajax({
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157691641364595&user_id=148642232%40N07&format=json&nojsoncallback=1"
      }).then(function (data) {
        var photoArray = data.photoset.photo;
        var photoUrls = photoArray.map(function (photo) {
          return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
        });
        _this2.setState({ galleryPhotos: photoUrls });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var gallery = this.state.galleryPhotos.map(function (photo, index) {
        return _react2.default.createElement(
          'div',
          { key: index, className: 'col-xs-12 col-md-6 col-lg-4' },
          _react2.default.createElement('img', { className: 'deloache-gallery-img', src: photo })
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "stills-navbar" }),
        _react2.default.createElement(
          'div',
          { className: 'row photo-container' },
          _react2.default.createElement(_subheaderNav.SubheaderNav, { selected: 'deloache', subheadings: ["peru", "bolivia", "moab", "jackson", "colorado", "nashville", "experiment", "deloache"] }),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-lg-10' },
            gallery
          )
        )
      );
    }
  }]);

  return Deloache;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Deloache);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _navBar = __webpack_require__(10);

var _subheaderNav = __webpack_require__(12);

var _gallery = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Experiment = function (_Component) {
  _inherits(Experiment, _Component);

  function Experiment(props) {
    _classCallCheck(this, Experiment);

    var _this = _possibleConstructorReturn(this, (Experiment.__proto__ || Object.getPrototypeOf(Experiment)).call(this, props));

    _this.state = {
      photoArray: []
    };
    return _this;
  }

  _createClass(Experiment, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      $.ajax({
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157677942277644&user_id=148642232%40N07&format=json&nojsoncallback=1"
      }).then(function (data) {
        _this2.setState({ photoArray: data.photoset.photo });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "stills-navbar" }),
        _react2.default.createElement(
          'div',
          { className: 'row photo-container' },
          _react2.default.createElement(_subheaderNav.SubheaderNav, { selected: 'experiment', subheadings: ["peru", "bolivia", "moab", "jackson", "colorado", "nashville", "experiment", "deloache"] }),
          _react2.default.createElement(_gallery.Gallery, { photoArray: this.state.photoArray })
        )
      );
    }
  }]);

  return Experiment;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Experiment);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _navBar = __webpack_require__(10);

var _subheaderNav = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Jackson = function (_Component) {
  _inherits(Jackson, _Component);

  function Jackson(props) {
    _classCallCheck(this, Jackson);

    var _this = _possibleConstructorReturn(this, (Jackson.__proto__ || Object.getPrototypeOf(Jackson)).call(this, props));

    _this.state = {
      galleryPhotos: []
    };
    return _this;
  }

  _createClass(Jackson, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      $.ajax({
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157688849867972&user_id=148642232%40N07&format=json&nojsoncallback=1"
      }).then(function (data) {
        var photoArray = data.photoset.photo;
        var photoUrls = photoArray.map(function (photo) {
          return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
        });
        _this2.setState({ galleryPhotos: photoUrls });
      }).fail(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var gallery = this.state.galleryPhotos.map(function (photo, index) {
        return _react2.default.createElement(
          'div',
          { key: index, className: 'col-xs-12' },
          _react2.default.createElement('img', { className: 'box-gallery-img', src: photo })
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "stills-navbar" }),
        _react2.default.createElement(
          'div',
          { className: 'row photo-container' },
          _react2.default.createElement(_subheaderNav.SubheaderNav, { selected: 'jackson', subheadings: ["peru", "bolivia", "moab", "jackson", "colorado", "nashville", "experiment", "deloache"] }),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-9 gallery-container' },
            gallery
          )
        )
      );
    }
  }]);

  return Jackson;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Jackson);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _navBar = __webpack_require__(10);

var _subheaderNav = __webpack_require__(12);

var _gallery = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Nashville = function (_Component) {
  _inherits(Nashville, _Component);

  function Nashville(props) {
    _classCallCheck(this, Nashville);

    var _this = _possibleConstructorReturn(this, (Nashville.__proto__ || Object.getPrototypeOf(Nashville)).call(this, props));

    _this.state = {
      photoArray: []
    };
    return _this;
  }

  _createClass(Nashville, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      $.ajax({
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157691652131015&user_id=148642232%40N07&format=json&nojsoncallback=1"
      }).then(function (data) {
        var photoArray = data.photoset.photo;
        var photoUrls = photoArray.map(function (photo) {
          return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
        });
        var photoTitles = photoArray.map(function (photo) {
          return photo.title;
        });
        _this2.setState({ photoArray: data.photoset.photo });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "stills-navbar" }),
        _react2.default.createElement(
          'div',
          { onClick: this.fadeOut, className: 'row photo-container' },
          _react2.default.createElement(_subheaderNav.SubheaderNav, { selected: 'nashville', subheadings: ["peru", "bolivia", "moab", "jackson", "colorado", "nashville", "experiment", "deloache"] }),
          _react2.default.createElement(_gallery.Gallery, { photoArray: this.state.photoArray })
        )
      );
    }
  }]);

  return Nashville;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Nashville);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _navBar = __webpack_require__(10);

var _subheaderNav = __webpack_require__(12);

var _gallery = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Bolivia = function (_Component) {
  _inherits(Bolivia, _Component);

  function Bolivia(props) {
    _classCallCheck(this, Bolivia);

    var _this = _possibleConstructorReturn(this, (Bolivia.__proto__ || Object.getPrototypeOf(Bolivia)).call(this, props));

    _this.state = {
      photoArray: []
    };
    return _this;
  }

  _createClass(Bolivia, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      $.ajax({
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157690236053501&user_id=148642232%40N07&format=json&nojsoncallback=1"
      }).then(function (data) {
        _this2.setState({ photoArray: data.photoset.photo });
      }).fail(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "stills-navbar" }),
        _react2.default.createElement(
          'div',
          { className: 'row photo-container' },
          _react2.default.createElement(_subheaderNav.SubheaderNav, { selected: 'bolivia', subheadings: ["peru", "bolivia", "moab", "jackson", "colorado", "nashville", "experiment", "deloache"] }),
          _react2.default.createElement(_gallery.Gallery, { photoArray: this.state.photoArray })
        )
      );
    }
  }]);

  return Bolivia;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Bolivia);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _navBar = __webpack_require__(10);

var _subheaderNav = __webpack_require__(12);

var _gallery = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Colorado = function (_Component) {
  _inherits(Colorado, _Component);

  function Colorado(props) {
    _classCallCheck(this, Colorado);

    var _this = _possibleConstructorReturn(this, (Colorado.__proto__ || Object.getPrototypeOf(Colorado)).call(this, props));

    _this.state = {
      photoArray: []
    };
    return _this;
  }

  _createClass(Colorado, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      $.ajax({
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157667919986069&user_id=148642232%40N07&format=json&nojsoncallback=1"
      }).then(function (data) {
        _this2.setState({ photoArray: data.photoset.photo });
      }).fail(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "stills-navbar" }),
        _react2.default.createElement(
          'div',
          { className: 'row photo-container' },
          _react2.default.createElement(_subheaderNav.SubheaderNav, { selected: 'colorado', subheadings: ["peru", "bolivia", "moab", "jackson", "colorado", "nashville", "experiment", "deloache"] }),
          _react2.default.createElement(_gallery.Gallery, { photoArray: this.state.photoArray })
        )
      );
    }
  }]);

  return Colorado;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Colorado);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _navBar = __webpack_require__(10);

var _subheaderNav = __webpack_require__(12);

var _gallery = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Moab = function (_Component) {
  _inherits(Moab, _Component);

  function Moab(props) {
    _classCallCheck(this, Moab);

    var _this = _possibleConstructorReturn(this, (Moab.__proto__ || Object.getPrototypeOf(Moab)).call(this, props));

    _this.state = {
      photoArray: []
    };
    return _this;
  }

  _createClass(Moab, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      $.ajax({
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157689047067132&user_id=148642232%40N07&format=json&nojsoncallback=1"
      }).then(function (data) {
        _this2.setState({ photoArray: data.photoset.photo });
      }).fail(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "stills-navbar" }),
        _react2.default.createElement(
          'div',
          { className: 'row photo-container' },
          _react2.default.createElement(_subheaderNav.SubheaderNav, { selected: 'moab', subheadings: ["peru", "bolivia", "moab", "jackson", "colorado", "nashville", "experiment", "deloache"] }),
          _react2.default.createElement(_gallery.Gallery, { photoArray: this.state.photoArray })
        )
      );
    }
  }]);

  return Moab;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Moab);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _projectBody = __webpack_require__(31);

var _navBar = __webpack_require__(10);

var _subheaderNav = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Concertify = function (_Component) {
  _inherits(Concertify, _Component);

  function Concertify(props) {
    _classCallCheck(this, Concertify);

    var _this = _possibleConstructorReturn(this, (Concertify.__proto__ || Object.getPrototypeOf(Concertify)).call(this, props));

    _this.state = {
      galleryPhotos: []
    };
    return _this;
  }

  _createClass(Concertify, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "projects-navbar" }),
        _react2.default.createElement(_projectBody.ProjectBody, {
          name: "concertify",
          github: "https://github.com/bbroderick7/concertify",
          link: "https://cs4278-concertify.herokuapp.com/",
          projectBannerImage: "https://farm5.staticflickr.com/4691/39382218961_17f586df5e_b.jpg",
          properName: "Concertify",
          description: "Web Application that enables users to search for bands recent concert setlists and build spotify playlists based on the setlists. Spotify playlists are automatically saved to users Spotify account at the click of a button",
          tech: "React, Node, Material UI, Spotify OAuth & Passport.js, Setlist API"
        })
      );
    }
  }]);

  return Concertify;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Concertify);

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _projectBody = __webpack_require__(31);

var _navBar = __webpack_require__(10);

var _subheaderNav = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var BlackStar = function (_Component) {
  _inherits(BlackStar, _Component);

  function BlackStar(props) {
    _classCallCheck(this, BlackStar);

    var _this = _possibleConstructorReturn(this, (BlackStar.__proto__ || Object.getPrototypeOf(BlackStar)).call(this, props));

    _this.state = {
      galleryPhotos: []
    };
    return _this;
  }

  _createClass(BlackStar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "projects-navbar" }),
        _react2.default.createElement(_projectBody.ProjectBody, {
          name: "blackstar",
          github: "https://github.com/bbroderick7",
          link: "http://blackstarrentals.com",
          projectBannerImage: "https://farm5.staticflickr.com/4643/38674111994_d184fdcc52_b.jpg",
          properName: "Black Star Rentals",
          description: "Black Star Rentals is a student-run dorm furnishing rental service provided to the Vanderbilt community. We make moving in and out hassle free and environmentally friendly, while also making dorms and off-campus apartments more comfortable. We rent the best brand new full-sized deluxe beds, twin-sized memory foam mattresses and deluxe futons on campus, and deliver them right to your door. Black Star Rentals, Its Home Delivered",
          tech: "html/css, jquery, bootstrap"
        })
      );
    }
  }]);

  return BlackStar;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(BlackStar);

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _projectBody = __webpack_require__(31);

var _navBar = __webpack_require__(10);

var _subheaderNav = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var FacePay = function (_Component) {
  _inherits(FacePay, _Component);

  function FacePay(props) {
    _classCallCheck(this, FacePay);

    var _this = _possibleConstructorReturn(this, (FacePay.__proto__ || Object.getPrototypeOf(FacePay)).call(this, props));

    _this.state = {
      galleryPhotos: []
    };
    return _this;
  }

  _createClass(FacePay, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "projects-navbar" }),
        _react2.default.createElement(_projectBody.ProjectBody, {
          name: "facePay",
          github: "https://github.com/vu-cs4288-f17/assignment6-bbroderick7",
          link: "https://mighty-plateau-52681.herokuapp.com/",
          projectBannerImage: "https://farm5.staticflickr.com/4729/38706264574_a87215a1fa_b.jpg",
          properName: "FacePay",
          description: "A facial recognition mbile app that enables a user to upload bank account information and photos of themselves so that transactions between users and vendors can be made via facial recognition",
          tech: "Mongo, Mongoose, Node, Express, Swift, React Native, Kairos Facial Recognition, Capital One Nessie API, AWS S3 Buckets"
        })
      );
    }
  }]);

  return FacePay;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(FacePay);

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _projectBody = __webpack_require__(31);

var _navBar = __webpack_require__(10);

var _subheaderNav = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Solitaire = function (_Component) {
  _inherits(Solitaire, _Component);

  function Solitaire(props) {
    _classCallCheck(this, Solitaire);

    var _this = _possibleConstructorReturn(this, (Solitaire.__proto__ || Object.getPrototypeOf(Solitaire)).call(this, props));

    _this.state = {
      galleryPhotos: []
    };
    return _this;
  }

  _createClass(Solitaire, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "projects-navbar" }),
        _react2.default.createElement(_projectBody.ProjectBody, {
          name: "solitaire",
          github: "https://github.com/vu-cs4288-f17/assignment6-bbroderick7",
          link: "https://mighty-plateau-52681.herokuapp.com/",
          projectBannerImage: "https://farm5.staticflickr.com/4681/38674111074_ba6eb9e131_b.jpg",
          properName: "Solitaire",
          description: "A single player klondike solitaire game that allows 1 and 3 card draw. All games moves are recorded and results can be viewed through a player created profile. Uses github OAuth for player signin and includes a game solver",
          tech: "Mongo, Mongoose, Redis, Node, Express, React, Bootstrap, Passport.js"
        })
      );
    }
  }]);

  return Solitaire;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Solitaire);

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _projectBody = __webpack_require__(31);

var _navBar = __webpack_require__(10);

var _subheaderNav = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Vmil = function (_Component) {
  _inherits(Vmil, _Component);

  function Vmil(props) {
    _classCallCheck(this, Vmil);

    var _this = _possibleConstructorReturn(this, (Vmil.__proto__ || Object.getPrototypeOf(Vmil)).call(this, props));

    _this.state = {
      galleryPhotos: []
    };
    return _this;
  }

  _createClass(Vmil, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "projects-navbar" }),
        _react2.default.createElement(_projectBody.ProjectBody, {
          name: "vmil",
          github: "https://anchorlink.vanderbilt.edu/organization/medicalinnovationlab",
          link: "https://anchorlink.vanderbilt.edu/organization/medicalinnovationlab",
          projectBannerImage: "https://farm5.staticflickr.com/4730/24528195987_e6fe7c7804_b.jpg",
          properName: "Vanderbilt Medical Innovation Laboratory",
          description: "A joint orgainzation the consists of member of the Vanderbilt engineering school, Vanderbilt A&S, Vanderbilt Medical School Vanderbilt Law School and the Owen Graduate School of Business. Currently working on ways to imrpove the patient experience in clinical settings through streamlining wait times"
        })
      );
    }
  }]);

  return Vmil;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Vmil);

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _titleBanner = __webpack_require__(8);

var _projectBody = __webpack_require__(31);

var _navBar = __webpack_require__(10);

var _subheaderNav = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Vutensils = function (_Component) {
  _inherits(Vutensils, _Component);

  function Vutensils(props) {
    _classCallCheck(this, Vutensils);

    var _this = _possibleConstructorReturn(this, (Vutensils.__proto__ || Object.getPrototypeOf(Vutensils)).call(this, props));

    _this.state = {
      galleryPhotos: []
    };
    return _this;
  }

  _createClass(Vutensils, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "projects-navbar" }),
        _react2.default.createElement(_projectBody.ProjectBody, {
          name: "vutensils",
          github: "https://github.com/bbroderick7/VUtensils",
          link: "http://vutensils.com/",
          projectBannerImage: "https://farm5.staticflickr.com/4598/39382218661_4ee073dca7_b.jpg",
          properName: "VUtensils",
          description: "A student run cooking rental company founded by Brendan Broderick and Alex Roed after they won the Vanderbilt Ventures business competition and ten thousand dollars in sed funding from Vanderbilt. VUtensils rents cooking and dining supplies to Vanderbilt students looking to enhance their college dining experience.",
          tech: "html/css, bootstrap, jquery, vanilla javascript"
        })
      );
    }
  }]);

  return Vutensils;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Vutensils);

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card(props) {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

    _this.getCardFile = _this.getCardFile.bind(_this);
    return _this;
  }

  _createClass(Card, [{
    key: 'getCardFile',
    value: function getCardFile() {
      var cardVal = '';
      if (this.props.up === false) {
        return '/images/backOfCard.png';
      }
      if (this.props.value > 10) {
        var royals = ['jack', 'queen', 'king', 'ace', 'joker'];
        cardVal = royals[this.props.value - 11];
      } else {
        cardVal = this.props.value;
      }
      return '/images/' + cardVal + '_of_' + this.props.suite + '.png';
    }
  }, {
    key: 'render',
    value: function render() {
      var cardFile = this.getCardFile();
      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        _react2.default.createElement('img', { className: 'cardImage', src: cardFile })
      );
    }
  }]);

  return Card;
}(_react.Component);

var Pile = function (_Component2) {
  _inherits(Pile, _Component2);

  function Pile(props) {
    _classCallCheck(this, Pile);

    var _this2 = _possibleConstructorReturn(this, (Pile.__proto__ || Object.getPrototypeOf(Pile)).call(this, props));

    _this2.cardList = _this2.cardList.bind(_this2);
    return _this2;
  }

  _createClass(Pile, [{
    key: 'cardList',
    value: function cardList() {
      var pileCardClass = "pile-Card-Class";
      this.props.pile.reverse();
      return this.props.pile.map(function (cardCur, index) {
        if (index == 0) {
          pileCardClass = '';
        } else {
          pileCardClass = "pile-Card-Class";
        }
        return _react2.default.createElement(Card, { key: index, value: cardCur.value, suite: cardCur.suite, up: cardCur.up, className: pileCardClass });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card-pile-outer' },
        this.cardList()
      );
    }
  }]);

  return Pile;
}(_react.Component);

var PileLayout = function (_Component3) {
  _inherits(PileLayout, _Component3);

  function PileLayout(props) {
    _classCallCheck(this, PileLayout);

    return _possibleConstructorReturn(this, (PileLayout.__proto__ || Object.getPrototypeOf(PileLayout)).call(this, props));
  }

  _createClass(PileLayout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-xs-1 card-pile-outer' },
          _react2.default.createElement(Pile, { pile: this.props.myPiles.pile1 })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-xs-1 card-pile-outer' },
          _react2.default.createElement(Pile, { pile: this.props.myPiles.pile2 })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-xs-1 card-pile-outer' },
          _react2.default.createElement(Pile, { pile: this.props.myPiles.pile3 })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-xs-1 card-pile-outer' },
          _react2.default.createElement(Pile, { pile: this.props.myPiles.pile4 })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-xs-1 card-pile-outer' },
          _react2.default.createElement(Pile, { pile: this.props.myPiles.pile5 })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-xs-1 card-pile-outer' },
          _react2.default.createElement(Pile, { pile: this.props.myPiles.pile6 })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-xs-1 card-pile-outer' },
          _react2.default.createElement(Pile, { pile: this.props.myPiles.pile7 })
        )
      );
    }
  }]);

  return PileLayout;
}(_react.Component);

var CardStack = function (_Component4) {
  _inherits(CardStack, _Component4);

  function CardStack(props) {
    _classCallCheck(this, CardStack);

    return _possibleConstructorReturn(this, (CardStack.__proto__ || Object.getPrototypeOf(CardStack)).call(this, props));
  }

  _createClass(CardStack, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'col-xs-1' },
        _react2.default.createElement(
          'div',
          { className: 'card-stack-border' },
          _react2.default.createElement(Card, { className: 'card-stack', up: false })
        )
      );
    }
  }]);

  return CardStack;
}(_react.Component);

var DrawStack = function (_Component5) {
  _inherits(DrawStack, _Component5);

  function DrawStack(props) {
    _classCallCheck(this, DrawStack);

    var _this5 = _possibleConstructorReturn(this, (DrawStack.__proto__ || Object.getPrototypeOf(DrawStack)).call(this, props));

    _this5.makeDrawCards = _this5.makeDrawCards.bind(_this5);
    return _this5;
  }

  _createClass(DrawStack, [{
    key: 'makeDrawCards',
    value: function makeDrawCards() {
      var dCard = 'draw-card';
      return this.props.draw.map(function (drawCard, index) {
        return _react2.default.createElement(Card, { key: index, value: drawCard.value, suite: drawCard.suite, up: false, className: dCard });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'col-xs-1' },
        this.makeDrawCards()
      );
    }
  }]);

  return DrawStack;
}(_react.Component);

var Game = function (_Component6) {
  _inherits(Game, _Component6);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this6 = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    _this6.state = {
      gameStatus: ''
    };
    return _this6;
  }

  _createClass(Game, [{
    key: 'getGameID',
    value: function getGameID() {
      return window.location.href.slice(window.location.href.indexOf('game/') + 5);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this7 = this;

      $.ajax({
        url: '/v1/game/' + this.getGameID(),
        method: 'GET'
      }).then(function (data) {
        _this7.setState({ gameStatus: data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var myPi = this.state.gameStatus;
      if (myPi != '') {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row top-card-row' },
            _react2.default.createElement('div', { className: 'col-xs-1' }),
            _react2.default.createElement(DrawStack, { draw: this.state.gameStatus.draw }),
            _react2.default.createElement(CardStack, null),
            _react2.default.createElement('div', { className: 'col-xs-4' }),
            _react2.default.createElement(CardStack, null),
            _react2.default.createElement(CardStack, null),
            _react2.default.createElement(CardStack, null),
            _react2.default.createElement(CardStack, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement('div', { className: 'col-xs-4' }),
            _react2.default.createElement(PileLayout, { myPiles: this.state.gameStatus })
          )
        );
      } else {
        return _react2.default.createElement(
          'h1',
          null,
          'Please Wait'
        );
      }
    }
  }]);

  return Game;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)(Game);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(260);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(262)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./app.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./app.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(261)(undefined);
// imports


// module
exports.push([module.i, "\n@media only screen and (max-width: 600px)  {\n  .container-fluid {\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n  }\n}\n\n.navbar-static-top {\n    margin-left: -14px;\n    margin-right: -24px;\n}\n\n.right-nav {\n    text-align: right;\n    padding-top: 10px;\n    padding-right: 20px;\n}\n\n.right-nav a {\n    display: block;\n}\n\ntable#gameTable tbody tr:hover {\n    background: #6495ed;\n    cursor: pointer;\n}\n\n.card-base {\n    position: relative;\n}\n\n.card-row img {\n    width: 25%;\n    padding: 0;\n    margin: 0 -2px 0 -2px;\n}\n\n.card-float img {\n    width: 25%;\n    position: absolute;\n    top: 37.5%;\n    left: 37.5%;\n}\n\n#errorMsg {\n    text-align: center;\n}\n\n.header {\n    float: right;\n}\n\n.header img {\n    border-radius: 5px;\n    margin: 10px;\n}\n\n.cardImage{\n  width: 100%;\n}\n\n.pile-Card-Class{\n  margin-top: -105%;\n  padding: 0px;\n  margin-left: 0px;\n  width: 100%;\n\n}\n\n.card-stack{\n  opacity: 0.01;\n}\n\n.card-stack-border{\n  border: dashed 2px black;\n}\n\n.draw-card{\n  position: absolute;\n}\n\n.card-pile-outer{\n  padding: 5px;\n}\n\n.login-nav{\n  display: inline-block;\n}\n\n.top-card-row{\n  padding-bottom: 40px;\n}\n\n\n\n\nbody{\n  background: black;\n  font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\n}\n\n/* DEMO-SPECIFIC STYLES */\n.typewriter-container {\n}\n\n.typewriter h1 {\n  color: #fff;\n  font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\n  overflow: hidden; /* Ensures the content is not revealed until the animation */\n  border-right: .15em solid orange; /* The typwriter cursor */\n  white-space: nowrap; /* Keeps the content on a single line */\n  margin: 0 auto; /* Gives that scrolling effect as the typing happens */\n  letter-spacing: .15em; /* Adjust as needed */\n  animation:\n    typing 3.5s steps(30, end),\n    blink-caret .5s step-end infinite;\n}\n\n/* The typing effect */\n@keyframes typing {\n  from { width: 0 }\n  to { width: 100% }\n}\n\n/* The typewriter cursor effect */\n@keyframes blink-caret {\n  from, to { border-color: transparent }\n  50% { border-color: white }\n}\n\n.landing-subheader{\n      transition: 0.3s;\n}\n\n.landing-subheader a{\n      color: inherit;\n      text-decoration: none;\n}\n\n.landing-subheader h3:hover{\n  color: white;\n  cursor: pointer;\n}\n\n.landing-divs{\n  height: 500px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.fillerArea{\n  height: 400px;\n  background-image: url(\"https://farm5.staticflickr.com/4634/39337192481_38d07294b1_b.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n.overlay {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0, 0.9);\n    overflow-x: hidden;\n    transition: 0.5s;\n}\n\n.overlay-content {\n    position: relative;\n    top: 25%;\n    width: 100%;\n    text-align: center;\n    margin-top: 30px;\n}\n\n.overlay a {\n    padding: 8px;\n    text-decoration: none;\n    font-size: 36px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.overlay a:hover, .overlay a:focus {\n    color: #f1f1f1;\n}\n\n.overlay .closebtn {\n    position: absolute;\n    top: 20px;\n    right: 45px;\n    font-size: 60px;\n}\n\n@media screen and (max-height: 450px) {\n  .overlay a {font-size: 20px}\n  .overlay .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n\n.spanNav {\n  font-size:30px;\n  cursor:pointer;\n  color: white;\n  padding-top: 100px;\n  margin-bottom: 100px;\n}\n\n.outerDiv {\n\n}\n\n.headerDiv {\n  z-index: 1000;\n  height: 100%;\n  border-right: solid 2px white;\n  padding: 10px;\n  width: 50px;\n  position: fixed;\n}\n\n.vertical-text {\n  color: white;\n  width: 300px;\n  margin-top: 250px;\n\ttransform: rotate(-90deg);\n\ttransform-origin: left top 0;\n}\n\n.b-logo{\n  color: white;\n  padding-bottom: 100px;\n  padding-top: 50px;\n}\n\n.b-logo a{\n  text-decoration: none;\n  color: white;\n}\n\n.b-logo a:hover{\n  text-decoration: none;\n  color: white;\n}\n\n.contentDiv{\n  padding-left: 64px;\n  padding-right: 0px !important;\n}\n\n#portfolio {\n  background-image: url(\"https://farm5.staticflickr.com/4633/27556726429_12c9e11327_c.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#portfolio:hover{\n  cursor: pointer;\n}\n\n#portfolio h4{\n  display: none;\n}\n\n#portfolio:hover h4{\n  display: block;\n  text-decoration: none;\n  cursor: pointer;\n  color: white;\n}\n\n#projects {\n  background-image: url(\"https://farm5.staticflickr.com/4598/24471598817_d4786b4b21_c.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#projects:hover{\n  cursor: pointer;\n}\n\n#projects h4{\n  display: none;\n}\n\n#projects:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#about {\n  background-image: url(\"https://farm5.staticflickr.com/4739/27557171039_ea34b5339d_c.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#about:hover{\n  cursor: pointer;\n}\n\n#about h4{\n  display: none;\n}\n\n#about:hover h4{\n  display: block;\n  text-decoration: none;\n  cursor: pointer;\n  color: white;\n}\n\n.vertical-heading {\n  color: white;\n  width: 300px;\n  margin-top: 200px;\n\ttransform: rotate(-90deg);\n\ttransform-origin: left top 0;\n}\n\n.inner-head {\n  margin-left: 15px;\n}\n\n#selected-subheader{\n  color: white;\n}\n\n\n\n\n#colorado{\n  background-image: url(\"https://farm4.staticflickr.com/3783/32596289134_a8170a0599_b.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#colorado:hover{\n  cursor: pointer;\n}\n\n#colorado h4{\n  display: none;\n}\n\n#colorado:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#moab {\n  background-image: url(\"https://farm4.staticflickr.com/3682/33282346992_f5a617c0fa_b.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#moab:hover {\n  cursor: pointer;\n}\n\n#moab h4 {\n  display: none;\n}\n\n#moab:hover h4 {\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#bolivia {\n  background-image: url(\"https://farm4.staticflickr.com/3927/33346407706_6e14df7860_k.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#bolivia:hover{\n  cursor: pointer;\n}\n\n#bolivia h4{\n  display: none;\n}\n\n#bolivia:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#peru {\n  background-image: url(\"https://farm4.staticflickr.com/3891/33425599956_2cea2b9cf5_k.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#peru:hover {\n  cursor: pointer;\n}\n\n#peru h4 {\n  display: none;\n}\n\n#peru:hover h4 {\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#jackson {\n  background-image: url(\"https://farm5.staticflickr.com/4593/27564430749_1bb7a6ba6b_k.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#jackson:hover{\n  cursor: pointer;\n}\n\n#jackson h4{\n  display: none;\n}\n\n#jackson:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#exp {\n  background-image: url(\"https://farm4.staticflickr.com/3776/33309988071_ee97912bd1_k.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#exp:hover{\n  cursor: pointer;\n}\n\n#exp h4{\n  display: none;\n}\n\n#exp:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#nashville {\n  background-image: url(\"https://farm5.staticflickr.com/4633/27556726429_12c9e11327_c.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#nashville:hover{\n  cursor: pointer;\n}\n\n#nashville h4{\n  display: none;\n}\n\n#nashville:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#deloache {\n  background-image: url(\"https://farm5.staticflickr.com/4641/25503804958_23eeaf2d9d_k.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#deloache:hover{\n  cursor: pointer;\n}\n\n#deloache h4{\n  display: none;\n}\n\n#deloache:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n\n\n\n\n\n\n.title-modal {\n    position: absolute;\n    height: 0;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0, 0.7);\n    overflow-x: hidden;\n    transition: 0.5s;\n}\n\n.title-modal-content {\n    width: 100%;\n}\n\n.title-modal a {\n\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.title-modal a:hover, .title-modal a:focus {\n    color: #f1f1f1;\n}\n\n.title-modal .closebtn {\n    top: 20px;\n    right: 45px;\n    font-size: 60px;\n}\n\n@media screen and (max-height: 450px) {\n  .title-modal a {font-size: 20px}\n  .title-modal .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n\n.spanNav {\n  font-size:30px;\n  cursor:pointer;\n  color: white;\n  padding-top: 100px;\n  margin-bottom: 100px;\n}\n\n\n\n\n#concertify{\n  background-image: url(\"https://farm5.staticflickr.com/4598/24471598817_d4786b4b21_c.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#concertify:hover{\n  cursor: pointer;\n}\n\n#concertify h4{\n  display: none;\n}\n\n#concertify:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#solitaire {\n  background-image: url(\"https://farm5.staticflickr.com/4646/24489394737_14f40a5186_b.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#solitaire:hover{\n  cursor: pointer;\n}\n\n#solitaire h4{\n  display: none;\n}\n\n#solitaire:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#blackstar {\n  background-image: url(\"https://farm5.staticflickr.com/4597/38655689454_4dc1a6b3ef_b.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#blackstar:hover{\n  cursor: pointer;\n}\n\n#blackstar h4{\n  display: none;\n}\n\n#blackstar:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#vUtensils {\n  background-image: url(\"https://farm5.staticflickr.com/4589/39353275271_b1747b3cb8_b.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#vUtensils:hover{\n  cursor: pointer;\n}\n\n#vUtensils h4{\n  display: none;\n}\n\n#vUtensils:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#facePay {\n  background-image: url(\"https://farm5.staticflickr.com/4639/39353381641_415788f103_b.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#facePay:hover{\n  cursor: pointer;\n}\n\n#facePay h4{\n  display: none;\n}\n\n#facePay:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#vmil {\n  background-image: url(\"https://farm5.staticflickr.com/4693/39325003812_a1f92042aa_h.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#vmil:hover{\n  cursor: pointer;\n}\n\n#vmil h4{\n  display: none;\n}\n\n#vmil:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n\n\n\n\n.photo-container{\n  width: 100%;\n}\n\n.subheader-nav{\n  height: 75%;\n  padding-left: 50px;\n}\n\n.gallery-container{\n  padding-top: 20px;\n  height: 450px;\n  overflow-y: scroll;\n  padding-right: 0px;\n}\n\n.project-container{\n  padding-top: 20px;\n  height: 480px;\n  overflow-y: scroll;\n}\n\n@media only screen and (max-width: 600px)  {\n  .container-fluid {\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n  }\n\n  .gallery-container{\n    padding-top: 20px;\n    height: 670px;\n    overflow-y: scroll;\n    padding-right: 0px;\n    padding-left: 0px !important;\n  }\n\n  .project-container{\n    padding-top: 20px;\n    height: 680px;\n    overflow-y: scroll;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    width: 104%;\n  }\n\n  .inner-proj-container{\n    padding: 0px !important;\n  }\n}\n\n.subheader-nav a{\n  color: inherit;\n  text-decoration: none;\n}\n\n.subheader-nav a:hover{\n  color: white;\n  text-decoration: none;\n}\n\n.deloache-gallery-img{\n  width: 100%;\n  height: auto;\n}\n\n.box-gallery-img{\n  object-fit: cover;\n  object-fit: contain;\n  padding: 0px;\n  overflow: hidden;\n}\n\n.box-image-container{\n  height: 200px;\n  overflow: hidden;\n  margin-bottom: 15px\n}\n\n.concertify-banner{\n\n}\n\n.banner-img{\n  width: 100%;\n  height: auto;\n}\n\n.banner-img-link{\n  width: 100%;\n  height: auto;\n  border: solid 2px black;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.banner-img-link-2{\n  width: 100%;\n  height: auto;\n  border: solid 2px black;\n  top: 55%;\n  transform: translateY(-25%);\n}\n\n.project-information{\n  color: white;\n}\n\n.photo-cover-cont{\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: black;\n  opacity: 0;\n  transition: 0.4s;\n}\n\n.photo-cover-cont h4{\n  display: none;\n  color: white;\n  margin-top: 100px;\n}\n\n.photo-cover-cont:hover{\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.photo-cover-cont:hover h4{\n  display: block;\n}\n\n.photo-cover-cont:hover img{\n  display: inline-block;\n  width: 20%;\n  transition: 0.2s;\n}\n\n.photo-cover-cont:hover img:hover{\n  opacity: .5;\n}\n\n.photo-cover-cont img{\n  display: none;\n  width: 20%;\n  margin-top: 100px;\n  margin-left: 30px;\n}\n\n\n\n\n.project-cover-cont{\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 101%;\n  background: black;\n  opacity: 0;\n  transition: 0.4s;\n}\n\n.project-cover-cont h4{\n  display: none;\n  color: white;\n  margin-top: 100px;\n}\n\n.project-cover-cont:hover{\n  opacity: 0.8;\n}\n\n.project-cover-cont:hover h4{\n  display: block;\n}\n\n.project-cover-cont:hover img{\n  display: inline-block;\n  width: 20%;\n  transition: 0.2s;\n}\n\n.project-cover-cont:hover img:hover{\n  opacity: .5;\n  cursor: pointer;\n}\n\n.project-cover-cont img{\n  display: none;\n  width: 20%;\n  margin-top: 100px;\n  margin-left: 30px;\n}\n\n.photo-showcase-container{\n  position: fixed;\n  width: 100%;\n  height:100vh;\n  background: black;\n  opacity: 0;\n  transition: 0.4s;\n}\n\n\n\n\n.gallery-overlay {\n    height: 100%;\n    width: 100%;\n    opacity: 0;\n    position: fixed;\n    z-index: -10;\n    top: 0;\n    left: 0;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0, 0.9);\n    overflow-x: hidden;\n    transition: 0.5s;\n}\n\n.gallery-overlay-content {\n    position: relative;\n    top: 10%;\n    width: 100%;\n    text-align: center;\n    margin-top: 30px;\n}\n\n.gallery-arrow-cont{\n  height: 100%;\n  width: 150px;\n  position: fixed;\n  align: center;\n  text-align: center;\n}\n\n.gallery-arrow{\n  font-size: 90px;\n  position: absolute;\n  color: white;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#left-arrow{\n  position: absolute;\n  left: 0px;\n  top: 0px;\n\n}\n\n#left-arrow:hover{\n  opacity: 0.5;\n}\n\n#left-arrow:hover h1:hover{\n  opacity: 0.5;\n}\n\n#right-arrow{\n    right: 0;\n    top: 0px;\n    position: absolute;\n}\n\n.gallery-overlay a {\n    padding: 8px;\n    text-decoration: none;\n    font-size: 36px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.gallery-overlay a:hover, .gallery-overlay a:focus {\n    color: #f1f1f1;\n}\n\n.gallery-overlay .gallery-closebtn {\n    position: absolute;\n    top: 20px;\n    right: 45px;\n    font-size: 60px;\n}\n\n@media screen and (max-height: 450px) {\n  .gallery-overlay a {font-size: 20px}\n  .gallery-overlay .gallery-closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n\n#personal-photo{\n  background-image: url(\"https://farm5.staticflickr.com/4684/39454969772_5d9f14e410_z.jpg\");\n  background-size: contain;\n  background-size: cover;\n  height: 400px;\n}\n\n#mobile-selection-header{\n  color: white;\n  border-bottom: solid 1px white;\n}\n\n.my-mobile-navbar-container{\n  text-align: center;\n  margin-left:-10px;\n  padding: 0px;\n}\n\n\n.my-mobile-navbar-overlay {\n    margin-top: 35px;\n    height: 0;\n    width: 100%;\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0, 0.9);\n    overflow-x: hidden;\n    transition: 0.5s;\n}\n\n.my-mobile-navbar-overlay-content {\n    position: relative;\n    top: 1%;\n    width: 100%;\n    text-align: center;\n    margin-top: 5px;\n    border: solid 1px white;\n}\n\n.my-mobile-navbar-overlay a {\n    padding: 8px;\n    text-decoration: none;\n    font-size: 36px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.my-mobile-navbar-overlay a:hover, .my-mobile-navbar-overlay a:focus {\n    color: #f1f1f1;\n}\n\n.my-mobile-navbar-overlay .closebtn {\n    position: absolute;\n    top: 20px;\n    right: 45px;\n    font-size: 60px;\n}\n\n@media screen and (max-height: 450px) {\n  .my-mobile-navbar-overlay a {font-size: 20px}\n  .my-mobile-navbar-overlay .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n\n.downTriangle {\n  font-size:20px;\n  cursor:pointer;\n  color: white;\n  padding-top: 100px;\n  margin-bottom: 100px;\n}\n\n\n\n\n\n\n\n#subheader-mobile-selection-header{\n  color: white;\n  border-bottom: solid 1px white;\n}\n\n.my-mobile-subheader-container{\n  text-align: center;\n}\n\n\n.my-mobile-subheader-overlay {\n    margin-top: 35px;\n    height: 0;\n    width: 100%;\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0, 0.9);\n    overflow-x: hidden;\n    transition: 0.5s;\n}\n\n.my-mobile-subheader-overlay-content {\n    position: relative;\n    top: 1%;\n    width: 100%;\n    text-align: center;\n    margin-top: 5px;\n}\n\n.my-mobile-subheader-overlay a {\n    padding: 8px;\n    text-decoration: none;\n    font-size: 36px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.my-mobile-subheader-overlay a:hover, .my-mobile-subheader-overlay a:focus {\n    color: #f1f1f1;\n}\n\n.my-mobile-subheader-overlay .closebtn {\n    position: absolute;\n    top: 20px;\n    right: 45px;\n    font-size: 60px;\n}\n\n@media screen and (max-height: 450px) {\n  .my-mobile-subheader-overlay a {font-size: 20px}\n  .my-mobile-subheader-overlay .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n\n.downTriangle {\n  font-size:20px;\n  cursor:pointer;\n  color: white;\n  padding-top: 100px;\n  margin-bottom: 100px;\n}\n\n.box-gallery-img-mobile{\n  width: 100%;\n}\n\n.box-image-container-mobile{\n\n}\n\n.mobile-photo-breaker{\n  color: black;\n  border-bottom: solid 1px white;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#my-gallery-container{\n  visibility: hidden;\n}\n", ""]);

// exports


/***/ }),

/***/ 261:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(263);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 263:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gallery = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = exports.Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

    _this.showGallery = _this.showGallery.bind(_this);
    _this.enlargePhoto = _this.enlargePhoto.bind(_this);
    _this.onKeyPressed = _this.onKeyPressed.bind(_this);
    _this.clickNextPhoto = _this.clickNextPhoto.bind(_this);
    _this.getNextPhoto = _this.getNextPhoto.bind(_this);
    _this.state = {
      photoUrls: [],
      photoTitles: []
    };
    return _this;
  }

  _createClass(Gallery, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var elem = _reactDom2.default.findDOMNode(this);
      elem.style.opacity = 0;
      setTimeout(function () {
        window.requestAnimationFrame(function () {
          elem.style.transition = "opacity 1000ms";
          elem.style.opacity = 1;
        });
      }, 0);
      window.addEventListener('load', this.showGallery);
      document.addEventListener("keydown", this.onKeyPressed);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      var photoArray = nextProps.photoArray;
      var photoUrls = photoArray.map(function (photo) {
        return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
      });
      var photoTitles = photoArray.map(function (photo) {
        return photo.title;
      });
      this.setState({
        photoUrls: photoUrls,
        photoTitles: photoTitles
      });
    }
  }, {
    key: 'clickNextPhoto',
    value: function clickNextPhoto(ev) {
      if (ev.target.parentNode.id == 'left-arrow' || ev.target.id == "left-arrow") {
        this.getNextPhoto('left');
      } else {
        this.getNextPhoto('right');
      }
    }
  }, {
    key: 'getNextPhoto',
    value: function getNextPhoto(direction) {
      var selectedPhoto = document.getElementById("galleryBlowup").src;
      var selected_index = 0;
      this.state.photoUrls.forEach(function (p_url, index) {
        if (p_url == selectedPhoto) {
          selected_index = index;
        }
      });
      if (direction == 'left') {
        var new_selected_index = selected_index == 0 ? this.state.photoUrls.length - 1 : selected_index - 1;
        var new_photo_url = this.state.photoUrls[new_selected_index];
        document.getElementById("galleryBlowup").src = new_photo_url;
      } else {
        var _new_selected_index = selected_index == this.state.photoUrls.length - 1 ? 0 : selected_index + 1;
        var _new_photo_url = this.state.photoUrls[_new_selected_index];
        document.getElementById("galleryBlowup").src = _new_photo_url;
      }
    }
  }, {
    key: 'showGallery',
    value: function showGallery() {
      var elem = _reactDom2.default.findDOMNode(this);
      elem.style.visibility = "visible";
    }
  }, {
    key: 'onKeyPressed',
    value: function onKeyPressed(ev) {
      console.log(ev.code);
      if (ev.code == 'ArrowLeft') {
        this.getNextPhoto('left');
      } else if (ev.code == 'ArrowRight') {
        this.getNextPhoto('right');
      } else if (ev.code == 'Escape') {
        this.closeGalleryNav();
      }
    }
  }, {
    key: 'enlargePhoto',
    value: function enlargePhoto(ev) {
      var photoUrl = ev.target.nodeName == 'H4' ? ev.target.parentNode.nextSibling.src : ev.target.nextSibling.src;
      var imgElement = document.getElementById("galleryBlowup");
      imgElement.src = photoUrl;
      imgElement.style.border = "solid 15px white";
      document.getElementById("my-gallery-modal").style.opacity = "1";
      document.getElementById("my-gallery-modal").style.zIndex = "100000";
    }
  }, {
    key: 'closeGalleryNav',
    value: function closeGalleryNav() {
      console.log('hit');
      document.getElementById("my-gallery-modal").style.opacity = "0";
      document.getElementById("my-gallery-modal").style.zIndex = "-10";
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var photoArray = this.props.photoArray;
      var photoUrls = photoArray.map(function (photo) {
        return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
      });
      var photoTitles = photoArray.map(function (photo) {
        return photo.title;
      });
      var gallery = [];
      if (screen.width > 700) {
        gallery = photoUrls.map(function (photo, index) {
          return _react2.default.createElement(
            'div',
            { key: index, className: 'col-xs-12 col-md-6 col-lg-3 box-image-container' },
            _react2.default.createElement(
              'div',
              { onClick: _this2.enlargePhoto, className: 'photo-cover-cont' },
              _react2.default.createElement(
                'h4',
                null,
                photoTitles[index]
              )
            ),
            _react2.default.createElement('img', { className: 'box-gallery-img', src: photo })
          );
        });
      } else {
        gallery = photoUrls.map(function (photo, index) {
          return _react2.default.createElement(
            'div',
            { key: index, className: 'col-xs-12 col-md-6 col-lg-3 box-image-container-mobile' },
            _react2.default.createElement(
              'div',
              { className: 'photo-cover-cont' },
              _react2.default.createElement(
                'h4',
                null,
                photoTitles[index]
              )
            ),
            _react2.default.createElement('img', { className: 'box-gallery-img-mobile', src: photo }),
            _react2.default.createElement('div', { className: 'col-xs-1 col-xs-offset-5  mobile-photo-breaker' })
          );
        });
      }
      return _react2.default.createElement(
        'div',
        { id: 'my-gallery-container' },
        _react2.default.createElement(
          'div',
          { onClick: this.closeGalleryNav, id: 'my-gallery-modal', className: 'gallery-overlay' },
          _react2.default.createElement(
            'div',
            { className: 'gallery-overlay-content' },
            _react2.default.createElement('img', { src: '#', id: 'galleryBlowup' })
          ),
          _react2.default.createElement(
            'div',
            { onClick: this.clickNextPhoto, className: 'gallery-arrow-cont', id: 'left-arrow' },
            _react2.default.createElement(
              'h1',
              { className: 'gallery-arrow' },
              '\u2329'
            )
          ),
          _react2.default.createElement(
            'div',
            { onClick: this.clickNextPhoto, className: 'gallery-arrow-cont', id: 'right-arrow' },
            _react2.default.createElement(
              'h1',
              { className: 'gallery-arrow' },
              '\u232A'
            )
          ),
          _react2.default.createElement(
            'a',
            { href: 'javascript:void(0)', className: 'gallery-closebtn', onClick: this.closeGalleryNav },
            '\xD7'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-xs-12 col-md-10 gallery-container' },
          gallery
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectBody = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _subheaderNav = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectContent = function (_Component) {
  _inherits(ProjectContent, _Component);

  function ProjectContent(props) {
    _classCallCheck(this, ProjectContent);

    return _possibleConstructorReturn(this, (ProjectContent.__proto__ || Object.getPrototypeOf(ProjectContent)).call(this, props));
  }

  _createClass(ProjectContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var elem = _reactDom2.default.findDOMNode(this);
      elem.style.opacity = 0;
      window.requestAnimationFrame(function () {
        elem.style.transition = "opacity 1000ms";
        elem.style.opacity = 1;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'col-xs-12 col-lg-9 project-container' },
        _react2.default.createElement(
          'div',
          { className: 'col-xs-12 inner-proj-container' },
          _react2.default.createElement(
            'div',
            { className: 'project-cover-cont' },
            _react2.default.createElement(
              'a',
              { href: this.props.github, target: '_blank' },
              _react2.default.createElement('img', { className: 'banner-img-link', src: 'http://computermentors.org/wp-content/uploads/2017/07/GitHub_Logo_White.png' })
            ),
            _react2.default.createElement(
              'a',
              { href: this.props.link, target: '_blank' },
              _react2.default.createElement('img', { className: 'banner-img-link-2', src: 'https://cdnjs.cat.net/ajax/libs/uswds/0.10.0/img/external-link.svg' })
            )
          ),
          _react2.default.createElement('img', { className: 'banner-img', src: this.props.projectBannerImage })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-xs-12 project-information' },
          _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement(
              'strong',
              null,
              'Project:'
            ),
            ' ',
            this.props.properName
          ),
          _react2.default.createElement(
            'h4',
            { className: 'col-md-2 col-xs-12' },
            _react2.default.createElement(
              'a',
              { href: this.props.github, target: '_blank' },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-light' },
                ' ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Github'
                )
              )
            )
          ),
          _react2.default.createElement(
            'h4',
            { className: 'col-md-10 col-xs-12' },
            _react2.default.createElement(
              'a',
              { href: this.props.link, target: '_blank' },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-light' },
                ' ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Project Link '
                )
              )
            )
          ),
          _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement(
              'strong',
              null,
              'Description:'
            ),
            ' ',
            this.props.description
          ),
          _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement(
              'strong',
              null,
              'Technologies:'
            ),
            ' ',
            this.props.tech
          )
        )
      );
    }
  }]);

  return ProjectContent;
}(_react.Component);

var ProjectBody = exports.ProjectBody = function (_Component2) {
  _inherits(ProjectBody, _Component2);

  function ProjectBody(props) {
    _classCallCheck(this, ProjectBody);

    return _possibleConstructorReturn(this, (ProjectBody.__proto__ || Object.getPrototypeOf(ProjectBody)).call(this, props));
  }

  _createClass(ProjectBody, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row photo-container' },
        _react2.default.createElement(_subheaderNav.SubheaderNav, { selected: this.props.name, subheadings: ["concertify", "facePay", "solitaire", "blackstar", "vutensils", "vmil"] }),
        _react2.default.createElement(ProjectContent, {
          name: this.props.name,
          github: this.props.github,
          link: this.props.link,
          projectBannerImage: this.props.projectBannerImage,
          properName: this.props.properName,
          description: this.props.description,
          tech: this.props.tech
        })
      );
    }
  }]);

  return ProjectBody;
}(_react.Component);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBanner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleBanner = exports.TitleBanner = function (_Component) {
  _inherits(TitleBanner, _Component);

  function TitleBanner(props) {
    _classCallCheck(this, TitleBanner);

    var _this = _possibleConstructorReturn(this, (TitleBanner.__proto__ || Object.getPrototypeOf(TitleBanner)).call(this, props));

    _this.openNav = _this.openNav.bind(_this);
    _this.closeNav = _this.closeNav.bind(_this);
    return _this;
  }

  _createClass(TitleBanner, [{
    key: "openNav",
    value: function openNav() {
      document.getElementById(this.props.nameAlt).style.height = "100%";
    }
  }, {
    key: "closeNav",
    value: function closeNav() {
      document.getElementById(this.props.nameAlt).style.height = "0%";
    }
  }, {
    key: "render",
    value: function render() {
      var subHeads = "";
      if (this.props.subheaders != undefined) {
        subHeads = this.props.subheaders.map(function (subhead) {
          return _react2.default.createElement(
            "a",
            { href: "stills/peru" },
            _react2.default.createElement(
              "h4",
              { className: "col-xs-offset-1" },
              subhead
            )
          );
        });
      }
      var headerDescription = "";
      if (this.props.description != undefined) {
        headerDescription = this.props.description.map(function (des) {
          return _react2.default.createElement(
            "h4",
            { className: "col-xs-offset-1" },
            des
          );
        });
      }
      var name = this.props.name == 'portfolio' ? 'stills' : this.props.name;
      var new_path = this.props.folder == undefined ? "" + name : this.props.folder + "/" + name;
      return _react2.default.createElement(
        "a",
        { href: new_path },
        _react2.default.createElement(
          "div",
          { id: this.props.name, className: "col-lg-4 col-xs-12 landing-divs", onMouseEnter: this.openNav, onMouseLeave: this.closeNav },
          _react2.default.createElement(
            "h2",
            { className: "vertical-heading" },
            this.props.name
          ),
          _react2.default.createElement(
            "div",
            { id: this.props.nameAlt, className: "title-modal" },
            _react2.default.createElement(
              "div",
              { className: "title-modal-content" },
              _react2.default.createElement(
                "h2",
                { className: "vertical-heading inner-head" },
                this.props.name
              ),
              subHeads,
              _react2.default.createElement(
                "h4",
                null,
                headerDescription
              )
            )
          )
        )
      );
    }
  }]);

  return TitleBanner;
}(_react.Component);

/***/ })

},[118]);
//# sourceMappingURL=main.map
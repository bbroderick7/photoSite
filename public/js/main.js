webpackJsonp([0],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerSelection = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(10);

var _titleBanner = __webpack_require__(33);

var _navBar = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/
var BannerSelection = exports.BannerSelection = function (_Component) {
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
    key: 'getProjectBanners',
    value: function getProjectBanners() {
      var _this2 = this;

      document.title = "Brendan Broderick | Projects";
      return this.props.info.projectNames.map(function (name) {
        return _react2.default.createElement(_titleBanner.TitleBanner, {
          id: _this2.props.info.projects[name].id,
          name: _this2.props.info.projects[name].name,
          nameAlt: _this2.props.info.projects[name].nameAlt,
          description: _this2.props.info.projects[name].description,
          folder: _this2.props.info.projects[name].folder });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        ' ',
        this.getProjectBanners(),
        ' '
      );
    }
  }]);

  return BannerSelection;
}(_react.Component);

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Deloache = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _titleBanner = __webpack_require__(33);

var _navBar = __webpack_require__(20);

var _subheaderNav = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Deloache = exports.Deloache = function (_Component) {
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
            ' ',
            gallery,
            ' '
          )
        )
      );
    }
  }]);

  return Deloache;
}(_react.Component);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)))

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactRouterDom = __webpack_require__(10);

var _header = __webpack_require__(70);

var _header2 = _interopRequireDefault(_header);

var _landing = __webpack_require__(238);

var _landing2 = _interopRequireDefault(_landing);

var _landingTwo = __webpack_require__(239);

var _landingTwo2 = _interopRequireDefault(_landingTwo);

var _projects = __webpack_require__(240);

var _projects2 = _interopRequireDefault(_projects);

var _projectPage = __webpack_require__(242);

var _projectPage2 = _interopRequireDefault(_projectPage);

var _stills = __webpack_require__(244);

var _stills2 = _interopRequireDefault(_stills);

var _about = __webpack_require__(246);

var _about2 = _interopRequireDefault(_about);

var _deloache = __webpack_require__(116);

var _deloache2 = _interopRequireDefault(_deloache);

var _jackson = __webpack_require__(247);

var _jackson2 = _interopRequireDefault(_jackson);

var _galleryPage = __webpack_require__(248);

var _galleryPage2 = _interopRequireDefault(_galleryPage);

var _gallery = __webpack_require__(250);

var _gallery2 = _interopRequireDefault(_gallery);

var _projects3 = __webpack_require__(251);

var _projects4 = _interopRequireDefault(_projects3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(252);
/*************************************************************************/

var MyApp = function (_Component) {
  _inherits(MyApp, _Component);

  function MyApp(props) {
    var _this;

    _classCallCheck(this, MyApp);

    (_this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this, props)), _this), _this.galleries = _gallery2.default.galleries, _this.galleryNames = _gallery2.default.galleryNames, _this.projects = _projects4.default.projects, _this.projectNames = _projects4.default.projectNames;
    return _this;
  }

  _createClass(MyApp, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (window.location.href == "http://broderickphoto.com/" || window.location.href == "http://www.broderickphoto.com/" || window.location.href == "www.broderickphoto.com/" || window.location.href == "broderickphoto.com") {
        window.location = "https://www.broderickphoto.com/";
      }
      var currentProjects = this.projectNames.map(function (proj) {
        return _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/' + proj, render: function render() {
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_header2.default, null),
              _react2.default.createElement(_projectPage2.default, { project: _this2.projects[proj] })
            );
          } });
      });

      var currentGalleries = this.galleryNames.map(function (gall) {
        return _react2.default.createElement(_reactRouterDom.Route, { path: '/stills/' + gall, render: function render() {
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_header2.default, null),
              _react2.default.createElement(_galleryPage2.default, { galleryInfo: _this2.galleries[gall], galleryList: _this2.galleryNames })
            );
          } });
      });

      var landingPage = window.innerWidth < 1000 ? _react2.default.createElement(_landing2.default, null) : _react2.default.createElement(_landingTwo2.default, null);

      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {
              return landingPage;
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/two', render: function render() {
              return _react2.default.createElement(_landingTwo2.default, null);
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/about', render: function render() {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(_about2.default, null)
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects', render: function render() {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(_projects2.default, null)
              );
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/stills', render: function render() {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(_stills2.default, null)
              );
            } }),
          currentProjects,
          currentGalleries
        )
      );
    }
  }]);

  return MyApp;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(MyApp, null), document.getElementById('mainDiv'));

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

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

var NavLinks = function NavLinks() {
  return _react2.default.createElement(
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
  );
};

var NavBarMobile = function (_Component) {
  _inherits(NavBarMobile, _Component);

  function NavBarMobile(props) {
    _classCallCheck(this, NavBarMobile);

    var _this = _possibleConstructorReturn(this, (NavBarMobile.__proto__ || Object.getPrototypeOf(NavBarMobile)).call(this, props));

    _this.state = { open: false };
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
        "h3",
        { id: "mobile-selection-header" },
        selectedname,
        " ",
        _react2.default.createElement(
          "span",
          { className: "downTriangle" },
          "\u25B4"
        )
      ) : _react2.default.createElement(
        "h3",
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
        { className: "" },
        _react2.default.createElement(
          "div",
          { id: "mobileNav", className: "my-mobile-navbar-overlay" },
          _react2.default.createElement(NavLinks, null)
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

    _this2.state = { screenWidth: 0 };
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
      this.setState({ screenWidth: screen.width });
    }
  }, {
    key: "render",
    value: function render() {
      var mobileSelector = this.props.selector.slice(0, this.props.selector.indexOf('-'));
      var contextualSubheading = screen.width < 600 ? _react2.default.createElement(NavBarMobile, { selector: mobileSelector }) : _react2.default.createElement(NavBarDesktopHeadings, null);
      var nameHeading = screen.width < 600 ? _react2.default.createElement("h6", null) : _react2.default.createElement(
        "h1",
        null,
        " brendan broderick. "
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
            " ",
            nameHeading,
            " "
          )
        ),
        contextualSubheading
      );
    }
  }]);

  return NavBar;
}(_react.Component);

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(10);

var _titleBanner = __webpack_require__(33);

var _header = __webpack_require__(70);

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
      }, 2600);
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
      }, 2600);
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
      }, 2600);
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
      var elem = _reactDom2.default.findDOMNode(this);
      elem.style.opacity = 0;
      setTimeout(function () {
        window.requestAnimationFrame(function () {
          elem.style.transition = "opacity 5000ms";
          elem.style.opacity = 1;
        });
      }, 2600);
    }
  }, {
    key: 'render',
    value: function render() {
      var stillsInfo = ["Peru", "Bolivia", "Moab", "Jackson", "Colorado", "Nashville", "Experiment"];
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row landing-page-banners' },
          _react2.default.createElement(_titleBanner.TitleBanner, { id: "stills", name: "portfolio", nameAlt: "portfolio1", subheaders: stillsInfo }),
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

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(10);

var _header = __webpack_require__(70);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/
var TitleBanner = function (_Component) {
  _inherits(TitleBanner, _Component);

  function TitleBanner(props) {
    _classCallCheck(this, TitleBanner);

    var _this = _possibleConstructorReturn(this, (TitleBanner.__proto__ || Object.getPrototypeOf(TitleBanner)).call(this, props));

    _this.openNav = _this.openNav.bind(_this);
    _this.closeNav = _this.closeNav.bind(_this);
    return _this;
  }

  _createClass(TitleBanner, [{
    key: 'openNav',
    value: function openNav() {
      if (screen.width > 800) document.getElementById(this.props.nameAlt).style.height = "100%";
    }
  }, {
    key: 'closeNav',
    value: function closeNav() {
      document.getElementById(this.props.nameAlt).style.height = "0%";
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var subHeads = "";
      if (this.props.subheaders != undefined) {
        subHeads = this.props.subheaders.map(function (subhead) {
          return _react2.default.createElement(
            'a',
            { href: _this2.props.id + '/' + subhead },
            _react2.default.createElement(
              'h4',
              { className: 'col-xs-offset-1' },
              subhead
            )
          );
        });
      }
      var headerDescription = "";
      if (this.props.description != undefined) {
        headerDescription = this.props.description.map(function (des) {
          return _react2.default.createElement(
            'h4',
            { className: 'col-xs-offset-1' },
            des
          );
        });
      }
      var name = this.props.name == 'portfolio' ? 'stills' : this.props.name;
      var new_path = this.props.folder == undefined ? '' + name : this.props.folder + '/' + name;
      return _react2.default.createElement(
        'div',
        { className: 'hidden-title-banner' },
        _react2.default.createElement(
          'a',
          { href: new_path },
          _react2.default.createElement(
            'div',
            { id: this.props.name, className: 'col-sm-4 col-xs-12 landing-divs2' },
            _react2.default.createElement(
              'h2',
              { className: 'vertical-heading' },
              this.props.name
            ),
            _react2.default.createElement(
              'div',
              { id: this.props.nameAlt, className: 'title-modal' },
              _react2.default.createElement(
                'div',
                { className: 'title-modal-content' },
                _react2.default.createElement(
                  'h2',
                  { className: 'vertical-heading inner-head' },
                  this.props.name
                ),
                subHeads,
                _react2.default.createElement(
                  'h4',
                  null,
                  ' ',
                  headerDescription,
                  ' '
                )
              )
            )
          )
        )
      );
    }
  }]);

  return TitleBanner;
}(_react.Component);

var HomeHeader = function (_Component2) {
  _inherits(HomeHeader, _Component2);

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
      }, 2600);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_header2.default, null);
    }
  }]);

  return HomeHeader;
}(_react.Component);

var NavBarSubheadings = function (_Component3) {
  _inherits(NavBarSubheadings, _Component3);

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
      }, 2600);
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
    { className: 'landingTwo-typwriter' },
    _react2.default.createElement(
      'div',
      { className: 'row typewriter-container' },
      _react2.default.createElement(
        'div',
        { className: 'typewriter col-lg-12 col-xs-12' },
        ' ',
        _react2.default.createElement(
          'h1',
          null,
          'brendan broderick.'
        ),
        ' '
      )
    )
  );
};

var LandingBanner = function (_Component4) {
  _inherits(LandingBanner, _Component4);

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
      }, 2600);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'col-xs-12 fillerArea' });
    }
  }]);

  return LandingBanner;
}(_react.Component);

var TitleBannerContainer = function (_Component5) {
  _inherits(TitleBannerContainer, _Component5);

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
          elem.style.transition = "opacity 1800ms";
          elem.style.opacity = 1;
        });
      }, 4000);
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
          _react2.default.createElement(TitleBanner, { id: "stills", name: "portfolio", nameAlt: "portfolio1", subheaders: ["Peru", "Bolivia", "Moab", "Jackson", "Colorado", "Nashville", "Experiment"] }),
          _react2.default.createElement(TitleBanner, { id: "projects", name: "projects", nameAlt: "projects1", subheaders: ["Concertify", "FacePay", "Solitaire", "Black Star Rentals", "VUtensils"] }),
          _react2.default.createElement(TitleBanner, { id: "about", name: "about", nameAlt: "about1", description: ["Brendan Broderick", "Denver, Colorado", "Vanderbilt University", "Computer Science & Economics"] })
        )
      );
    }
  }]);

  return TitleBannerContainer;
}(_react.Component);

var ScreenSaverOverlay = function (_Component6) {
  _inherits(ScreenSaverOverlay, _Component6);

  function ScreenSaverOverlay(props) {
    _classCallCheck(this, ScreenSaverOverlay);

    var _this7 = _possibleConstructorReturn(this, (ScreenSaverOverlay.__proto__ || Object.getPrototypeOf(ScreenSaverOverlay)).call(this, props));

    _this7.handleLoad = _this7.handleLoad.bind(_this7);
    return _this7;
  }

  _createClass(ScreenSaverOverlay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Get the components DOM node
      var elem = _reactDom2.default.findDOMNode(this);
      // Set the opacity of the element to 0
      elem.style.opacity = 0;
      window.addEventListener('load', this.handleLoad);
    }
  }, {
    key: 'handleLoad',
    value: function handleLoad() {
      var elem = _reactDom2.default.findDOMNode(this);
      setTimeout(function () {
        window.requestAnimationFrame(function () {
          elem.style.transition = "opacity 2000ms";
          elem.style.opacity = 1;
        });
      }, 2000);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'screen-saver-overlay' });
    }
  }]);

  return ScreenSaverOverlay;
}(_react.Component);

var LandingTwo = function LandingTwo() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(HomeHeader, null),
    _react2.default.createElement(
      'div',
      { className: 'outerDiv contentDiv col-xs-12' },
      _react2.default.createElement(NavBar, null),
      _react2.default.createElement(ScreenSaverOverlay, null),
      _react2.default.createElement(TitleBannerContainer, null)
    )
  );
};

exports.default = (0, _reactRouterDom.withRouter)(LandingTwo);

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _navBar = __webpack_require__(20);

var _bannerSelection = __webpack_require__(115);

var _projectsDescription = __webpack_require__(241);

var _projectsDescription2 = _interopRequireDefault(_projectsDescription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*************************************************************************/
var Projects = function Projects() {
  return _react2.default.createElement(
    'div',
    { className: 'outerDiv contentDiv-secondary col-xs-12' },
    _react2.default.createElement(_navBar.NavBar, { selector: "projects-navbar" }),
    _react2.default.createElement(_bannerSelection.BannerSelection, { info: _projectsDescription2.default })
  );
};

exports.default = (0, _reactRouterDom.withRouter)(Projects);

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  projects: {
    blackstar: {
      id: "blackStarRentals-head",
      name: "blackstar",
      nameAlt: "blackstar1",
      description: ["Rent bigger and better beds and futons in the Nashville area"],
      folder: 'projects'
    },
    vutensils: {
      id: "vUtensils-head",
      name: "vUtensils",
      nameAlt: "vUtensils1",
      description: ["Make college cooking easy"],
      folder: 'projects'
    },
    vmil: {
      id: "vmil-head",
      name: "vmil",
      nameAlt: "vmil1",
      description: ["Improve patient experiences in clinical settings"],
      folder: 'projects'
    },
    solitaire: {
      id: "solitaire-head",
      name: "solitaire",
      nameAlt: "solitaire1",
      description: ["Play klondike solitaire, create a user profile and save and compare game results"],
      folder: 'projects'
    },
    concertify: {
      id: "concertify-head",
      name: "concertify",
      nameAlt: "concertify1",
      description: ["Build Spotify Playlists from your favorite band's recent concert setlists"],
      folder: 'projects'
    },
    facePay: {
      id: "facePay-head",
      name: "facePay",
      nameAlt: "facePay1",
      description: ["Use facial recognition software to make purchases with facial identification"],
      folder: 'projects'
    },
    accenture: {
      id: "accenture-head",
      name: "accenture",
      nameAlt: "accenture1",
      description: ["A co-op with Vanderbilt Innovation Garage and Accenture that explores Blockchain and the future of supplier risk management"],
      folder: 'projects'
    }
  },
  projectNames: ["blackstar", "vutensils", "vmil", "accenture", "solitaire", "concertify", "facePay"]
};

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _projectBody = __webpack_require__(243);

var _navBar = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var ProjectPage = function (_Component) {
  _inherits(ProjectPage, _Component);

  function ProjectPage(props) {
    _classCallCheck(this, ProjectPage);

    return _possibleConstructorReturn(this, (ProjectPage.__proto__ || Object.getPrototypeOf(ProjectPage)).call(this, props));
  }

  _createClass(ProjectPage, [{
    key: 'render',
    value: function render() {
      document.title = 'Brendan Broderick | ' + this.props.project.projectName;
      var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = '../favicon.ico';
      document.getElementsByTagName('head')[0].appendChild(link);
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv-secondary col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "projects-navbar" }),
        _react2.default.createElement(_projectBody.ProjectBody, {
          name: this.props.project.projectName,
          github: this.props.project.projectGithub,
          link: this.props.project.projectLink,
          projectBannerImage: this.props.project.projectBannerImage,
          properName: this.props.project.projectProperName,
          description: this.props.project.projectDescription,
          tech: this.props.project.projectTechnology
        })
      );
    }
  }]);

  return ProjectPage;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(ProjectPage);

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectBody = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _subheaderNav = __webpack_require__(45);

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
        { className: 'col-xs-12 col-lg-10 project-container' },
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
        { className: 'photo-container' },
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

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _navBar = __webpack_require__(20);

var _bannerSelection = __webpack_require__(115);

var _stillsDescription = __webpack_require__(245);

var _stillsDescription2 = _interopRequireDefault(_stillsDescription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stills = function Stills() {
  return _react2.default.createElement(
    'div',
    { className: 'outerDiv contentDiv-secondary col-xs-12' },
    _react2.default.createElement(_navBar.NavBar, { selector: "stills-navbar" }),
    _react2.default.createElement(_bannerSelection.BannerSelection, { info: _stillsDescription2.default })
  );
};

exports.default = (0, _reactRouterDom.withRouter)(Stills);

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  projects: {
    peru: {
      id: "peru-head",
      name: "peru",
      nameAlt: "peru1",
      description: ["Cordillera Blanca", "Streets", "Markets"],
      folder: 'stills'
    },
    bolivia: {
      id: "bolivia-head",
      name: "bolivia",
      nameAlt: "bolivia1",
      description: ["Chicha", "Amazon", "Cochabamba"],
      folder: 'stills'
    },
    deloache: {
      id: "deloche-head",
      name: "deloache",
      nameAlt: "deloache1",
      description: ["Vanderbilt Deloache Award, 2015"],
      folder: 'stills'
    },
    moab: {
      id: "moab-head",
      name: "moab",
      nameAlt: "moab1",
      description: ["Dessert"],
      folder: 'stills'
    },
    jackson: {
      id: "jackson-head",
      name: "jackson",
      nameAlt: "jackson1",
      description: ["Tetons"],
      folder: 'stills'
    },
    colorado: {
      id: "colorado-head",
      name: "colorado",
      nameAlt: "colorado1",
      description: ["Maroon Bells", "RMNP"],
      folder: 'stills'
    },
    nashville: {
      id: "nashville-head",
      name: "nashville",
      nameAlt: "nashville1",
      description: ["Midtown", "Broadway"],
      folder: 'stills'
    },
    experiment: {
      id: "exp-head",
      name: "experiment",
      nameAlt: "exp1",
      description: ["nature & perspective"],
      folder: 'stills'
    },
    columbia: {
      id: "columbia-head",
      name: "columbia",
      nameAlt: "columbia1",
      description: ["Medellin", "Cartagena"],
      folder: 'stills'
    }
  },
  projectNames: ["peru", "bolivia", "deloache", "columbia", "moab", "jackson", "colorado", "nashville", "experiment"]
};

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(10);

var _titleBanner = __webpack_require__(33);

var _navBar = __webpack_require__(20);

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
      document.title = "Brendan Broderick | About";
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv-secondary col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "about-navbar" }),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-5 about-info' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'h4',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Name: '
                ),
                ' Brendan Broderick'
              ),
              _react2.default.createElement(
                'h4',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Hometown:'
                ),
                ' Denver, CO'
              ),
              _react2.default.createElement(
                'h4',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'University: '
                ),
                ' Vanderbilt'
              ),
              _react2.default.createElement(
                'h4',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Majors: '
                ),
                ' Computer Science & Economics'
              ),
              _react2.default.createElement(
                'h4',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Interests: '
                ),
                ' Skiing, Rockclimbing, Mountaineering, Photography, Product Mangement, Software Development, Design, Human Computer Interaction, Anything Oscar Wilde'
              ),
              _react2.default.createElement(
                'h4',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Languages: '
                ),
                ' C/C++, Java, javascript/node, Go, Ruby/Rails, SQL, NoSQL, HTML/CSS'
              ),
              _react2.default.createElement(
                'h4',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Frameworks & Libraries: '
                ),
                ' React, Angular, Ember, Bootstrap, Material UI, JQuery, Express, Mongoose, Passport.js / Oauth'
              ),
              _react2.default.createElement(
                'h4',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Companies: '
                ),
                ' Accenuture Innovation Garage, Ibotta, Vanderbilt University Medical Center, Choozle'
              )
            )
          ),
          _react2.default.createElement('div', { className: 'col-md-4 col-xs-11', id: 'personal-photo' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2 col-xs-11', id: 'icon-list' },
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/bbroderick7', target: '_blank' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-12 col-xs-3 icon-units', id: 'about-github-icon' },
                _react2.default.createElement('img', { src: 'https://pbs.twimg.com/profile_images/616309728688238592/pBeeJQDQ.png' })
              )
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.linkedin.com/in/brendan-broderick-5885a284/', target: '_blank' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-12 col-xs-3 icon-units', id: 'about-linkedin-icon' },
                _react2.default.createElement('img', { src: 'https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png' })
              )
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.instagram.com/bbroderick95/', target: '_blank' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-12 col-xs-3 icon-units', id: 'about-instagram-icon' },
                _react2.default.createElement('img', { src: 'https://instagram-brand.com/wp-content/uploads/2016/11/app-icon2.png' })
              )
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/bbroderick7', target: '_blank' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-12 col-xs-3 icon-units', id: 'about-facebook-icon' },
                _react2.default.createElement('img', { src: 'https://www.seeklogo.net/wp-content/uploads/2016/09/facebook-icon-preview-1-400x400.png' })
              )
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

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _titleBanner = __webpack_require__(33);

var _navBar = __webpack_require__(20);

var _subheaderNav = __webpack_require__(45);

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

    _this.state = { galleryPhotos: [] };
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
        { className: 'outerDiv contentDiv-secondary col-xs-12' },
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)))

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _navBar = __webpack_require__(20);

var _subheaderNav = __webpack_require__(45);

var _gallery = __webpack_require__(249);

var _deloache = __webpack_require__(116);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var GalleryPage = function (_Component) {
  _inherits(GalleryPage, _Component);

  function GalleryPage(props) {
    _classCallCheck(this, GalleryPage);

    var _this = _possibleConstructorReturn(this, (GalleryPage.__proto__ || Object.getPrototypeOf(GalleryPage)).call(this, props));

    _this.state = { photoArray: [] };
    return _this;
  }

  _createClass(GalleryPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      $.ajax({ url: this.props.galleryInfo.url }).then(function (data) {
        _this2.setState({ photoArray: data.photoset.photo });
      }).fail(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      document.title = 'Brendan Broderick | ' + this.props.galleryInfo.name;
      var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = '../favicon.ico';
      document.getElementsByTagName('head')[0].appendChild(link);

      if (this.props.galleryInfo.name == 'deloache') return _react2.default.createElement(_deloache.Deloache, null);
      return _react2.default.createElement(
        'div',
        { className: 'outerDiv contentDiv col-xs-12' },
        _react2.default.createElement(_navBar.NavBar, { selector: "stills-navbar" }),
        _react2.default.createElement(
          'div',
          { className: 'row photo-container' },
          _react2.default.createElement(_subheaderNav.SubheaderNav, { selected: this.props.galleryInfo.name, subheadings: this.props.galleryList }),
          _react2.default.createElement(_gallery.Gallery, { photoArray: this.state.photoArray })
        )
      );
    }
  }]);

  return GalleryPage;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(GalleryPage);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)))

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gallery = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DesktopDisplay = function DesktopDisplay(props) {
  var content = props.photoUrls.map(function (photo, index) {
    return _react2.default.createElement(
      'div',
      { key: index, className: 'col-xs-12 col-md-6 col-lg-3 box-image-container' },
      _react2.default.createElement(
        'div',
        { onClick: props.enlargePhoto, className: 'photo-cover-cont' },
        _react2.default.createElement(
          'h4',
          null,
          ' ',
          props.photoTitles[index],
          ' '
        )
      ),
      _react2.default.createElement('img', { className: 'box-gallery-img', src: photo })
    );
  });
  return _react2.default.createElement(
    'div',
    null,
    ' ',
    content,
    ' '
  );
};

var MobileDisplay = function MobileDisplay(props) {
  var content = props.photoUrls.map(function (photo, index) {
    return _react2.default.createElement(
      'div',
      { key: index, className: 'col-xs-12 col-md-6 col-lg-3 box-image-container-mobile' },
      _react2.default.createElement(
        'div',
        { className: 'photo-cover-cont-mobile' },
        _react2.default.createElement(
          'h4',
          null,
          props.photoTitles[index]
        )
      ),
      _react2.default.createElement('img', { className: 'box-gallery-img-mobile', src: photo }),
      _react2.default.createElement('div', { className: 'col-xs-1 col-xs-offset-5 mobile-photo-breaker' })
    );
  });
  return _react2.default.createElement(
    'div',
    null,
    ' ',
    content,
    ' '
  );
};

var ImageBlowup = function ImageBlowup(props) {
  return _react2.default.createElement(
    'div',
    { onClick: props.closeGalleryNav, id: 'my-gallery-modal', className: 'gallery-overlay' },
    _react2.default.createElement(
      'div',
      { className: 'gallery-overlay-content' },
      _react2.default.createElement('img', { src: props.currentUrl, id: 'galleryBlowup' }),
      _react2.default.createElement(
        'h2',
        { id: 'blowup-title' },
        props.currentTitle
      )
    ),
    _react2.default.createElement(
      'div',
      { onClick: props.clickNextPhoto, className: 'gallery-arrow-cont', id: 'left-arrow' },
      _react2.default.createElement(
        'h1',
        { className: 'gallery-arrow' },
        '\u2329'
      )
    ),
    _react2.default.createElement(
      'div',
      { onClick: props.clickNextPhoto, className: 'gallery-arrow-cont', id: 'right-arrow' },
      _react2.default.createElement(
        'h1',
        { className: 'gallery-arrow' },
        '\u232A'
      )
    ),
    _react2.default.createElement(
      'a',
      { href: 'javascript:void(0)', className: 'gallery-closebtn', onClick: props.closeGalleryNav },
      '\xD7'
    )
  );
};

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
      photoTitles: [],
      currentTitle: "",
      currentUrl: "#"
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
      ev.target.parentNode.id == 'left-arrow' || ev.target.id == "left-arrow" ? this.getNextPhoto('left') : this.getNextPhoto('right');
    }
  }, {
    key: 'getNextPhoto',
    value: function getNextPhoto(direction) {
      var selectedPhoto = this.state.currentUrl;
      var selected_index = 0;
      var new_selected_index = '';
      var new_photo_url = '';
      this.state.photoUrls.forEach(function (p_url, index) {
        selected_index = p_url == selectedPhoto ? index : selected_index;
      });
      if (direction == 'left') {
        new_selected_index = selected_index == 0 ? this.state.photoUrls.length - 1 : selected_index - 1;
        new_photo_url = this.state.photoUrls[new_selected_index];
      } else {
        new_selected_index = selected_index == this.state.photoUrls.length - 1 ? 0 : selected_index + 1;
        new_photo_url = this.state.photoUrls[new_selected_index];
      }
      this.setState({
        currentTitle: this.state.photoTitles[new_selected_index],
        currentUrl: new_photo_url
      });
    }
  }, {
    key: 'showGallery',
    value: function showGallery() {
      _reactDom2.default.findDOMNode(this).style.visibility = "visible";
    }
  }, {
    key: 'onKeyPressed',
    value: function onKeyPressed(ev) {
      if (ev.code == 'ArrowLeft') {
        this.getNextPhoto('left');
      } else if (ev.code == 'ArrowRight') {
        this.getNextPhoto('right');
      } else if (ev.code == 'Escape') {
        this.closeGalleryNav(ev);
      }
    }
  }, {
    key: 'enlargePhoto',
    value: function enlargePhoto(ev) {
      var photoUrl = ev.target.nodeName == 'H4' ? ev.target.parentNode.nextSibling.src : ev.target.nextSibling.src;
      var imgElement = document.getElementById("galleryBlowup");
      this.setState({ currentUrl: photoUrl });
      imgElement.style.border = "solid 15px white";
      document.getElementById("blowup-title").innerHTML = ev.target.nodeName == 'H4' ? ev.target.innerHTML : ev.target.children[0].innerHTML;
      document.getElementById("my-gallery-modal").style.opacity = "1";
      document.getElementById("my-gallery-modal").style.zIndex = "100000";
    }
  }, {
    key: 'closeGalleryNav',
    value: function closeGalleryNav(ev) {
      if (ev.target != undefined && ev.target.tagName != 'IMG' && ev.target.className != 'gallery-arrow-cont' && ev.target.tagName != 'h1' && ev.target.className != "gallery-arrow") {
        document.getElementById("my-gallery-modal").style.opacity = "0";
        document.getElementById("my-gallery-modal").style.zIndex = "-10";
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var photoUrls = this.props.photoArray.map(function (photo) {
        return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
      });
      var photoTitles = this.props.photoArray.map(function (photo) {
        return photo.title;
      });
      var gallery = screen.width > 700 ? _react2.default.createElement(DesktopDisplay, { photoUrls: this.state.photoUrls,
        photoTitles: photoTitles,
        enlargePhoto: this.enlargePhoto }) : _react2.default.createElement(MobileDisplay, { photoUrls: this.state.photoUrls,
        photoTitles: photoTitles });
      return _react2.default.createElement(
        'div',
        { id: 'my-gallery-container' },
        _react2.default.createElement(ImageBlowup, { closeGalleryNav: this.closeGalleryNav,
          currentUrl: this.state.currentUrl,
          currentTitle: this.state.currentTitle,
          clickNextPhoto: this.clickNextPhoto }),
        _react2.default.createElement(
          'div',
          { className: 'col-xs-12 col-md-10 gallery-container' },
          ' ',
          gallery,
          ' '
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  galleries: {
    bolivia: {
      name: "bolivia",
      url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157690236053501&user_id=148642232%40N07&format=json&nojsoncallback=1"
    },
    peru: {
      name: "peru",
      url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157668110748089&user_id=148642232%40N07&format=json&nojsoncallback=1"
    },
    moab: {
      name: "moab",
      url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157689047067132&user_id=148642232%40N07&format=json&nojsoncallback=1"
    },
    jackson: {
      name: "jackson",
      url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157688849867972&user_id=148642232%40N07&format=json&nojsoncallback=1"
    },
    colorado: {
      name: "colorado",
      url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157667919986069&user_id=148642232%40N07&format=json&nojsoncallback=1"
    },
    nashville: {
      name: "nashville",
      url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157691652131015&user_id=148642232%40N07&format=json&nojsoncallback=1"
    },
    experiment: {
      name: "experiment",
      url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157677942277644&user_id=148642232%40N07&format=json&nojsoncallback=1"
    },
    deloache: {
      name: "deloache",
      url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157691641364595&user_id=148642232%40N07&format=json&nojsoncallback=1"
    }
  },
  galleryNames: ["peru", "bolivia", "moab", "jackson", "colorado", "nashville", "experiment", "deloache"]
};

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  projects: {
    solitaire: {
      projectName: "solitaire",
      projectGithub: "https://github.com/vu-cs4288-f17/assignment6-bbroderick7",
      projectLink: "https://mighty-plateau-52681.herokuapp.com/",
      projectBannerImage: "https://farm5.staticflickr.com/4681/38674111074_ba6eb9e131_b.jpg",
      projectProperName: "Solitaire",
      projectDescription: "A single player klondike solitaire game that allows 1 and 3 card draw. All games moves are recorded and results can be viewed through a player created profile. Uses github OAuth for player signin and includes a game solver",
      projectTechnology: "Mongo, Mongoose, Redis, Node, Express, React, Bootstrap, Passport.js"
    },
    concertify: {
      projectName: "concertify",
      projectGithub: "https://github.com/bbroderick7/concertify",
      projectLink: "https://cs4278-concertify.herokuapp.com/",
      projectBannerImage: "https://farm5.staticflickr.com/4691/39382218961_17f586df5e_b.jpg",
      projectProperName: "Concertify",
      projectDescription: "Web Application that enables users to search for bands recent concert setlists and build spotify playlists based on the setlists. Spotify playlists are automatically saved to users Spotify account at the click of a button",
      projectTechnology: "React, Node, Material UI, Spotify OAuth & Passport.js, Setlist API"
    },
    blackstar: {
      projectName: "blackstar",
      projectGithub: "https://github.com/bbroderick7",
      projectLink: "http://blackstarrentals.com",
      projectBannerImage: "https://farm5.staticflickr.com/4643/38674111994_d184fdcc52_b.jpg",
      projectProperName: "Black Star Rentals",
      projectDescription: "Black Star Rentals is a student-run dorm furnishing rental service provided to the Vanderbilt community. We make moving in and out hassle free and environmentally friendly, while also making dorms and off-campus apartments more comfortable. We rent the best brand new full-sized deluxe beds, twin-sized memory foam mattresses and deluxe futons on campus, and deliver them right to your door. Black Star Rentals, Its Home Delivered",
      projectTechnology: "html/css, jquery, bootstrap"
    },
    facePay: {
      projectName: "facePay",
      projectGithub: "https://github.com/vu-cs4288-f17/assignment6-bbroderick7",
      projectLink: "https://mighty-plateau-52681.herokuapp.com/",
      projectBannerImage: "https://farm5.staticflickr.com/4729/38706264574_a87215a1fa_b.jpg",
      projectProperName: "FacePay",
      projectDescription: "A facial recognition mbile app that enables a user to upload bank account information and photos of themselves so that transactions between users and vendors can be made via facial recognition",
      projectTechnology: "Mongo, Mongoose, Node, Express, Swift, React Native, Kairos Facial Recognition, Capital One Nessie API, AWS S3 Buckets"
    },
    vutensils: {
      projectName: "vutensils",
      projectGithub: "https://github.com/bbroderick7/VUtensils",
      projectLink: "http://vutensils.com/",
      projectBannerImage: "https://farm5.staticflickr.com/4598/39382218661_4ee073dca7_b.jpg",
      projectProperName: "VUtensils",
      projectDescription: "A student run cooking rental company founded by Brendan Broderick and Alex Roed after they won the Vanderbilt Ventures business competition and ten thousand dollars in sed funding from Vanderbilt. VUtensils rents cooking and dining supplies to Vanderbilt students looking to enhance their college dining experience.",
      projectTechnology: "html/css, bootstrap, jquery, vanilla javascript"
    },
    vmil: {
      projectName: "vmil",
      projectGithub: "https://anchorlink.vanderbilt.edu/organization/medicalinnovationlab",
      projectLink: "https://anchorlink.vanderbilt.edu/organization/medicalinnovationlab",
      projectBannerImage: "https://farm5.staticflickr.com/4730/24528195987_e6fe7c7804_b.jpg",
      projectProperName: "Vanderbilt Medical Innovation Laboratory",
      projectDescription: "A joint orgainzation the consists of member of the Vanderbilt engineering school, Vanderbilt A&S, Vanderbilt Medical School Vanderbilt Law School and the Owen Graduate School of Business. Currently working on ways to imrpove the patient experience in clinical settings through streamlining wait times",
      projectTechnology: "html/css, bootstrap, jquery, vanilla javascript"
    }
  },
  projectNames: ["blackstar", "vutensils", "vmil", "concertify", "facePay", "solitaire"]
};

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(253);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(255)(content, options);
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

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(254)(undefined);
// imports


// module
exports.push([module.i, "\n@media only screen and (max-width: 600px)  {\n  .container-fluid {\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n  }\n}\n\n.navbar-static-top {\n    margin-left: -14px;\n    margin-right: -24px;\n}\n\n.right-nav {\n    text-align: right;\n    padding-top: 10px;\n    padding-right: 20px;\n}\n\n.right-nav a {\n    display: block;\n}\n\ntable#gameTable tbody tr:hover {\n    background: #6495ed;\n    cursor: pointer;\n}\n\n.header {\n    float: right;\n}\n\n.header img {\n    border-radius: 5px;\n    margin: 10px;\n}\n\n\nbody{\n  background-image: url(\"http://allfreedesigns.com/wp-content/uploads/2015/06/black-patterns-16.jpg\");\n  font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\n  position:relative;\n  min-height: 100%;\n  overflow-x: hidden;\n}\n\n@media (max-width: 900px)  {\n  body{\n    background-color: black !important;\n    background-image: none;\n  }\n}\n\n/* DEMO-SPECIFIC STYLES */\n.typewriter-container {\n}\n\n.typewriter h1 {\n  color: #fff;\n  font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\n  overflow: hidden; /* Ensures the content is not revealed until the animation */\n  border-right: .15em solid orange; /* The typwriter cursor */\n  white-space: nowrap; /* Keeps the content on a single line */\n  margin: 0 auto; /* Gives that scrolling effect as the typing happens */\n  letter-spacing: .15em; /* Adjust as needed */\n  animation:\n    typing 2.7s steps(30, end),\n    blink-caret .5s step-end infinite;\n}\n\n/* The typing effect */\n@keyframes typing {\n  from { width: 0 }\n  to { width: 100% }\n}\n\n/* The typewriter cursor effect */\n@keyframes blink-caret {\n  from, to { border-color: transparent }\n  50% { border-color: white }\n}\n\n.landing-subheader{\n      transition: 0.3s;\n}\n\n.landing-subheader a{\n      color: inherit;\n      text-decoration: none;\n}\n\n.landing-subheader h3:hover{\n  color: white;\n  cursor: pointer;\n}\n\n.landing-divs{\n  height: 500px;\n}\n\n@media screen and (max-width: 900px) {\n  .landing-divs{\n    border-bottom: solid 8px black;\n  }\n}\n\n.landing-divs2{\n  height: 100vh;\n}\n\n\n\n\n\n\n.screen-saver-overlay{\n  width: 100%;\n  height: 800px;\n  /*background-image: url(\"https://farm4.staticflickr.com/3833/33054746380_f6383c7e32_o.jpg\");*/\n  background-image: url(\"https://farm4.staticflickr.com/3913/32623870043_7c538b4206_o.jpg\");\n  position: fixed;\n  background-size: contain;\n  background-size: cover;\n  left: 0;\n  top: 0;\n}\n\n.hidden-title-banner{\n  opacity: 0;\n  transition: 0.5s;\n}\n\n.hidden-title-banner:hover{\n  opacity: 1;\n}\n\n.landing-page-banners{\n  margin-left: -16px;\n}\n\n.landingTwo-typwriter{\n  position: fixed;\n  top: 370px;\n  left: 50px;\n}\n\n\n\n\n.fillerArea{\n  height: 400px;\n  background-image: url(\"https://farm5.staticflickr.com/4748/39735111191_1f23caad65_k.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n.overlay {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 114000;\n    top: 0;\n    left: 0;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0, 0.9);\n    overflow-x: hidden;\n    transition: 0.5s;\n}\n\n.overlay-content {\n    position: relative;\n    top: 25%;\n    width: 100%;\n    text-align: center;\n    margin-top: 30px;\n    z-index: 1147483647;\n}\n\n.overlay a {\n    padding: 8px;\n    text-decoration: none;\n    font-size: 36px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.overlay a:hover, .overlay a:focus {\n    color: #f1f1f1;\n}\n\n.overlay .closebtn {\n    position: absolute;\n    top: 20px;\n    right: 45px;\n    font-size: 60px;\n}\n\n@media screen and (max-height: 450px) {\n  .overlay a {font-size: 20px}\n  .overlay .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n\n.spanNav {\n  font-size:30px;\n  cursor:pointer;\n  color: white;\n  padding-top: 100px;\n  margin-bottom: 100px;\n}\n\n.outerDiv {\n  max-width: 100% !important;\n  overflow-x: hidden !important;\n  margin:0px;\n}\n\n.headerDiv {\n  z-index: 1000;\n  height: 100%;\n  border-right: solid 2px white;\n  padding: 10px;\n  width: 50px;\n  position: fixed;\n  top: 0;\n  left:0;\n}\n\n.headerDiv-mobile {\n  z-index: 100000;\n  height: 50px;\n  border-bottom: solid 1px white;\n  width: 100%;\n  position: fixed;\n  background-color: black;\n  overflow: hidden;\n  margin-top: 0px;\n}\n\n.shadowDiv-mobile {\n  z-index: -5;\n  height: 30px;\n  width: 95%;\n}\n\n.vertical-text {\n  color: white;\n  width: 300px;\n  margin-top: 250px;\n\ttransform: rotate(-90deg);\n\ttransform-origin: left top 0;\n}\n\n.b-logo{\n  color: white;\n  padding-bottom: 100px;\n  padding-top: 50px;\n}\n\n.b-logo a{\n  text-decoration: none;\n  color: white;\n}\n\n.b-logo a:hover{\n  text-decoration: none;\n  color: white;\n}\n\n\n.b-logo-mobile{\n  color: white;\n  display: inline-block;\n  margin-top: 10px;\n}\n\n.b-logo-mobile a{\n  text-decoration: none;\n  color: white;\n}\n\n.b-logo-mobile a:hover{\n  text-decoration: none;\n  color: white;\n}\n\n.contentDiv{\n  padding-left: 64px;\n  padding-right: 0px !important;\n}\n\n.contentDiv-secondary{\n  padding-left: 50px;\n  padding-right: 0px !important;\n  max-width: 100% !important;\n  overflow-x: hidden !important;\n}\n\n@media screen and (max-width: 800px) {\n  .contentDiv{\n    padding-left: 0px;\n    padding-right: 0px !important;\n  }\n\n  .contentDiv-secondary{\n    padding-left: 0px;\n    padding-right: 0px !important;\n    width: 100%;\n  }\n}\n\n#portfolio {\n  background-image: url(\"https://farm5.staticflickr.com/4659/25357419447_c1117bb9f1_o.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#portfolio:hover{\n  cursor: pointer;\n}\n\n#portfolio h4{\n  display: none;\n}\n\n#portfolio:hover h4{\n  display: block;\n  text-decoration: none;\n  cursor: pointer;\n  color: white;\n}\n\n#projects {\n  background-image: url(\"https://farm5.staticflickr.com/4607/40194308162_dae02cb21e_o.png\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#projects:hover{\n  cursor: pointer;\n}\n\n#projects h4{\n  display: none;\n}\n\n#projects:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#about {\n  background-image: url(\"https://farm5.staticflickr.com/4739/27557171039_ea34b5339d_c.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#about:hover{\n  cursor: pointer;\n}\n\n#about h4{\n  display: none;\n}\n\n#about:hover h4{\n  display: block;\n  text-decoration: none;\n  cursor: pointer;\n  color: white;\n}\n\n@media (max-width: 1000px) {\n  #portfolio {\n    background-image: url(\"https://farm1.staticflickr.com/676/33054739500_01d2114928_o.jpg\");\n    background-size: contain;\n    background-size: cover;\n  }\n\n  #projects{\n    background-image: url(\"https://farm5.staticflickr.com/4662/40364450351_86722bbb83_o.jpg\");\n    background-size: contain;\n    background-size: cover;\n  }\n\n  #about {\n    background-image: url(\"https://farm5.staticflickr.com/4720/40364584201_4ac19eb073_o.jpg\");\n    background-size: contain;\n    background-size: cover;\n  }\n}\n\n.vertical-heading {\n  color: white;\n  width: 300px;\n  margin-top: 200px;\n\ttransform: rotate(-90deg);\n\ttransform-origin: left top 0;\n}\n\n.inner-head {\n  margin-left: 15px;\n}\n\n#selected-subheader{\n  color: white;\n}\n\n\n\n\n#colorado{\n  background-image: url(\"https://farm4.staticflickr.com/3783/32596289134_a8170a0599_b.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#colorado:hover{\n  cursor: pointer;\n}\n\n#colorado h4{\n  display: none;\n}\n\n#colorado:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#moab {\n  background-image: url(\"https://farm4.staticflickr.com/3682/33282346992_f5a617c0fa_b.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#moab:hover {\n  cursor: pointer;\n}\n\n#moab h4 {\n  display: none;\n}\n\n#moab:hover h4 {\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#bolivia {\n  background-image: url(\"https://farm4.staticflickr.com/3927/33346407706_6e14df7860_k.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#bolivia:hover{\n  cursor: pointer;\n}\n\n#bolivia h4{\n  display: none;\n}\n\n#bolivia:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#peru {\n  background-image: url(\"https://farm4.staticflickr.com/3891/33425599956_2cea2b9cf5_k.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#peru:hover {\n  cursor: pointer;\n}\n\n#peru h4 {\n  display: none;\n}\n\n#peru:hover h4 {\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#jackson {\n  background-image: url(\"https://farm5.staticflickr.com/4593/27564430749_1bb7a6ba6b_k.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#jackson:hover{\n  cursor: pointer;\n}\n\n#jackson h4{\n  display: none;\n}\n\n#jackson:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#experiment {\n  background-image: url(\"https://farm4.staticflickr.com/3776/33309988071_ee97912bd1_k.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#experiment:hover{\n  cursor: pointer;\n}\n\n#experiment h4{\n  display: none;\n}\n\n#experiment:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#nashville {\n  background-image: url(\"https://farm5.staticflickr.com/4633/27556726429_12c9e11327_c.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#nashville:hover{\n  cursor: pointer;\n}\n\n#nashville h4{\n  display: none;\n}\n\n#nashville:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#deloache {\n  background-image: url(\"https://farm5.staticflickr.com/4641/25503804958_23eeaf2d9d_k.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#deloache:hover{\n  cursor: pointer;\n}\n\n#deloache h4{\n  display: none;\n}\n\n#deloache:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#columbia {\n  background-image: url(\"https://farm1.staticflickr.com/826/39995050460_6bc4d5068d_k.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#columbia:hover{\n  cursor: pointer;\n}\n\n#columbia h4{\n  display: none;\n}\n\n#columbia:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n\n\n\n\n.title-modal {\n    position: absolute;\n    height: 0;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0, 0.7);\n    overflow-x: hidden;\n    transition: 0.5s;\n}\n\n.title-modal-content {\n    width: 100%;\n}\n\n.title-modal a {\n\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.title-modal a:hover, .title-modal a:focus {\n    color: #f1f1f1;\n}\n\n.title-modal .closebtn {\n    top: 20px;\n    right: 45px;\n    font-size: 60px;\n}\n\n@media screen and (max-height: 450px) {\n  .title-modal a {font-size: 20px}\n  .title-modal .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n\n.spanNav {\n  font-size:30px;\n  cursor:pointer;\n  color: white;\n  padding-top: 100px;\n  margin-bottom: 100px;\n}\n\n.spanNav-mobile {\n  font-size:40px;\n  cursor:pointer;\n  color: white;\n  margin-top: 20px;\n}\n\n\n\n\n#concertify{\n  background-image: url(\"https://farm5.staticflickr.com/4598/24471598817_d4786b4b21_c.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#concertify:hover{\n  cursor: pointer;\n}\n\n#concertify h4{\n  display: none;\n}\n\n#concertify:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#solitaire {\n  background-image: url(\"https://farm5.staticflickr.com/4646/24489394737_14f40a5186_b.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#solitaire:hover{\n  cursor: pointer;\n}\n\n#solitaire h4{\n  display: none;\n}\n\n#solitaire:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#blackstar {\n  background-image: url(\"https://farm5.staticflickr.com/4597/38655689454_4dc1a6b3ef_b.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#blackstar:hover{\n  cursor: pointer;\n}\n\n#blackstar h4{\n  display: none;\n}\n\n#blackstar:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#vUtensils {\n  background-image: url(\"https://farm5.staticflickr.com/4589/39353275271_b1747b3cb8_b.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#vUtensils:hover{\n  cursor: pointer;\n}\n\n#vUtensils h4{\n  display: none;\n}\n\n#vUtensils:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#facePay {\n  background-image: url(\"https://farm5.staticflickr.com/4639/39353381641_415788f103_b.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#facePay:hover{\n  cursor: pointer;\n}\n\n#facePay h4{\n  display: none;\n}\n\n#facePay:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#vmil {\n  background-image: url(\"https://farm5.staticflickr.com/4693/39325003812_a1f92042aa_h.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#vmil:hover{\n  cursor: pointer;\n}\n\n#vmil h4{\n  display: none;\n}\n\n#vmil:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n#accenture {\n  background-image: url(\"https://farm1.staticflickr.com/828/39994937410_26d490d340_b.jpg\");\n  background-size: contain;\n  background-size: cover;\n}\n\n#accenture:hover{\n  cursor: pointer;\n}\n\n#accenture h4{\n  display: none;\n}\n\n#accenture:hover h4{\n  display: block;\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n}\n\n\n\n.photo-container{\n  width: 100%;\n  max-width: 100% !important;\n  overflow-x: hidden !important;\n  margin:0px;\n}\n\n.subheader-nav{\n  height: 75%;\n  padding-left: 50px;\n}\n\n.gallery-container{\n  padding-top: 20px;\n  height: 520px;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  padding-right: 0px;\n}\n\n.project-container{\n  padding-top: 20px;\n  height: 550px;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n\n@media only screen and (max-width: 600px)  {\n  .container-fluid {\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n  }\n\n  .gallery-container{\n    padding-top: 20px;\n    height: 670px;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    -webkit-overflow-scrolling: touch;\n    padding-right: 0px;\n    padding-left: 0px !important;\n  }\n\n  .project-container{\n    padding-top: 20px;\n    height: 680px;\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    width: 104%;\n  }\n\n  .inner-proj-container{\n    padding: 0px !important;\n  }\n}\n\n.subheader-nav a{\n  color: inherit;\n  text-decoration: none;\n}\n\n.subheader-nav a:hover{\n  color: white;\n  text-decoration: none;\n}\n\n.deloache-gallery-img{\n  width: 100%;\n  height: auto;\n}\n\n.box-gallery-img{\n  object-fit: cover;\n  object-fit: contain;\n  padding: 0px;\n  overflow: hidden;\n}\n\n.box-image-container{\n  height: 200px;\n  overflow: hidden;\n  margin-bottom: 15px\n}\n\n.concertify-banner{\n\n}\n\n.banner-img{\n  width: 100%;\n  height: auto;\n  border-radius: 25px;\n}\n\n.banner-img-link{\n  width: 100%;\n  height: auto;\n  border: solid 2px black;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.banner-img-link-2{\n  width: 100%;\n  height: auto;\n  border: solid 2px black;\n  top: 55%;\n  transform: translateY(-25%);\n}\n\n.project-information{\n  color: white;\n}\n\n.photo-cover-cont{\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: black;\n  opacity: 0;\n  transition: 0.4s;\n}\n\n.photo-cover-cont h4{\n  display: none;\n  color: white;\n  margin-top: 100px;\n}\n\n.photo-cover-cont:hover{\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.photo-cover-cont:hover h4{\n  display: block;\n}\n\n.photo-cover-cont:hover img{\n  display: inline-block;\n  width: 20%;\n  transition: 0.2s;\n}\n\n.photo-cover-cont:hover img:hover{\n  opacity: .5;\n}\n\n.photo-cover-cont img{\n  display: none;\n  width: 20%;\n  margin-top: 100px;\n  margin-left: 30px;\n}\n\n\n\n.photo-cover-cont-mobile{\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: black;\n  opacity: 0;\n  transition: 0.4s;\n}\n\n.photo-cover-cont-mobile h4{\n  display: none;\n  color: white;\n  margin-top: 100px;\n}\n\n.photo-cover-cont-mobile:hover{\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.photo-cover-cont-mobile:hover h4{\n  display: block;\n}\n\n.photo-cover-cont-mobile:hover img{\n  display: inline-block;\n  width: 100%;\n  transition: 0.2s;\n}\n\n.photo-cover-cont-mobile:hover img:hover{\n  opacity: .5;\n}\n\n.photo-cover-cont-mobile img{\n  display: none;\n  width: 100%;\n  margin-top: 100px;\n  margin-left: 30px;\n}\n\n\n\n\n.project-cover-cont{\n  text-align: center;\n  position: absolute;\n  width: 97%;\n  height: 100%;\n  background: black;\n  opacity: 0;\n  transition: 0.4s;\n  border-radius: 25px;\n}\n\n.project-cover-cont h4{\n  display: none;\n  color: white;\n  margin-top: 100px;\n}\n\n.project-cover-cont:hover{\n  opacity: 0.8;\n}\n\n.project-cover-cont:hover h4{\n  display: block;\n}\n\n.project-cover-cont:hover img{\n  display: inline-block;\n  width: 20%;\n  transition: 0.2s;\n}\n\n.project-cover-cont:hover img:hover{\n  opacity: .5;\n  cursor: pointer;\n}\n\n.project-cover-cont img{\n  display: none;\n  width: 20%;\n  margin-top: 100px;\n  margin-left: 30px;\n}\n\n.photo-showcase-container{\n  position: fixed;\n  width: 100%;\n  height:100vh;\n  background: black;\n  opacity: 0;\n  transition: 0.4s;\n}\n\n\n\n\n.gallery-overlay {\n    height: 100%;\n    width: 100%;\n    opacity: 0;\n    position: fixed;\n    z-index: -10;\n    top: 0;\n    left: 0;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0, 0.9);\n    overflow-x: hidden;\n    transition: 0.5s;\n}\n\n.gallery-overlay-content {\n    position: relative;\n    top: 10%;\n    width: 100%;\n    text-align: center;\n    margin-top: 30px;\n}\n\n.gallery-arrow-cont{\n  height: 100%;\n  width: 150px;\n  position: fixed;\n  align: center;\n  text-align: center;\n}\n\n.gallery-arrow{\n  font-size: 90px;\n  position: absolute;\n  color: white;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#left-arrow{\n  position: absolute;\n  left: 0px;\n  top: 0px;\n\n}\n\n#left-arrow:hover{\n  opacity: 0.5;\n}\n\n#left-arrow:hover h1:hover{\n  opacity: 0.5;\n}\n\n#right-arrow{\n    right: 0;\n    top: 0px;\n    position: absolute;\n}\n\n.gallery-overlay a {\n    padding: 8px;\n    text-decoration: none;\n    font-size: 36px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.gallery-overlay a:hover, .gallery-overlay a:focus {\n    color: #f1f1f1;\n}\n\n.gallery-overlay .gallery-closebtn {\n    position: absolute;\n    top: 20px;\n    right: 45px;\n    font-size: 60px;\n}\n\n@media screen and (max-height: 450px) {\n  .gallery-overlay a {font-size: 20px}\n  .gallery-overlay .gallery-closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n\n#personal-photo{\n  background-image: url(\"https://farm1.staticflickr.com/894/27401478708_fa8e7f847e_b.jpg\");\n  background-size: contain;\n  background-size: cover;\n  height: 400px;\n  border-radius: 100%;\n  margin-left: 17px;\n}\n\n#mobile-selection-header{\n  color: white;\n  border-top: solid 1px white;\n  border-bottom: solid 1px white;\n  width:100%;\n  padding-top: 5px;\n  height: 40px;\n  margin-top: 10px;\n  margin-bottom: 1px;\n}\n\n.my-mobile-navbar-container{\n  text-align: center;\n  padding: 0px;\n  width: 100%;\n}\n\n\n.my-mobile-navbar-overlay {\n    margin-top: 50px;\n    height: 0;\n    width: 100%;\n    position: absolute;\n    z-index: 1000;\n    top: 0;\n    left: 0;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0, 0.9);\n    overflow-x: hidden;\n    transition: 0.5s;\n}\n\n\n.my-mobile-navbar-overlay-content {\n    position: relative;\n    top: 1%;\n    width: 100%;\n    text-align: center;\n    margin-top: 5px;\n    border: solid 1px white;\n}\n\n.my-mobile-navbar-overlay a {\n    padding: 8px;\n    text-decoration: none;\n    font-size: 36px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.my-mobile-navbar-overlay a:hover, .my-mobile-navbar-overlay a:focus {\n    color: #f1f1f1;\n}\n\n.my-mobile-navbar-overlay .closebtn {\n    position: absolute;\n    top: 20px;\n    right: 45px;\n    font-size: 60px;\n}\n\n@media screen and (max-height: 450px) {\n  .my-mobile-navbar-overlay a {font-size: 20px}\n  .my-mobile-navbar-overlay .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n\n.downTriangle {\n  font-size:20px;\n  cursor:pointer;\n  color: white;\n  padding-top: 100px;\n  margin-bottom: 100px;\n}\n\n\n\n\n.header-mobile-cont{\n  overflow: hidden;\n}\n\n\n#subheader-mobile-selection-header{\n  color: white;\n  border-top: solid 1px white;\n  border-bottom: solid 1px white;\n  width: 100%;\n  height:50px;\n  padding-top: 15px;\n  margin-top: 0;\n}\n\n.my-mobile-subheader-container{\n  text-align: center;\n  width: 100%;\n}\n\n\n.my-mobile-subheader-overlay {\n    margin-top: 55px;\n    height: 0;\n    width: 100%;\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0, 0.9);\n    overflow-x: hidden;\n    transition: 0.5s;\n}\n\n.my-mobile-subheader-overlay-2 {\n    margin-top: 101px;\n    height: 0;\n    width: 100%;\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0, 0.9);\n    overflow-x: hidden;\n    transition: 0.5s;\n}\n\n.my-mobile-subheader-overlay-content {\n    position: relative;\n    top: 1%;\n    width: 100%;\n    text-align: center;\n    margin-top: 5px;\n}\n\n.my-mobile-subheader-overlay-content a {\n    color: #818181;\n}\n\n.my-mobile-subheader-overlay a {\n    padding: 8px;\n    text-decoration: none;\n    font-size: 36px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.my-mobile-subheader-overlay a:hover, .my-mobile-subheader-overlay a:focus {\n    color: #f1f1f1;\n}\n\n.my-mobile-subheader-overlay .closebtn {\n    position: absolute;\n    top: 20px;\n    right: 45px;\n    font-size: 60px;\n}\n\n@media screen and (max-height: 450px) {\n  .my-mobile-subheader-overlay a {font-size: 20px}\n  .my-mobile-subheader-overlay .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n\n.downTriangle {\n  font-size:20px;\n  cursor:pointer;\n  color: white;\n  padding-top: 100px;\n  margin-bottom: 100px;\n}\n\n.box-gallery-img-mobile{\n  width: 100%;\n\n}\n\n.box-image-container-mobile{\n\n}\n\n.mobile-photo-breaker{\n  color: black;\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\n\n#my-gallery-container{\n  visibility: hidden;\n}\n\n.gallery-overlay-content{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n#galleryBlowup{\n\n}\n\n#blowup-title{\n  color: white\n}\n\n.icon-units{\n  height: 100px;\n  text-align: center;\n}\n\n#about-github-icon img{\n  height: 100%;\n  border-radius: 50px;\n}\n\n#about-github-icon{\n  height: 100px;\n  padding-bottom: 10px;\n}\n\n#about-facebook-icon{\n  margin-top: -20px;\n  height: 100px\n}\n\n#about-linkedin-icon img {\n  height: 80%;\n}\n\n#about-instagram-icon img {\n  height: 80%;\n}\n\n#about-facebook-icon img {\n  height: 100%;\n}\n\n#about-facebook-icon:hover{\n  transition: 0.5s;\n}\n\n#about-github-icon:hover{\n  transition: 0.5s;\n}\n\n#about-linkedin-icon:hover{\n  transition: 0.5s;\n}\n\n#about-instagram-icon:hover{\n  transition: 0.5s;\n}\n\n#about-github-icon:hover{\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n#about-facebook-icon:hover{\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n#about-linkedin-icon:hover{\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n#about-instagram-icon:hover{\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n.about-info{\n  padding-top: 20px;\n  padding-left: 30px;\n  color: white;\n}\n\n.mobile-titleBanner-container{\n  max-width: 100% !important;\n  overflow-x: hidden !important;\n  margin:0px;\n}\n\n#icon-list{\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 254:
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

/***/ 255:
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

var	fixUrls = __webpack_require__(256);

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

/***/ 256:
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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBanner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

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
      if (screen.width > 800) document.getElementById(this.props.nameAlt).style.height = "100%";
    }
  }, {
    key: "closeNav",
    value: function closeNav() {
      document.getElementById(this.props.nameAlt).style.height = "0%";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var subHeads = "";
      if (this.props.subheaders != undefined) {
        subHeads = this.props.subheaders.map(function (subhead, index) {
          return _react2.default.createElement(
            "a",
            { key: index, href: _this2.props.id + "/" + subhead },
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
        headerDescription = this.props.description.map(function (des, index) {
          return _react2.default.createElement(
            "h4",
            { key: index, className: "col-xs-offset-1" },
            des
          );
        });
      }
      var name = this.props.name == 'portfolio' ? 'stills' : this.props.name;
      var new_path = this.props.folder == undefined ? "" + name : this.props.folder + "/" + name;

      var desktopVersion = _react2.default.createElement(
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
                " ",
                headerDescription,
                " "
              )
            )
          )
        )
      );

      var mobileVersion = _react2.default.createElement(
        "a",
        { href: new_path, className: "mobile-titleBanner-container" },
        _react2.default.createElement(
          "div",
          { id: this.props.name, className: "col-lg-4 col-xs-12 landing-divs" },
          _react2.default.createElement("h2", { className: "vertical-heading" }),
          _react2.default.createElement(
            "div",
            { id: this.props.nameAlt },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "h2",
                { className: "vertical-heading inner-head" },
                this.props.name
              )
            )
          )
        )
      );
      var version = window.innerWidth < 1000 ? mobileVersion : desktopVersion;

      return _react2.default.createElement(
        "div",
        null,
        version
      );
    }
  }]);

  return TitleBanner;
}(_react.Component);

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubheaderNav = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

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

    _this.state = { open: false };
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
        "h3",
        { id: "subheader-mobile-selection-header" },
        this.props.selected,
        " ",
        _react2.default.createElement(
          "span",
          { className: "downTriangle" },
          "\u25B4"
        )
      ) : _react2.default.createElement(
        "h3",
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
        null,
        _react2.default.createElement(
          "div",
          { onClick: this.toggleNav, className: "my-mobile-subheader-container" },
          " ",
          mytitle,
          " "
        ),
        _react2.default.createElement(
          "div",
          { id: "subheaderNav", className: "my-mobile-subheader-overlay-2" },
          _react2.default.createElement(
            "div",
            { className: "my-mobile-subheader-overlay-content" },
            " ",
            displayHeadings,
            " "
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

    _this2.state = { screenWidth: 0 };
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

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*************************************************************************/
var SideBarExpand = function SideBarExpand(props) {
  return _react2.default.createElement(
    'div',
    { id: 'myNav', className: 'overlay' },
    _react2.default.createElement(
      'a',
      { href: 'javascript:void(0)', className: 'closebtn', onClick: props.closeNav },
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
};

var DesktopHeader = function DesktopHeader(props) {
  return _react2.default.createElement(
    'div',
    { className: 'outerDiv headerDiv' },
    _react2.default.createElement(SideBarExpand, { closeNav: props.closeNav }),
    _react2.default.createElement(
      'div',
      { onClick: props.openNav },
      _react2.default.createElement(
        'div',
        { className: 'b-logo' },
        _react2.default.createElement(
          'a',
          { href: '/' },
          _react2.default.createElement(
            'h2',
            null,
            ' b '
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
        ' ',
        _react2.default.createElement(
          'h4',
          null,
          'brendan broderick'
        ),
        ' '
      )
    )
  );
};

var MobileHeader = function MobileHeader(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'headerDiv-mobile', scrolling: 'no' },
      _react2.default.createElement(
        'div',
        { className: 'header-mobile-cont' },
        _react2.default.createElement(
          'div',
          { className: 'b-logo-mobile col-xs-10' },
          ' ',
          _react2.default.createElement(
            'a',
            { href: '/' },
            ' ',
            _react2.default.createElement(
              'h4',
              null,
              'brendan broderick.'
            ),
            ' '
          ),
          ' '
        ),
        _react2.default.createElement(
          'span',
          _defineProperty({ className: 'col-xs-2', onClick: props.openNav }, 'className', 'spanNav-mobile '),
          '\u2630'
        )
      )
    ),
    _react2.default.createElement('div', { className: 'shadowDiv-mobile' }),
    _react2.default.createElement(SideBarExpand, { closeNav: props.closeNav })
  );
};

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
  }

  _createClass(Header, [{
    key: 'openNav',
    value: function openNav() {
      document.getElementById("myNav").style.width = "100%";
      document.getElementById("myNav").style.opacity = 1;
    }
  }, {
    key: 'closeNav',
    value: function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }
  }, {
    key: 'render',
    value: function render() {
      if (screen.width > 800 || window.location.href.length - 1 == window.location.origin.length) {
        return _react2.default.createElement(DesktopHeader, { openNav: this.openNav, closeNav: this.closeNav });
      } else {
        return _react2.default.createElement(MobileHeader, { openNav: this.openNav, closeNav: this.closeNav });
      }
    }
  }]);

  return Header;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Header);

/***/ })

},[117]);
//# sourceMappingURL=main.map
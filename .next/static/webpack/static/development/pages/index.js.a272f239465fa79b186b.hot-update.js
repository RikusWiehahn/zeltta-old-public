webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/Container.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/Row.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/Col.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _atoms_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../atoms/Logo */ "./atoms/Logo.js");

var _jsxFileName = "/Users/erikwehahn/dev/zeltta/pages/index.js";







var App = function App(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      backgroundColor: '#000',
      position: 'fixed',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      overflowY: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      height: '500vh',
      overflowY: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.children));
};

var Layout = function Layout(props) {
  var style = props.style,
      children = props.children;
  var InnerDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
    width: '1000px',
    display: 'flex',
    flexDirection: 'row',
    '@media screen and (max-width: 1000px)': {
      width: '100vw',
      flexDirection: 'column'
    }
  }));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      flex: 1,
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'center',
      padding: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InnerDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, children));
};

var CutPathDiv = function CutPathDiv(_ref) {
  var top = _ref.top,
      backgroundColor = _ref.backgroundColor,
      children = _ref.children,
      height = _ref.height;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      height: height ? height : '112vh',
      position: 'relative',
      backgroundColor: backgroundColor ? backgroundColor : '#000',
      top: top ? top : '0vh',
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'center',
      clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0 100%)',
      WebkitClipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0 100%)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, children);
};

var HeroSection = function HeroSection(props) {
  var style = props.style,
      children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      backgroundColor: '#000',
      backgroundImage: 'url(/static/hero-image.jpeg)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      position: 'relative',
      flexDirection: 'column',
      display: 'flex',
      height: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      backgroundColor: 'rgba(10,0,80,0.5)',
      flex: 1,
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading, {
    style: {
      color: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, " Inspired ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), " Technology ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), " Products"))));
};

var FooterSection = function FooterSection(props) {
  var style = props.style,
      children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      backgroundColor: '#000',
      position: 'relative',
      top: '-36vh',
      flexDirection: 'column',
      display: 'flex',
      height: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      backgroundColor: 'rgba(10,0,80,0.5)',
      flex: 1,
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      flex: 1,
      padding: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading, {
    style: {
      color: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, " Contact")))));
};

var Heading = function Heading(_ref2) {
  var children = _ref2.children,
      style = _ref2.style;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 52,
      fontWeight: '800'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, children);
};

var Paragraph = function Paragraph(_ref3) {
  var children = _ref3.children,
      style = _ref3.style;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 14,
      fontWeight: '3'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, children);
};

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeroSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CutPathDiv, {
    top: '-12vh',
    backgroundColor: '#4400ff',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, {
    style: {
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      flex: 1,
      padding: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading, {
    style: {
      color: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Design first"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paragraph, {
    style: {
      color: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Great products always start with an obsessive focus on end users. Excellence thereafter becomes the result of well-structured planning, design, measurement and iteration.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      flex: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/phone.png",
    alt: "stack logo",
    style: {
      height: '80vh',
      width: '50vh',
      minHeight: '320px',
      minWidth: '200px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CutPathDiv, {
    top: '-24vh',
    backgroundColor: '#00ffaa',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      flex: 1,
      padding: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Full Stack"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Choose whichever front-end, hardware and features you want to provide for your users.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      flex: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/stack.svg",
    alt: "stack logo",
    style: {
      height: '40vh',
      width: '40vh',
      minHeight: '300px',
      minWidth: '300px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CutPathDiv, {
    top: '-36vh',
    backgroundColor: '#fff',
    height: '112vh',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      flex: 1,
      padding: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "Integrations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paragraph, {
    style: {
      color: '#000'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "Choose any 3rd party integrations you'd like in order to provide a richer feature set for your users.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      flex: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/integrations.svg",
    alt: "stack logo",
    style: {
      height: '40vh',
      width: '40vh',
      minHeight: '300px',
      minWidth: '300px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a272f239465fa79b186b.hot-update.js.map
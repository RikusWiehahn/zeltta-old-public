webpackHotUpdate("static/development/pages/index.js",{

/***/ "./atoms/Button.js":
/*!*************************!*\
  !*** ./atoms/Button.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
var _jsxFileName = "/Users/erikwehahn/dev/zeltta/atoms/Button.js";



var PageButton = function PageButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    styling: props.styling,
    onClick: props.onClick,
    style: props.style || {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.label || 'Label', props.icon || null);
};

var StyledButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].button(function (_ref) {
  var styling = _ref.styling;
  var stl = styling || {};
  return {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 14,
    fontWeight: '300',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: stl.color || '#fff',
    paddingTop: stl.paddingTop || '10px',
    paddingBottom: stl.paddingBottom || '10px',
    marginTop: stl.marginTop || '2px',
    marginBottom: stl.marginBottom || '2px',
    borderRadius: stl.borderRadius || '7px',
    borderStyle: 'solid',
    borderWidth: '1px',
    textAlign: 'center',
    position: stl.position || 'relative',
    borderColor: stl.borderColor || 'transparent',
    backgroundColor: stl.backgroundColor || '#4400ff',
    paddingLeft: stl.paddingLeft || '18px',
    marginLeft: stl.marginLeft || '5px',
    marginRight: stl.marginRight || '0px',
    paddingRight: stl.paddingRight || '18px',
    WebkitTapHighlightColor: 'transparent',
    userSelect: 'none',
    transition: '350ms',
    WebkitUserSelect: 'none',
    ':focus': {
      outline: 0
    },
    ':hover': {
      backgroundColor: stl.activeBackgroundColor ? stl.activeBackgroundColor : '#000',
      boxShadow: stl.activeShadow || '0px 14px 35px 0px rgba(49, 49, 49, 0.2)',
      borderColor: stl.hoverBorderColor || 'transparent',
      cursor: 'pointer',
      color: stl.hoverColor ? stl.hoverColor : stl.color ? stl.color : '#fff',
      marginTop: stl.marginTop ? "calc(".concat(stl.marginTop || '0px', " - 2px") : '-2px)',
      marginBottom: stl.marginBottom ? "calc(".concat(stl.marginBottom || '0px', " + 2px)") : '2px'
    },
    ':active': {
      backgroundColor: stl.activeBackgroundColor ? stl.activeBackgroundColor : '#000',
      boxShadow: stl.activeShadow || '0px 14px 35px 0px rgba(49, 49, 49, 0.2)',
      borderColor: stl.hoverBorderColor || 'transparent',
      marginTop: stl.marginTop ? "calc(".concat(stl.marginTop || '0px', " - 2px") : '-2px)',
      marginBottom: stl.marginBottom ? "calc(".concat(stl.marginBottom || '0px', " + 2px)") : '2px',
      cursor: 'pointer',
      color: stl.hoverColor ? stl.hoverColor : stl.color ? stl.color : '#fff'
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (PageButton);

/***/ })

})
//# sourceMappingURL=index.js.c051c0f169986aede543.hot-update.js.map
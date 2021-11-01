(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_QuizProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/QuizProvider */ "./providers/QuizProvider.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Cliente\\cursos\\desafios\\quiz_brivia\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_providers_QuizProvider__WEBPACK_IMPORTED_MODULE_1__.QuizProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./providers/QuizProvider.tsx":
/*!************************************!*\
  !*** ./providers/QuizProvider.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizContext": () => (/* binding */ QuizContext),
/* harmony export */   "QuizProvider": () => (/* binding */ QuizProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Cliente\\cursos\\desafios\\quiz_brivia\\providers\\QuizProvider.tsx";


const QuizContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const QuizProvider = props => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: ""
  });
  const {
    0: amountQuestions,
    1: setAmountQuestions
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    value: 0
  });
  const {
    0: rigthQuestions,
    1: setRigthQuestions
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: wrongQuestions,
    1: setWrongQuestions
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(QuizContext.Provider, {
    value: {
      user,
      setUser,
      amountQuestions,
      setAmountQuestions,
      rigthQuestions,
      setRigthQuestions,
      wrongQuestions,
      setWrongQuestions
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBRUEsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQXlDO0FBQ3JDLHNCQUNJO0FBQUEsMkJBQ0ksOERBQUMsaUVBQUQ7QUFBQSw2QkFDSSw4REFBQyxTQUFELG9CQUFnQkEsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQU9DOztBQUVMLGlFQUFlRixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7QUFFTyxNQUFNSyxXQUFXLGdCQUFHRiwwREFBQSxDQUFvQixFQUFwQixDQUFwQjtBQUdBLE1BQU1KLFlBQVksR0FBSVEsS0FBRCxJQUFXO0FBQ25DLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFtQkwsK0NBQVEsQ0FBQztBQUM5Qk0sSUFBQUEsSUFBSSxFQUFFO0FBRHdCLEdBQUQsQ0FBakM7QUFHQSxRQUFNO0FBQUEsT0FBQ0MsZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q1IsK0NBQVEsQ0FBQztBQUNuRFMsSUFBQUEsS0FBSyxFQUFFO0FBRDRDLEdBQUQsQ0FBdEQ7QUFHQSxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ1gsK0NBQVEsQ0FBQyxDQUFELENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUNZLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NiLCtDQUFRLENBQUMsQ0FBRCxDQUFwRDtBQUdBLHNCQUNJLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUN6QkksTUFBQUEsSUFEeUI7QUFFekJDLE1BQUFBLE9BRnlCO0FBR3pCRSxNQUFBQSxlQUh5QjtBQUl6QkMsTUFBQUEsa0JBSnlCO0FBS3pCRSxNQUFBQSxjQUx5QjtBQU16QkMsTUFBQUEsaUJBTnlCO0FBT3pCQyxNQUFBQSxjQVB5QjtBQVF6QkMsTUFBQUE7QUFSeUIsS0FBN0I7QUFBQSxjQVVLVixLQUFLLENBQUNXO0FBVlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBY0gsQ0F6Qk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpel9icml2aWEvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9xdWl6X2JyaXZpYS8uL3Byb3ZpZGVycy9RdWl6UHJvdmlkZXIudHN4Iiwid2VicGFjazovL3F1aXpfYnJpdmlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9xdWl6X2JyaXZpYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgeyBRdWl6UHJvdmlkZXIgfSBmcm9tIFwiLi4vcHJvdmlkZXJzL1F1aXpQcm92aWRlclwiXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD4gXHJcbiAgICAgICAgICAgIDxRdWl6UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsgLi4ucGFnZVByb3BzIH0gLz5cclxuICAgICAgICAgICAgPC9RdWl6UHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKSBcclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBRdWl6Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBRdWl6UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSAgPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2Ftb3VudFF1ZXN0aW9ucywgc2V0QW1vdW50UXVlc3Rpb25zXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB2YWx1ZTogMFxyXG4gICAgfSApO1xyXG4gICAgY29uc3QgW3JpZ3RoUXVlc3Rpb25zLCBzZXRSaWd0aFF1ZXN0aW9uc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt3cm9uZ1F1ZXN0aW9ucywgc2V0V3JvbmdRdWVzdGlvbnNdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFF1aXpDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgICAgIHNldFVzZXIsXHJcbiAgICAgICAgICAgIGFtb3VudFF1ZXN0aW9ucyxcclxuICAgICAgICAgICAgc2V0QW1vdW50UXVlc3Rpb25zLFxyXG4gICAgICAgICAgICByaWd0aFF1ZXN0aW9ucywgXHJcbiAgICAgICAgICAgIHNldFJpZ3RoUXVlc3Rpb25zLFxyXG4gICAgICAgICAgICB3cm9uZ1F1ZXN0aW9ucywgXHJcbiAgICAgICAgICAgIHNldFdyb25nUXVlc3Rpb25zLFxyXG4gICAgICAgICB9fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvUXVpekNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlF1aXpQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlF1aXpDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInByb3BzIiwidXNlciIsInNldFVzZXIiLCJuYW1lIiwiYW1vdW50UXVlc3Rpb25zIiwic2V0QW1vdW50UXVlc3Rpb25zIiwidmFsdWUiLCJyaWd0aFF1ZXN0aW9ucyIsInNldFJpZ3RoUXVlc3Rpb25zIiwid3JvbmdRdWVzdGlvbnMiLCJzZXRXcm9uZ1F1ZXN0aW9ucyIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==
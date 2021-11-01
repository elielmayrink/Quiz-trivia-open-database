"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_FormComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormComponent */ "./components/FormComponent.tsx");
/* harmony import */ var _providers_QuizProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/QuizProvider */ "./providers/QuizProvider.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Cliente\\cursos\\desafios\\quiz_brivia\\pages\\index.tsx",
    _s = $RefreshSig$();







function Home() {
  _s();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_providers_QuizProvider__WEBPACK_IMPORTED_MODULE_4__.QuizContext),
      user = _React$useContext.user,
      setUser = _React$useContext.setUser,
      amountQuestions = _React$useContext.amountQuestions,
      setAmountQuestions = _React$useContext.setAmountQuestions,
      finalQuestions = _React$useContext.finalQuestions;

  var url = "startView";

  var handlerName = function handlerName(e) {
    e.preventDefault();
    setUser({
      name: e.target.value
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (localStorage.getItem("name")) {
      setUser({
        name: localStorage.getItem("name")
      });
    }

    if (localStorage.getItem("amount")) {
      setAmountQuestions({
        value: localStorage.getItem("amount")
      });
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    localStorage.setItem("name", user.name);
  }, [user]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    localStorage.setItem("amount", amountQuestions.value);
  }, [amountQuestions]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("title", {
        children: "Quiz_brivia"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        "http-equiv": "Content-Type",
        content: "text/html; charset=utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: "results/resultQuiz",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        className: "resultBtn",
        children: "Ultimo resultado"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_FormComponent__WEBPACK_IMPORTED_MODULE_3__.default, {
      user: user.name,
      changeName: function changeName(e) {
        return handlerName(e);
      },
      changeAmount: function changeAmount(e) {
        return setAmountQuestions({
          value: +e.target.value
        });
      },
      amount: amountQuestions.value,
      url: url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_s(Home, "EcJFWQreNbQx1eLxf0A0ukQKkbY=");

_c = Home;
{
  /*  */
}

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2U0NTcwYmRkZDJmOGIxNjZhMTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNNLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsMEJBS1VOLHVEQUFBLENBQWlCSyxnRUFBakIsQ0FMVjtBQUFBLE1BQVFHLElBQVIscUJBQVFBLElBQVI7QUFBQSxNQUNRQyxPQURSLHFCQUNRQSxPQURSO0FBQUEsTUFFUUMsZUFGUixxQkFFUUEsZUFGUjtBQUFBLE1BR1FDLGtCQUhSLHFCQUdRQSxrQkFIUjtBQUFBLE1BSVFDLGNBSlIscUJBSVFBLGNBSlI7O0FBTUEsTUFBSUMsR0FBRyxjQUFQOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FQLElBQUFBLE9BQU8sQ0FBQztBQUFDUSxNQUFBQSxJQUFJLEVBQUVGLENBQUMsQ0FBQ0csTUFBRixDQUFTQztBQUFoQixLQUFELENBQVA7QUFDRCxHQUhEOztBQUlBbEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR21CLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFILEVBQWlDO0FBQy9CWixNQUFBQSxPQUFPLENBQUM7QUFBQ1EsUUFBQUEsSUFBSSxFQUFFRyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckI7QUFBUCxPQUFELENBQVA7QUFDRDs7QUFDRCxRQUFHRCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBSCxFQUFtQztBQUNqQ1YsTUFBQUEsa0JBQWtCLENBQUM7QUFBQ1EsUUFBQUEsS0FBSyxFQUFFQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckI7QUFBUixPQUFELENBQWxCO0FBQ0Q7QUFDRixHQVBRLEVBT1AsRUFQTyxDQUFUO0FBUUFwQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZG1CLElBQUFBLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixNQUFyQixFQUE0QmQsSUFBSSxDQUFDUyxJQUFqQztBQUVELEdBSFEsRUFHTixDQUFDVCxJQUFELENBSE0sQ0FBVDtBQUlBUCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZG1CLElBQUFBLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixRQUFyQixFQUErQlosZUFBZSxDQUFDUyxLQUEvQztBQUNELEdBRlEsRUFFUCxDQUFDVCxlQUFELENBRk8sQ0FBVDtBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sc0JBQVcsY0FBakI7QUFBZ0MsZUFBTyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLG9CQUFYO0FBQUEsNkJBRUU7QUFBUSxpQkFBUyxFQUFDLFdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBWUUsOERBQUMsOERBQUQ7QUFDRSxVQUFJLEVBQUVGLElBQUksQ0FBQ1MsSUFEYjtBQUVFLGdCQUFVLEVBQUUsb0JBQUNGLENBQUQ7QUFBQSxlQUFPRCxXQUFXLENBQUNDLENBQUQsQ0FBbEI7QUFBQSxPQUZkO0FBR0Usa0JBQVksRUFBRSxzQkFBQUEsQ0FBQztBQUFBLGVBQUlKLGtCQUFrQixDQUFDO0FBQUNRLFVBQUFBLEtBQUssRUFBRSxDQUFDSixDQUFDLENBQUNHLE1BQUYsQ0FBU0M7QUFBbEIsU0FBRCxDQUF0QjtBQUFBLE9BSGpCO0FBSUUsWUFBTSxFQUFFVCxlQUFlLENBQUNTLEtBSjFCO0FBS0UsU0FBRyxFQUFFTjtBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRDs7R0FsRHVCUDs7S0FBQUE7QUFvRHhCO0FBQUM7QUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBRdWl6Q29udGV4dCB9IGZyb20gXCIuLi9wcm92aWRlcnMvUXVpelByb3ZpZGVyXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgeyB1c2VyLCBcclxuICAgICAgICAgIHNldFVzZXIsIFxyXG4gICAgICAgICAgYW1vdW50UXVlc3Rpb25zLCBcclxuICAgICAgICAgIHNldEFtb3VudFF1ZXN0aW9ucyxcclxuICAgICAgICAgIGZpbmFsUXVlc3Rpb25zLFxyXG4gICAgICAgIH0gPSBSZWFjdC51c2VDb250ZXh0KFF1aXpDb250ZXh0KTtcclxuICBsZXQgdXJsID0gYHN0YXJ0Vmlld2BcclxuICBjb25zdCBoYW5kbGVyTmFtZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldFVzZXIoe25hbWU6IGUudGFyZ2V0LnZhbHVlfSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmFtZVwiKSkge1xyXG4gICAgICBzZXRVc2VyKHtuYW1lOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hbWVcIil9KVxyXG4gICAgfVxyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbW91bnRcIikpIHtcclxuICAgICAgc2V0QW1vdW50UXVlc3Rpb25zKHt2YWx1ZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbW91bnRcIil9KVxyXG4gICAgfVxyXG4gIH0sW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLHVzZXIubmFtZSlcclxuICAgIFxyXG4gIH0sIFt1c2VyXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbW91bnRcIiwgYW1vdW50UXVlc3Rpb25zLnZhbHVlKVxyXG4gIH0sW2Ftb3VudFF1ZXN0aW9uc10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxIZWFkPiBcclxuICAgICAgICA8dGl0bGU+UXVpel9icml2aWE8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TGluayBocmVmPVwicmVzdWx0cy9yZXN1bHRRdWl6XCI+XHJcbiAgICAgIFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVzdWx0QnRuXCI+VWx0aW1vIHJlc3VsdGFkbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8Rm9ybUNvbXBvbmVudCBcclxuICAgICAgICB1c2VyPXt1c2VyLm5hbWV9XHJcbiAgICAgICAgY2hhbmdlTmFtZT17KGUpID0+IGhhbmRsZXJOYW1lKGUpfSBcclxuICAgICAgICBjaGFuZ2VBbW91bnQ9e2UgPT4gc2V0QW1vdW50UXVlc3Rpb25zKHt2YWx1ZTogK2UudGFyZ2V0LnZhbHVlfSl9ICBcclxuICAgICAgICBhbW91bnQ9e2Ftb3VudFF1ZXN0aW9ucy52YWx1ZX0gXHJcbiAgICAgICAgdXJsPXt1cmx9IFxyXG4gICAgICAvPlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuey8qICAqL30iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiTGluayIsIkZvcm1Db21wb25lbnQiLCJRdWl6Q29udGV4dCIsIkhvbWUiLCJ1c2VDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJhbW91bnRRdWVzdGlvbnMiLCJzZXRBbW91bnRRdWVzdGlvbnMiLCJmaW5hbFF1ZXN0aW9ucyIsInVybCIsImhhbmRsZXJOYW1lIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9
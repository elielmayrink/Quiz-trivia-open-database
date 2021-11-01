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
      setAmountQuestions = _React$useContext.setAmountQuestions;

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
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        "http-equiv": "Content-Type",
        content: "text/html; charset=utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: "results/resultQuiz",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        className: "resultBtn",
        children: "Ultimo resultado"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(Home, "HTOfNPrwuBHtAq3lMM9fiDA2LOY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGY1MDcxOGY3NDU0ZGI4YTc0YjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNNLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsMEJBSVVOLHVEQUFBLENBQWlCSyxnRUFBakIsQ0FKVjtBQUFBLE1BQVFHLElBQVIscUJBQVFBLElBQVI7QUFBQSxNQUNRQyxPQURSLHFCQUNRQSxPQURSO0FBQUEsTUFFUUMsZUFGUixxQkFFUUEsZUFGUjtBQUFBLE1BR1FDLGtCQUhSLHFCQUdRQSxrQkFIUjs7QUFLQSxNQUFJQyxHQUFHLGNBQVA7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQU4sSUFBQUEsT0FBTyxDQUFDO0FBQUNPLE1BQUFBLElBQUksRUFBRUYsQ0FBQyxDQUFDRyxNQUFGLENBQVNDO0FBQWhCLEtBQUQsQ0FBUDtBQUNELEdBSEQ7O0FBSUFqQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFHa0IsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQUgsRUFBaUM7QUFDL0JYLE1BQUFBLE9BQU8sQ0FBQztBQUFDTyxRQUFBQSxJQUFJLEVBQUVHLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQjtBQUFQLE9BQUQsQ0FBUDtBQUNEOztBQUNELFFBQUdELFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixDQUFILEVBQW1DO0FBQ2pDVCxNQUFBQSxrQkFBa0IsQ0FBQztBQUFDTyxRQUFBQSxLQUFLLEVBQUVDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQjtBQUFSLE9BQUQsQ0FBbEI7QUFDRDtBQUNGLEdBUFEsRUFPUCxFQVBPLENBQVQ7QUFRQW5CLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNka0IsSUFBQUEsWUFBWSxDQUFDRSxPQUFiLENBQXFCLE1BQXJCLEVBQTRCYixJQUFJLENBQUNRLElBQWpDO0FBRUQsR0FIUSxFQUdOLENBQUNSLElBQUQsQ0FITSxDQUFUO0FBSUFQLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNka0IsSUFBQUEsWUFBWSxDQUFDRSxPQUFiLENBQXFCLFFBQXJCLEVBQStCWCxlQUFlLENBQUNRLEtBQS9DO0FBQ0QsR0FGUSxFQUVQLENBQUNSLGVBQUQsQ0FGTyxDQUFUO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxzQkFBVyxjQUFqQjtBQUFnQyxlQUFPLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBT0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsb0JBQVg7QUFBQSw2QkFFRTtBQUFRLGlCQUFTLEVBQUMsV0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFZRSw4REFBQyw4REFBRDtBQUNFLFVBQUksRUFBRUYsSUFBSSxDQUFDUSxJQURiO0FBRUUsZ0JBQVUsRUFBRSxvQkFBQ0YsQ0FBRDtBQUFBLGVBQU9ELFdBQVcsQ0FBQ0MsQ0FBRCxDQUFsQjtBQUFBLE9BRmQ7QUFHRSxrQkFBWSxFQUFFLHNCQUFBQSxDQUFDO0FBQUEsZUFBSUgsa0JBQWtCLENBQUM7QUFBQ08sVUFBQUEsS0FBSyxFQUFFLENBQUNKLENBQUMsQ0FBQ0csTUFBRixDQUFTQztBQUFsQixTQUFELENBQXRCO0FBQUEsT0FIakI7QUFJRSxZQUFNLEVBQUVSLGVBQWUsQ0FBQ1EsS0FKMUI7QUFLRSxTQUFHLEVBQUVOO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEOztHQWpEdUJOOztLQUFBQTtBQW1EeEI7QUFBQztBQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgRm9ybUNvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFF1aXpDb250ZXh0IH0gZnJvbSBcIi4uL3Byb3ZpZGVycy9RdWl6UHJvdmlkZXJcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCB7IHVzZXIsIFxyXG4gICAgICAgICAgc2V0VXNlciwgXHJcbiAgICAgICAgICBhbW91bnRRdWVzdGlvbnMsIFxyXG4gICAgICAgICAgc2V0QW1vdW50UXVlc3Rpb25zLFxyXG4gICAgICAgIH0gPSBSZWFjdC51c2VDb250ZXh0KFF1aXpDb250ZXh0KTtcclxuICBsZXQgdXJsID0gYHN0YXJ0Vmlld2BcclxuICBjb25zdCBoYW5kbGVyTmFtZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldFVzZXIoe25hbWU6IGUudGFyZ2V0LnZhbHVlfSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmFtZVwiKSkge1xyXG4gICAgICBzZXRVc2VyKHtuYW1lOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hbWVcIil9KVxyXG4gICAgfVxyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbW91bnRcIikpIHtcclxuICAgICAgc2V0QW1vdW50UXVlc3Rpb25zKHt2YWx1ZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbW91bnRcIil9KVxyXG4gICAgfVxyXG4gIH0sW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLHVzZXIubmFtZSlcclxuICAgIFxyXG4gIH0sIFt1c2VyXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbW91bnRcIiwgYW1vdW50UXVlc3Rpb25zLnZhbHVlKVxyXG4gIH0sW2Ftb3VudFF1ZXN0aW9uc10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxIZWFkPiBcclxuICAgICAgICA8dGl0bGU+UXVpel9icml2aWE8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TGluayBocmVmPVwicmVzdWx0cy9yZXN1bHRRdWl6XCI+XHJcbiAgICAgIFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVzdWx0QnRuXCI+VWx0aW1vIHJlc3VsdGFkbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8Rm9ybUNvbXBvbmVudCBcclxuICAgICAgICB1c2VyPXt1c2VyLm5hbWV9XHJcbiAgICAgICAgY2hhbmdlTmFtZT17KGUpID0+IGhhbmRsZXJOYW1lKGUpfSBcclxuICAgICAgICBjaGFuZ2VBbW91bnQ9e2UgPT4gc2V0QW1vdW50UXVlc3Rpb25zKHt2YWx1ZTogK2UudGFyZ2V0LnZhbHVlfSl9ICBcclxuICAgICAgICBhbW91bnQ9e2Ftb3VudFF1ZXN0aW9ucy52YWx1ZX0gXHJcbiAgICAgICAgdXJsPXt1cmx9IFxyXG4gICAgICAvPlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuey8qICAqL30iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiTGluayIsIkZvcm1Db21wb25lbnQiLCJRdWl6Q29udGV4dCIsIkhvbWUiLCJ1c2VDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJhbW91bnRRdWVzdGlvbnMiLCJzZXRBbW91bnRRdWVzdGlvbnMiLCJ1cmwiLCJoYW5kbGVyTmFtZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==
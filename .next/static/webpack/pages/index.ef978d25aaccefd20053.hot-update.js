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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWY5NzhkMjVhYWNjZWZkMjAwNTMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNNLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsMEJBSVVOLHVEQUFBLENBQWlCSyxnRUFBakIsQ0FKVjtBQUFBLE1BQVFHLElBQVIscUJBQVFBLElBQVI7QUFBQSxNQUNRQyxPQURSLHFCQUNRQSxPQURSO0FBQUEsTUFFUUMsZUFGUixxQkFFUUEsZUFGUjtBQUFBLE1BR1FDLGtCQUhSLHFCQUdRQSxrQkFIUjs7QUFLQSxNQUFJQyxHQUFHLGNBQVA7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQU4sSUFBQUEsT0FBTyxDQUFDO0FBQUNPLE1BQUFBLElBQUksRUFBRUYsQ0FBQyxDQUFDRyxNQUFGLENBQVNDO0FBQWhCLEtBQUQsQ0FBUDtBQUNELEdBSEQ7O0FBSUFqQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFHa0IsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQUgsRUFBaUM7QUFDL0JYLE1BQUFBLE9BQU8sQ0FBQztBQUFDTyxRQUFBQSxJQUFJLEVBQUVHLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQjtBQUFQLE9BQUQsQ0FBUDtBQUNEOztBQUNELFFBQUdELFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixDQUFILEVBQW1DO0FBQ2pDVCxNQUFBQSxrQkFBa0IsQ0FBQztBQUFDTyxRQUFBQSxLQUFLLEVBQUVDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQjtBQUFSLE9BQUQsQ0FBbEI7QUFDRDtBQUNGLEdBUFEsRUFPUCxFQVBPLENBQVQ7QUFRQW5CLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNka0IsSUFBQUEsWUFBWSxDQUFDRSxPQUFiLENBQXFCLE1BQXJCLEVBQTRCYixJQUFJLENBQUNRLElBQWpDO0FBRUQsR0FIUSxFQUdOLENBQUNSLElBQUQsQ0FITSxDQUFUO0FBSUFQLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNka0IsSUFBQUEsWUFBWSxDQUFDRSxPQUFiLENBQXFCLFFBQXJCLEVBQStCWCxlQUFlLENBQUNRLEtBQS9DO0FBQ0QsR0FGUSxFQUVQLENBQUNSLGVBQUQsQ0FGTyxDQUFUO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxzQkFBVyxjQUFqQjtBQUFnQyxlQUFPLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBT0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsb0JBQVg7QUFBQSw2QkFFRTtBQUFRLGlCQUFTLEVBQUMsV0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFZRSw4REFBQyw4REFBRDtBQUNFLFVBQUksRUFBRUYsSUFBSSxDQUFDUSxJQURiO0FBRUUsZ0JBQVUsRUFBRSxvQkFBQ0YsQ0FBRDtBQUFBLGVBQU9ELFdBQVcsQ0FBQ0MsQ0FBRCxDQUFsQjtBQUFBLE9BRmQ7QUFHRSxrQkFBWSxFQUFFLHNCQUFBQSxDQUFDO0FBQUEsZUFBSUgsa0JBQWtCLENBQUM7QUFBQ08sVUFBQUEsS0FBSyxFQUFFLENBQUNKLENBQUMsQ0FBQ0csTUFBRixDQUFTQztBQUFsQixTQUFELENBQXRCO0FBQUEsT0FIakI7QUFJRSxZQUFNLEVBQUVSLGVBQWUsQ0FBQ1EsS0FKMUI7QUFLRSxTQUFHLEVBQUVOO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEOztHQWpEdUJOOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBRdWl6Q29udGV4dCB9IGZyb20gXCIuLi9wcm92aWRlcnMvUXVpelByb3ZpZGVyXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgeyB1c2VyLCBcclxuICAgICAgICAgIHNldFVzZXIsIFxyXG4gICAgICAgICAgYW1vdW50UXVlc3Rpb25zLCBcclxuICAgICAgICAgIHNldEFtb3VudFF1ZXN0aW9ucyxcclxuICAgICAgICB9ID0gUmVhY3QudXNlQ29udGV4dChRdWl6Q29udGV4dCk7XHJcbiAgbGV0IHVybCA9IGBzdGFydFZpZXdgXHJcbiAgY29uc3QgaGFuZGxlck5hbWUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRVc2VyKHtuYW1lOiBlLnRhcmdldC52YWx1ZX0pXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hbWVcIikpIHtcclxuICAgICAgc2V0VXNlcih7bmFtZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYW1lXCIpfSlcclxuICAgIH1cclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW1vdW50XCIpKSB7XHJcbiAgICAgIHNldEFtb3VudFF1ZXN0aW9ucyh7dmFsdWU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW1vdW50XCIpfSlcclxuICAgIH1cclxuICB9LFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5hbWVcIix1c2VyLm5hbWUpXHJcbiAgICBcclxuICB9LCBbdXNlcl0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYW1vdW50XCIsIGFtb3VudFF1ZXN0aW9ucy52YWx1ZSlcclxuICB9LFthbW91bnRRdWVzdGlvbnNdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD4gXHJcbiAgICAgICAgPHRpdGxlPlF1aXpfYnJpdmlhPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPExpbmsgaHJlZj1cInJlc3VsdHMvcmVzdWx0UXVpelwiPlxyXG4gICAgICBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlc3VsdEJ0blwiPlVsdGltbyByZXN1bHRhZG88L2J1dHRvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPEZvcm1Db21wb25lbnQgXHJcbiAgICAgICAgdXNlcj17dXNlci5uYW1lfVxyXG4gICAgICAgIGNoYW5nZU5hbWU9eyhlKSA9PiBoYW5kbGVyTmFtZShlKX0gXHJcbiAgICAgICAgY2hhbmdlQW1vdW50PXtlID0+IHNldEFtb3VudFF1ZXN0aW9ucyh7dmFsdWU6ICtlLnRhcmdldC52YWx1ZX0pfSAgXHJcbiAgICAgICAgYW1vdW50PXthbW91bnRRdWVzdGlvbnMudmFsdWV9IFxyXG4gICAgICAgIHVybD17dXJsfSBcclxuICAgICAgLz5cclxuICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiTGluayIsIkZvcm1Db21wb25lbnQiLCJRdWl6Q29udGV4dCIsIkhvbWUiLCJ1c2VDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJhbW91bnRRdWVzdGlvbnMiLCJzZXRBbW91bnRRdWVzdGlvbnMiLCJ1cmwiLCJoYW5kbGVyTmFtZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==
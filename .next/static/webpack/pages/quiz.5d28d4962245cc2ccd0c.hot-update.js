"use strict";
self["webpackHotUpdate_N_E"]("pages/quiz",{

/***/ "./pages/quiz/index.tsx":
/*!******************************!*\
  !*** ./pages/quiz/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Quiz; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AnswerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AnswerComponent */ "./components/AnswerComponent.tsx");
/* harmony import */ var _model_answerModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/answerModel */ "./model/answerModel.ts");
/* harmony import */ var _model_question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/question */ "./model/question.ts");
/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Quiz.module.css */ "./styles/Quiz.module.css");
/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! he */ "./node_modules/he/he.js");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_QuizProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/QuizProvider */ "./providers/QuizProvider.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Cliente\\cursos\\desafios\\quiz_brivia\\pages\\quiz\\index.tsx",
    _s = $RefreshSig$();










function Quiz() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      questions = _useState[0],
      setQuestions = _useState[1];

  var widthContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_providers_QuizProvider__WEBPACK_IMPORTED_MODULE_6__.QuizContext),
      amountQuestions = _React$useContext.amountQuestions,
      setAmountQuestions = _React$useContext.setAmountQuestions,
      rigthQuestions = _React$useContext.rigthQuestions,
      setRigthQuestions = _React$useContext.setRigthQuestions,
      wrongQuestions = _React$useContext.wrongQuestions,
      setWrongQuestions = _React$useContext.setWrongQuestions,
      setFinalQuestions = _React$useContext.setFinalQuestions;

  var url = "https://opentdb.com/api.php?amount=".concat(amountQuestions.value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setAmountQuestions({
      value: +localStorage.getItem("amount")
    });
    setRigthQuestions(0);
    setWrongQuestions(0);
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (result) {
      return setQuestions(result.results.map(function (question) {
        return new _model_question__WEBPACK_IMPORTED_MODULE_4__.default(question.category, question.difficulty, question.incorrect_answers.map(function (answer) {
          return _model_answerModel__WEBPACK_IMPORTED_MODULE_3__.default.incorretdAnswer(he__WEBPACK_IMPORTED_MODULE_5___default().decode(answer));
        }).concat(_model_answerModel__WEBPACK_IMPORTED_MODULE_3__.default.correctdAnswer(he__WEBPACK_IMPORTED_MODULE_5___default().decode(question.correct_answer))).map(function (answer) {
          return {
            answer: answer,
            randomItem: Math.random()
          };
        }).sort(function (ob1, ob2) {
          return ob1.randomItem - ob2.randomItem;
        }).map(function (obj) {
          return obj.answer;
        }), he__WEBPACK_IMPORTED_MODULE_5___default().decode(question.question), question.type);
      }));
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    localStorage.setItem("rigth_questions", rigthQuestions);
    localStorage.setItem("wrong_questions", wrongQuestions);
  }, [wrongQuestions, rigthQuestions]);

  var nextQuestion = function nextQuestion(e, answer, i) {
    e.preventDefault();
    var newQuestions = [];
    var answerIndex = i;

    for (var _i = 0; _i < questions.length; _i++) {
      if (questions[_i].answers[answerIndex] === answer) {
        answer.selected = !answer.selected;
        newQuestions.push(questions[_i]);
      } else {
        newQuestions.push(questions[_i]);
      }
    }

    if (answer.correctd) {
      setRigthQuestions(rigthQuestions + 1);
    } else {
      setWrongQuestions(wrongQuestions + 1);
    }

    setQuestions(newQuestions);
    setFinalQuestions(newQuestions);
    setTimeout(function () {
      if (widthContainer.current.scrollLeft >= widthContainer.current.offsetWidth * (+amountQuestions.value - 1)) {
        router.push("../results/resultQuiz");
      } else {
        widthContainer.current.scrollLeft += widthContainer.current.offsetWidth;
      }
    }, 1200);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: questions.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "await",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "spinner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        ref: widthContainer,
        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_8___default().containerQuiz),
        children: questions.map(function (question) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_8___default().questionQuiz),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_8___default().questionDiv),
              style: {
                marginTop: "100px"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
                children: [" ", question.question, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 19
            }, _this), question.answers.map(function (answer, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_AnswerComponent__WEBPACK_IMPORTED_MODULE_2__.default, {
                next: function next(e) {
                  return nextQuestion(e, answer, index);
                },
                correctd: answer.correctd,
                selected: answer.selected,
                value: answer.value
              }, Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5), false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 25
              }, _this);
            })]
          }, Math.random().toString(36).replace(/[^a-z]+/g, ''), true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 9
  }, this);
}

_s(Quiz, "/saVd9SpGcV9/aXCoz5RpmMZsec=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Quiz;

var _c;

$RefreshReg$(_c, "Quiz");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVpei41ZDI4ZDQ5NjIyNDVjYzJjY2QwYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNXLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0Isa0JBQXVDVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBL0M7QUFBQSxNQUFPVSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLE1BQU1DLGNBQWMsR0FBR1gsNkNBQU0sQ0FBQyxJQUFELENBQTdCO0FBQ0EsTUFBTVksTUFBTSxHQUFHWCxzREFBUyxFQUF4Qjs7QUFDQSwwQkFRVUosdURBQUEsQ0FBaUJVLGdFQUFqQixDQVJWO0FBQUEsTUFDUU8sZUFEUixxQkFDUUEsZUFEUjtBQUFBLE1BRVFDLGtCQUZSLHFCQUVRQSxrQkFGUjtBQUFBLE1BR1FDLGNBSFIscUJBR1FBLGNBSFI7QUFBQSxNQUlRQyxpQkFKUixxQkFJUUEsaUJBSlI7QUFBQSxNQUtRQyxjQUxSLHFCQUtRQSxjQUxSO0FBQUEsTUFNUUMsaUJBTlIscUJBTVFBLGlCQU5SO0FBQUEsTUFPUUMsaUJBUFIscUJBT1FBLGlCQVBSOztBQVNBLE1BQUlDLEdBQUcsZ0RBQXdDUCxlQUFlLENBQUNRLEtBQXhELENBQVA7QUFDQXhCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkaUIsSUFBQUEsa0JBQWtCLENBQUM7QUFBQ08sTUFBQUEsS0FBSyxFQUFFLENBQUNDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQjtBQUFULEtBQUQsQ0FBbEI7QUFDQVAsSUFBQUEsaUJBQWlCLENBQUMsQ0FBRCxDQUFqQjtBQUNBRSxJQUFBQSxpQkFBaUIsQ0FBQyxDQUFELENBQWpCO0FBQ0FNLElBQUFBLEtBQUssQ0FBQ0osR0FBRCxDQUFMLENBQ0dLLElBREgsQ0FDUSxVQUFBQyxRQUFRO0FBQUEs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QUNFLDhEQUFDLGdFQUFEO0FBQ0Usb0JBQUksRUFBRSxjQUFDbEIsQ0FBRDtBQUFBLHlCQUFPRCxZQUFZLENBQUNDLENBQUQsRUFBSWhCLE1BQUosRUFBWWtDLEtBQVosQ0FBbkI7QUFBQSxpQkFEUjtBQUVFLHdCQUFRLEVBQUVsQyxNQUFNLENBQUN5QixRQUZuQjtBQUdFLHdCQUFRLEVBQUV6QixNQUFNLENBQUN1QixRQUhuQjtBQUl3RSxxQkFBSyxFQUFFdkIsTUFBTSxDQUFDZDtBQUp0RixpQkFJT3FCLElBQUksQ0FBQ0MsTUFBTCxHQUFjMkIsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsT0FBM0IsQ0FBbUMsVUFBbkMsRUFBK0MsRUFBL0MsRUFBbURDLE1BQW5ELENBQTBELENBQTFELEVBQTZELENBQTdELENBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQU9ILGFBUkEsQ0FKSDtBQUFBLGFBQTBDOUIsSUFBSSxDQUFDQyxNQUFMLEdBQWMyQixRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxPQUEzQixDQUFtQyxVQUFuQyxFQUErQyxFQUEvQyxDQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBaUJILFNBbEJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQ0g7O0dBOUd1QmhFO1VBR1BQOzs7S0FIT08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEFuc3dlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BbnN3ZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuc3dlcnNNb2RlbCBmcm9tIFwiLi4vLi4vbW9kZWwvYW5zd2VyTW9kZWxcIjtcclxuaW1wb3J0IFF1ZXN0aW9uTW9kZWwgZnJvbSBcIi4uLy4uL21vZGVsL3F1ZXN0aW9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9RdWl6Lm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgaGUgZnJvbSBcImhlXCJcclxuaW1wb3J0IHsgUXVpekNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL1F1aXpQcm92aWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeigpIHtcclxuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdOiBhbnkgPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgd2lkdGhDb250YWluZXIgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBcclxuICAgICAgICAgIGFtb3VudFF1ZXN0aW9ucyxcclxuICAgICAgICAgIHNldEFtb3VudFF1ZXN0aW9ucyxcclxuICAgICAgICAgIHJpZ3RoUXVlc3Rpb25zLCBcclxuICAgICAgICAgIHNldFJpZ3RoUXVlc3Rpb25zLFxyXG4gICAgICAgICAgd3JvbmdRdWVzdGlvbnMsIFxyXG4gICAgICAgICAgc2V0V3JvbmdRdWVzdGlvbnMsXHJcbiAgICAgICAgICBzZXRGaW5hbFF1ZXN0aW9uc1xyXG4gICAgICAgIH0gPSBSZWFjdC51c2VDb250ZXh0KFF1aXpDb250ZXh0KTtcclxuICBsZXQgdXJsID1gaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGkucGhwP2Ftb3VudD0ke2Ftb3VudFF1ZXN0aW9ucy52YWx1ZX1gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgXHJcbiAgICBzZXRBbW91bnRRdWVzdGlvbnMoe3ZhbHVlOiArbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbW91bnRcIil9KTtcclxuICAgIHNldFJpZ3RoUXVlc3Rpb25zKDApO1xyXG4gICAgc2V0V3JvbmdRdWVzdGlvbnMoMCk7XHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICByZXR1cm4gc2V0UXVlc3Rpb25zKHJlc3VsdC5yZXN1bHRzLm1hcChxdWVzdGlvbiA9PiBuZXcgUXVlc3Rpb25Nb2RlbChcclxuICAgICAgICAgIHF1ZXN0aW9uLmNhdGVnb3J5LFxyXG4gICAgICAgICAgcXVlc3Rpb24uZGlmZmljdWx0eSxcclxuICAgICAgICAgIHF1ZXN0aW9uLmluY29ycmVjdF9hbnN3ZXJzXHJcbiAgICAgICAgICAgIC5tYXAoYW5zd2VyID0+IEFuc3dlcnNNb2RlbC5pbmNvcnJldGRBbnN3ZXIoaGUuZGVjb2RlKGFuc3dlcikpKVxyXG4gICAgICAgICAgICAuY29uY2F0KEFuc3dlcnNNb2RlbC5jb3JyZWN0ZEFuc3dlcihoZS5kZWNvZGUocXVlc3Rpb24uY29ycmVjdF9hbnN3ZXIpKSlcclxuICAgICAgICAgICAgLm1hcChhbnN3ZXIgPT4gKHthbnN3ZXIsIHJhbmRvbUl0ZW06IE1hdGgucmFuZG9tKCl9KSlcclxuICAgICAgICAgICAgLnNvcnQoKG9iMSwgb2IyKSA9PiBvYjEucmFuZG9tSXRlbSAtIG9iMi5yYW5kb21JdGVtKVxyXG4gICAgICAgICAgICAubWFwKG9iaiA9PiBvYmouYW5zd2VyKSxcclxuICAgICAgICAgICAgaGUuZGVjb2RlKHF1ZXN0aW9uLnF1ZXN0aW9uKSxcclxuICAgICAgICAgIHF1ZXN0aW9uLnR5cGVcclxuICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgICAgIH0gKTsgICAgICAgIFxyXG4gIH0sW10pXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyaWd0aF9xdWVzdGlvbnNcIiwgcmlndGhRdWVzdGlvbnMpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndyb25nX3F1ZXN0aW9uc1wiLCB3cm9uZ1F1ZXN0aW9ucylcclxuICB9LFt3cm9uZ1F1ZXN0aW9ucywgcmlndGhRdWVzdGlvbnNdKVxyXG5cclxuICBjb25zdCBuZXh0UXVlc3Rpb24gPSAoZSwgYW5zd2VyOiBBbnN3ZXJzTW9kZWwsIGkpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgbGV0IG5ld1F1ZXN0aW9ucyA9IFtdO1xyXG4gICAgXHJcbiAgICBjb25zdCBhbnN3ZXJJbmRleCA9IGk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYocXVlc3Rpb25zW2ldLmFuc3dlcnNbYW5zd2VySW5kZXhdID09PSBhbnN3ZXIpIHtcclxuICAgICAgICBhbnN3ZXIuc2VsZWN0ZWQgPSAhYW5zd2VyLnNlbGVjdGVkXHJcbiAgICAgICAgbmV3UXVlc3Rpb25zLnB1c2gocXVlc3Rpb25zW2ldKVxyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgbmV3UXVlc3Rpb25zLnB1c2gocXVlc3Rpb25zW2ldKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihhbnN3ZXIuY29ycmVjdGQpIHtcclxuICAgICAgc2V0UmlndGhRdWVzdGlvbnMocmlndGhRdWVzdGlvbnMgKyAxKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgc2V0V3JvbmdRdWVzdGlvbnMod3JvbmdRdWVzdGlvbnMgKyAxKVxyXG4gICAgfVxyXG5cclxuICAgIHNldFF1ZXN0aW9ucyhuZXdRdWVzdGlvbnMpXHJcbiAgICBzZXRGaW5hbFF1ZXN0aW9ucyhuZXdRdWVzdGlvbnMpXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmKHdpZHRoQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA+PSB3aWR0aENvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoICogKCthbW91bnRRdWVzdGlvbnMudmFsdWUgLSAxKSkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiLi4vcmVzdWx0cy9yZXN1bHRRdWl6XCIpO1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgd2lkdGhDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ICs9IHdpZHRoQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgICAgfVxyXG4gICAgfSwgMTIwMCkgXHJcbiAgICBcclxuICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAge1xyXG4gICAgICBxdWVzdGlvbnMubGVuZ3RoID09PSAwID8gXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhd2FpdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDogXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IHJlZj17d2lkdGhDb250YWluZXJ9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lclF1aXp9PlxyXG4gICAgICAgICAge3F1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25RdWl6fSBrZXk9e01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnJlcGxhY2UoL1teYS16XSsvZywgJycpfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbkRpdn0gc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMTAwcHhcIix9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+IHtxdWVzdGlvbi5xdWVzdGlvbn0gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5hbnN3ZXJzLm1hcCgoYW5zd2VyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuc3dlckNvbXBvbmVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0PXsoZSkgPT4gbmV4dFF1ZXN0aW9uKGUsIGFuc3dlciwgaW5kZXgpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0ZD17YW5zd2VyLmNvcnJlY3RkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17YW5zd2VyLnNlbGVjdGVkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnJlcGxhY2UoL1teYS16XSsvZywgJycpLnN1YnN0cigwLCA1KX0gdmFsdWU9e2Fuc3dlci52YWx1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApICAgICAgICAgICBcclxuICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJBbnN3ZXJDb21wb25lbnQiLCJBbnN3ZXJzTW9kZWwiLCJRdWVzdGlvbk1vZGVsIiwic3R5bGVzIiwiaGUiLCJRdWl6Q29udGV4dCIsIlF1aXoiLCJxdWVzdGlvbnMiLCJzZXRRdWVzdGlvbnMiLCJ3aWR0aENvbnRhaW5lciIsInJvdXRlciIsInVzZUNvbnRleHQiLCJhbW91bnRRdWVzdGlvbnMiLCJzZXRBbW91bnRRdWVzdGlvbnMiLCJyaWd0aFF1ZXN0aW9ucyIsInNldFJpZ3RoUXVlc3Rpb25zIiwid3JvbmdRdWVzdGlvbnMiLCJzZXRXcm9uZ1F1ZXN0aW9ucyIsInNldEZpbmFsUXVlc3Rpb25zIiwidXJsIiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwicmVzdWx0cyIsIm1hcCIsInF1ZXN0aW9uIiwiY2F0ZWdvcnkiLCJkaWZmaWN1bHR5IiwiaW5jb3JyZWN0X2Fuc3dlcnMiLCJhbnN3ZXIiLCJpbmNvcnJldGRBbnN3ZXIiLCJkZWNvZGUiLCJjb25jYXQiLCJjb3JyZWN0ZEFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwicmFuZG9tSXRlbSIsIk1hdGgiLCJyYW5kb20iLCJzb3J0Iiwib2IxIiwib2IyIiwib2JqIiwidHlwZSIsInNldEl0ZW0iLCJuZXh0UXVlc3Rpb24iLCJlIiwiaSIsInByZXZlbnREZWZhdWx0IiwibmV3UXVlc3Rpb25zIiwiYW5zd2VySW5kZXgiLCJsZW5ndGgiLCJhbnN3ZXJzIiwic2VsZWN0ZWQiLCJwdXNoIiwiY29ycmVjdGQiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJvZmZzZXRXaWR0aCIsImNvbnRhaW5lclF1aXoiLCJxdWVzdGlvblF1aXoiLCJxdWVzdGlvbkRpdiIsIm1hcmdpblRvcCIsImluZGV4IiwidG9TdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyIl0sInNvdXJjZVJvb3QiOiIifQ==
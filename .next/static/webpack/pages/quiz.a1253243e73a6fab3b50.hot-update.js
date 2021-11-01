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
        lineNumber: 89,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
                lineNumber: 98,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
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
                lineNumber: 102,
                columnNumber: 25
              }, _this);
            })]
          }, Math.random().toString(36).replace(/[^a-z]+/g, ''), true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVpei5hMTI1MzI0M2U3M2E2ZmFiM2I1MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNXLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0Isa0JBQXVDVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBL0M7QUFBQSxNQUFPVSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLE1BQU1DLGNBQWMsR0FBR1gsNkNBQU0sQ0FBQyxJQUFELENBQTdCO0FBQ0EsTUFBTVksTUFBTSxHQUFHWCxzREFBUyxFQUF4Qjs7QUFDQSwwQkFRVUosdURBQUEsQ0FBaUJVLGdFQUFqQixDQVJWO0FBQUEsTUFDUU8sZUFEUixxQkFDUUEsZUFEUjtBQUFBLE1BRVFDLGtCQUZSLHFCQUVRQSxrQkFGUjtBQUFBLE1BR1FDLGNBSFIscUJBR1FBLGNBSFI7QUFBQSxNQUlRQyxpQkFKUixxQkFJUUEsaUJBSlI7QUFBQSxNQUtRQyxjQUxSLHFCQUtRQSxjQUxSO0FBQUEsTUFNUUMsaUJBTlIscUJBTVFBLGlCQU5SO0FBQUEsTUFPUUMsaUJBUFIscUJBT1FBLGlCQVBSOztBQVNBLE1BQUlDLEdBQUcsZ0RBQXdDUCxlQUFlLENBQUNRLEtBQXhELENBQVA7QUFDQXhCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkaUIsSUFBQUEsa0JBQWtCLENBQUM7QUFBQ08sTUFBQUEsS0FBSyxFQUFFLENBQUNDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQjtBQUFULEtBQUQsQ0FBbEI7QUFDQVAsSUFBQUEsaUJBQWlCLENBQUMsQ0FBRCxDQUFqQjtBQUNBRSxJQUFBQSxpQkFBaUIsQ0FBQyxDQUFELENBQWpCO0FBQ0FNLElBQUFBLEtBQUssQ0FBQ0osR0FBRCxDQUFMLENBQ0dLLElBREgsQ0FDUSxVQUFBQyxRQUFRO0FBQUEs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LENBQUQ7QUFBQSx5QkFBT0QsWUFBWSxDQUFDQyxDQUFELEVBQUloQixNQUFKLEVBQVlrQyxLQUFaLENBQW5CO0FBQUEsaUJBRFI7QUFFRSx3QkFBUSxFQUFFbEMsTUFBTSxDQUFDeUIsUUFGbkI7QUFHRSx3QkFBUSxFQUFFekIsTUFBTSxDQUFDdUIsUUFIbkI7QUFJd0UscUJBQUssRUFBRXZCLE1BQU0sQ0FBQ2Q7QUFKdEYsaUJBSU9xQixJQUFJLENBQUNDLE1BQUwsR0FBYzJCLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkJDLE9BQTNCLENBQW1DLFVBQW5DLEVBQStDLEVBQS9DLEVBQW1EQyxNQUFuRCxDQUEwRCxDQUExRCxFQUE2RCxDQUE3RCxDQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFPSCxhQVJBLENBSkg7QUFBQSxhQUEwQzlCLElBQUksQ0FBQ0MsTUFBTCxHQUFjMkIsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsT0FBM0IsQ0FBbUMsVUFBbkMsRUFBK0MsRUFBL0MsQ0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQWlCSCxTQWxCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUNIOztHQTdHdUJoRTtVQUdQUDs7O0tBSE9PIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3F1aXovaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBbnN3ZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQW5zd2VyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbnN3ZXJzTW9kZWwgZnJvbSBcIi4uLy4uL21vZGVsL2Fuc3dlck1vZGVsXCI7XHJcbmltcG9ydCBRdWVzdGlvbk1vZGVsIGZyb20gXCIuLi8uLi9tb2RlbC9xdWVzdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUXVpei5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IGhlIGZyb20gXCJoZVwiXHJcbmltcG9ydCB7IFF1aXpDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9RdWl6UHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXooKSB7XHJcbiAgY29uc3QgW3F1ZXN0aW9ucywgc2V0UXVlc3Rpb25zXTogYW55ID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHdpZHRoQ29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgXHJcbiAgICAgICAgICBhbW91bnRRdWVzdGlvbnMsXHJcbiAgICAgICAgICBzZXRBbW91bnRRdWVzdGlvbnMsXHJcbiAgICAgICAgICByaWd0aFF1ZXN0aW9ucywgXHJcbiAgICAgICAgICBzZXRSaWd0aFF1ZXN0aW9ucyxcclxuICAgICAgICAgIHdyb25nUXVlc3Rpb25zLCBcclxuICAgICAgICAgIHNldFdyb25nUXVlc3Rpb25zLFxyXG4gICAgICAgICAgc2V0RmluYWxRdWVzdGlvbnNcclxuICAgICAgICB9ID0gUmVhY3QudXNlQ29udGV4dChRdWl6Q29udGV4dCk7XHJcbiAgbGV0IHVybCA9YGh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9JHthbW91bnRRdWVzdGlvbnMudmFsdWV9YFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IFxyXG4gICAgc2V0QW1vdW50UXVlc3Rpb25zKHt2YWx1ZTogK2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW1vdW50XCIpfSk7XHJcbiAgICBzZXRSaWd0aFF1ZXN0aW9ucygwKTtcclxuICAgIHNldFdyb25nUXVlc3Rpb25zKDApO1xyXG4gICAgZmV0Y2godXJsKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNldFF1ZXN0aW9ucyhyZXN1bHQucmVzdWx0cy5tYXAocXVlc3Rpb24gPT4gbmV3IFF1ZXN0aW9uTW9kZWwoXHJcbiAgICAgICAgICBxdWVzdGlvbi5jYXRlZ29yeSxcclxuICAgICAgICAgIHF1ZXN0aW9uLmRpZmZpY3VsdHksXHJcbiAgICAgICAgICBxdWVzdGlvbi5pbmNvcnJlY3RfYW5zd2Vyc1xyXG4gICAgICAgICAgICAubWFwKGFuc3dlciA9PiBBbnN3ZXJzTW9kZWwuaW5jb3JyZXRkQW5zd2VyKGhlLmRlY29kZShhbnN3ZXIpKSlcclxuICAgICAgICAgICAgLmNvbmNhdChBbnN3ZXJzTW9kZWwuY29ycmVjdGRBbnN3ZXIoaGUuZGVjb2RlKHF1ZXN0aW9uLmNvcnJlY3RfYW5zd2VyKSkpXHJcbiAgICAgICAgICAgIC5tYXAoYW5zd2VyID0+ICh7YW5zd2VyLCByYW5kb21JdGVtOiBNYXRoLnJhbmRvbSgpfSkpXHJcbiAgICAgICAgICAgIC5zb3J0KChvYjEsIG9iMikgPT4gb2IxLnJhbmRvbUl0ZW0gLSBvYjIucmFuZG9tSXRlbSlcclxuICAgICAgICAgICAgLm1hcChvYmogPT4gb2JqLmFuc3dlciksXHJcbiAgICAgICAgICAgIGhlLmRlY29kZShxdWVzdGlvbi5xdWVzdGlvbiksXHJcbiAgICAgICAgICBxdWVzdGlvbi50eXBlXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICB9ICk7ICAgICAgICBcclxuICB9LFtdKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmlndGhfcXVlc3Rpb25zXCIsIHJpZ3RoUXVlc3Rpb25zKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3cm9uZ19xdWVzdGlvbnNcIiwgd3JvbmdRdWVzdGlvbnMpXHJcbiAgfSxbd3JvbmdRdWVzdGlvbnMsIHJpZ3RoUXVlc3Rpb25zXSlcclxuXHJcbiAgY29uc3QgbmV4dFF1ZXN0aW9uID0gKGUsIGFuc3dlcjogQW5zd2Vyc01vZGVsLCBpKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGxldCBuZXdRdWVzdGlvbnMgPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3QgYW5zd2VySW5kZXggPSBpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaTwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmKHF1ZXN0aW9uc1tpXS5hbnN3ZXJzW2Fuc3dlckluZGV4XSA9PT0gYW5zd2VyKSB7XHJcbiAgICAgICAgYW5zd2VyLnNlbGVjdGVkID0gIWFuc3dlci5zZWxlY3RlZFxyXG4gICAgICAgIG5ld1F1ZXN0aW9ucy5wdXNoKHF1ZXN0aW9uc1tpXSlcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIG5ld1F1ZXN0aW9ucy5wdXNoKHF1ZXN0aW9uc1tpXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoYW5zd2VyLmNvcnJlY3RkKSB7XHJcbiAgICAgIHNldFJpZ3RoUXVlc3Rpb25zKHJpZ3RoUXVlc3Rpb25zICsgMSk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHNldFdyb25nUXVlc3Rpb25zKHdyb25nUXVlc3Rpb25zICsgMSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRRdWVzdGlvbnMobmV3UXVlc3Rpb25zKVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZih3aWR0aENvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPj0gd2lkdGhDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCAqICgrYW1vdW50UXVlc3Rpb25zLnZhbHVlIC0gMSkpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi4uL3Jlc3VsdHMvcmVzdWx0UXVpelwiKTtcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIHdpZHRoQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCArPSB3aWR0aENvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgIH1cclxuICAgIH0sIDEyMDApIFxyXG4gICAgXHJcbiAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgIHtcclxuICAgICAgcXVlc3Rpb25zLmxlbmd0aCA9PT0gMCA/IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXdhaXRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICA6IFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiByZWY9e3dpZHRoQ29udGFpbmVyfSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJRdWl6fT5cclxuICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uUXVpen0ga2V5PXtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25EaXZ9IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjEwMHB4XCIsfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPiB7cXVlc3Rpb24ucXVlc3Rpb259IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uYW5zd2Vycy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJDb21wb25lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dD17KGUpID0+IG5leHRRdWVzdGlvbihlLCBhbnN3ZXIsIGluZGV4KX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdGQ9e2Fuc3dlci5jb3JyZWN0ZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2Fuc3dlci5zZWxlY3RlZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgNSl9IHZhbHVlPXthbnN3ZXIudmFsdWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSAgICAgICAgICAgXHJcbiAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlUm91dGVyIiwiQW5zd2VyQ29tcG9uZW50IiwiQW5zd2Vyc01vZGVsIiwiUXVlc3Rpb25Nb2RlbCIsInN0eWxlcyIsImhlIiwiUXVpekNvbnRleHQiLCJRdWl6IiwicXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zIiwid2lkdGhDb250YWluZXIiLCJyb3V0ZXIiLCJ1c2VDb250ZXh0IiwiYW1vdW50UXVlc3Rpb25zIiwic2V0QW1vdW50UXVlc3Rpb25zIiwicmlndGhRdWVzdGlvbnMiLCJzZXRSaWd0aFF1ZXN0aW9ucyIsIndyb25nUXVlc3Rpb25zIiwic2V0V3JvbmdRdWVzdGlvbnMiLCJzZXRGaW5hbFF1ZXN0aW9ucyIsInVybCIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsInJlc3VsdHMiLCJtYXAiLCJxdWVzdGlvbiIsImNhdGVnb3J5IiwiZGlmZmljdWx0eSIsImluY29ycmVjdF9hbnN3ZXJzIiwiYW5zd2VyIiwiaW5jb3JyZXRkQW5zd2VyIiwiZGVjb2RlIiwiY29uY2F0IiwiY29ycmVjdGRBbnN3ZXIiLCJjb3JyZWN0X2Fuc3dlciIsInJhbmRvbUl0ZW0iLCJNYXRoIiwicmFuZG9tIiwic29ydCIsIm9iMSIsIm9iMiIsIm9iaiIsInR5cGUiLCJzZXRJdGVtIiwibmV4dFF1ZXN0aW9uIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1F1ZXN0aW9ucyIsImFuc3dlckluZGV4IiwibGVuZ3RoIiwiYW5zd2VycyIsInNlbGVjdGVkIiwicHVzaCIsImNvcnJlY3RkIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJjb250YWluZXJRdWl6IiwicXVlc3Rpb25RdWl6IiwicXVlc3Rpb25EaXYiLCJtYXJnaW5Ub3AiLCJpbmRleCIsInRvU3RyaW5nIiwicmVwbGFjZSIsInN1YnN0ciJdLCJzb3VyY2VSb290IjoiIn0=
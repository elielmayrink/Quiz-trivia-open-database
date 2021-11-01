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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AnswerComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AnswerComponent */ "./components/AnswerComponent.tsx");
/* harmony import */ var _model_answerModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/answerModel */ "./model/answerModel.ts");
/* harmony import */ var _model_question__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/question */ "./model/question.ts");
/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/Quiz.module.css */ "./styles/Quiz.module.css");
/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! he */ "./node_modules/he/he.js");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _providers_QuizProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/QuizProvider */ "./providers/QuizProvider.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
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
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_providers_QuizProvider__WEBPACK_IMPORTED_MODULE_7__.QuizContext),
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
        return new _model_question__WEBPACK_IMPORTED_MODULE_5__.default(question.category, question.difficulty, question.incorrect_answers.map(function (answer) {
          return _model_answerModel__WEBPACK_IMPORTED_MODULE_4__.default.incorretdAnswer(he__WEBPACK_IMPORTED_MODULE_6___default().decode(answer));
        }).concat(_model_answerModel__WEBPACK_IMPORTED_MODULE_4__.default.correctdAnswer(he__WEBPACK_IMPORTED_MODULE_6___default().decode(question.correct_answer))).map(function (answer) {
          return {
            answer: answer,
            randomItem: Math.random()
          };
        }).sort(function (ob1, ob2) {
          return ob1.randomItem - ob2.randomItem;
        }).map(function (obj) {
          return obj.answer;
        }), he__WEBPACK_IMPORTED_MODULE_6___default().decode(question.question), question.type);
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
        // widthContainer.current.scrollLeft = 0
        router.push("../results/resultQuiz");
      } else {
        widthContainer.current.scrollLeft += widthContainer.current.offsetWidth;
      }
    }, 1200);
  };

  console.log(questions, "ca estamos");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("title", {
        children: "Quiz_brivia"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meta", {
        "http-equiv": "Content-Type",
        content: "text/html; charset=utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this), questions.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "await",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "spinner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        ref: widthContainer,
        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_9___default().containerQuiz),
        children: questions.map(function (question) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_9___default().questionQuiz),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_9___default().questionDiv),
              style: {
                marginTop: "100px"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h2", {
                lang: "en",
                children: [" ", question.question, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 19
            }, _this), question.answers.map(function (answer, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_AnswerComponent__WEBPACK_IMPORTED_MODULE_3__.default, {
                next: function next(e) {
                  return nextQuestion(e, answer, index);
                },
                correctd: answer.correctd,
                selected: answer.selected,
                value: answer.value
              }, Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5), false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 25
              }, _this);
            })]
          }, Math.random().toString(36).replace(/[^a-z]+/g, ''), true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 9
  }, this);
}

_s(Quiz, "/saVd9SpGcV9/aXCoz5RpmMZsec=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVpei4zMGRiZjMzOTQ2MGEyMjhmODZlZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTWSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLGtCQUF1Q1YsK0NBQVEsQ0FBQyxFQUFELENBQS9DO0FBQUEsTUFBT1csU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxNQUFNQyxjQUFjLEdBQUdaLDZDQUFNLENBQUMsSUFBRCxDQUE3QjtBQUNBLE1BQU1hLE1BQU0sR0FBR1gsc0RBQVMsRUFBeEI7O0FBQ0EsMEJBUVVMLHVEQUFBLENBQWlCVyxnRUFBakIsQ0FSVjtBQUFBLE1BQ1FPLGVBRFIscUJBQ1FBLGVBRFI7QUFBQSxNQUVRQyxrQkFGUixxQkFFUUEsa0JBRlI7QUFBQSxNQUdRQyxjQUhSLHFCQUdRQSxjQUhSO0FBQUEsTUFJUUMsaUJBSlIscUJBSVFBLGlCQUpSO0FBQUEsTUFLUUMsY0FMUixxQkFLUUEsY0FMUjtBQUFBLE1BTVFDLGlCQU5SLHFCQU1RQSxpQkFOUjtBQUFBLE1BT1FDLGlCQVBSLHFCQU9RQSxpQkFQUjs7QUFTQSxNQUFJQyxHQUFHLGdEQUF3Q1AsZUFBZSxDQUFDUSxLQUF4RCxDQUFQO0FBQ0F6QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZGtCLElBQUFBLGtCQUFrQixDQUFDO0FBQUNPLE1BQUFBLEtBQUssRUFBRSxDQUFDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckI7QUFBVCxLQUFELENBQWxCO0FBQ0FQLElBQUFBLGlCQUFpQixDQUFDLENBQUQsQ0FBakI7QUFDQUUsSUFBQUEsaUJBQWlCLENBQUMsQ0FBRCxDQUFqQjtBQUNBTSxJQUFBQSxLQUFLLENBQUNKLEdBQUQsQ0FBTCxDQUNHSyxJQURILENBQ1EsVUFBQUMsUUFB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMENIOztHQXhIdUJsRTtVQUdQUDs7O0tBSE9PIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3F1aXovaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEFuc3dlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BbnN3ZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuc3dlcnNNb2RlbCBmcm9tIFwiLi4vLi4vbW9kZWwvYW5zd2VyTW9kZWxcIjtcclxuaW1wb3J0IFF1ZXN0aW9uTW9kZWwgZnJvbSBcIi4uLy4uL21vZGVsL3F1ZXN0aW9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9RdWl6Lm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgaGUgZnJvbSBcImhlXCJcclxuaW1wb3J0IHsgUXVpekNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL1F1aXpQcm92aWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeigpIHtcclxuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdOiBhbnkgPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgd2lkdGhDb250YWluZXIgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBcclxuICAgICAgICAgIGFtb3VudFF1ZXN0aW9ucyxcclxuICAgICAgICAgIHNldEFtb3VudFF1ZXN0aW9ucyxcclxuICAgICAgICAgIHJpZ3RoUXVlc3Rpb25zLCBcclxuICAgICAgICAgIHNldFJpZ3RoUXVlc3Rpb25zLFxyXG4gICAgICAgICAgd3JvbmdRdWVzdGlvbnMsIFxyXG4gICAgICAgICAgc2V0V3JvbmdRdWVzdGlvbnMsXHJcbiAgICAgICAgICBzZXRGaW5hbFF1ZXN0aW9uc1xyXG4gICAgICAgIH0gPSBSZWFjdC51c2VDb250ZXh0KFF1aXpDb250ZXh0KTtcclxuICBsZXQgdXJsID1gaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGkucGhwP2Ftb3VudD0ke2Ftb3VudFF1ZXN0aW9ucy52YWx1ZX1gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgXHJcbiAgICBzZXRBbW91bnRRdWVzdGlvbnMoe3ZhbHVlOiArbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbW91bnRcIil9KTtcclxuICAgIHNldFJpZ3RoUXVlc3Rpb25zKDApO1xyXG4gICAgc2V0V3JvbmdRdWVzdGlvbnMoMCk7XHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICByZXR1cm4gc2V0UXVlc3Rpb25zKHJlc3VsdC5yZXN1bHRzLm1hcChxdWVzdGlvbiA9PiBuZXcgUXVlc3Rpb25Nb2RlbChcclxuICAgICAgICAgIHF1ZXN0aW9uLmNhdGVnb3J5LFxyXG4gICAgICAgICAgcXVlc3Rpb24uZGlmZmljdWx0eSxcclxuICAgICAgICAgIHF1ZXN0aW9uLmluY29ycmVjdF9hbnN3ZXJzXHJcbiAgICAgICAgICAgIC5tYXAoYW5zd2VyID0+IEFuc3dlcnNNb2RlbC5pbmNvcnJldGRBbnN3ZXIoaGUuZGVjb2RlKGFuc3dlcikpKVxyXG4gICAgICAgICAgICAuY29uY2F0KEFuc3dlcnNNb2RlbC5jb3JyZWN0ZEFuc3dlcihoZS5kZWNvZGUocXVlc3Rpb24uY29ycmVjdF9hbnN3ZXIpKSlcclxuICAgICAgICAgICAgLm1hcChhbnN3ZXIgPT4gKHthbnN3ZXIsIHJhbmRvbUl0ZW06IE1hdGgucmFuZG9tKCl9KSlcclxuICAgICAgICAgICAgLnNvcnQoKG9iMSwgb2IyKSA9PiBvYjEucmFuZG9tSXRlbSAtIG9iMi5yYW5kb21JdGVtKVxyXG4gICAgICAgICAgICAubWFwKG9iaiA9PiBvYmouYW5zd2VyKSxcclxuICAgICAgICAgICAgaGUuZGVjb2RlKHF1ZXN0aW9uLnF1ZXN0aW9uKSxcclxuICAgICAgICAgIHF1ZXN0aW9uLnR5cGVcclxuICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgICAgIH0gKTsgICAgICAgIFxyXG4gIH0sW10pXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyaWd0aF9xdWVzdGlvbnNcIiwgcmlndGhRdWVzdGlvbnMpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndyb25nX3F1ZXN0aW9uc1wiLCB3cm9uZ1F1ZXN0aW9ucylcclxuICB9LFt3cm9uZ1F1ZXN0aW9ucywgcmlndGhRdWVzdGlvbnNdKVxyXG5cclxuICBjb25zdCBuZXh0UXVlc3Rpb24gPSAoZSwgYW5zd2VyOiBBbnN3ZXJzTW9kZWwsIGkpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgbGV0IG5ld1F1ZXN0aW9ucyA9IFtdO1xyXG4gICAgXHJcbiAgICBjb25zdCBhbnN3ZXJJbmRleCA9IGk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYocXVlc3Rpb25zW2ldLmFuc3dlcnNbYW5zd2VySW5kZXhdID09PSBhbnN3ZXIpIHtcclxuICAgICAgICBhbnN3ZXIuc2VsZWN0ZWQgPSAhYW5zd2VyLnNlbGVjdGVkXHJcbiAgICAgICAgbmV3UXVlc3Rpb25zLnB1c2gocXVlc3Rpb25zW2ldKVxyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgbmV3UXVlc3Rpb25zLnB1c2gocXVlc3Rpb25zW2ldKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihhbnN3ZXIuY29ycmVjdGQpIHtcclxuICAgICAgc2V0UmlndGhRdWVzdGlvbnMocmlndGhRdWVzdGlvbnMgKyAxKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgc2V0V3JvbmdRdWVzdGlvbnMod3JvbmdRdWVzdGlvbnMgKyAxKVxyXG4gICAgfVxyXG5cclxuICAgIHNldFF1ZXN0aW9ucyhuZXdRdWVzdGlvbnMpXHJcbiAgICBzZXRGaW5hbFF1ZXN0aW9ucyhuZXdRdWVzdGlvbnMpXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmKHdpZHRoQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA+PSB3aWR0aENvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoICogKCthbW91bnRRdWVzdGlvbnMudmFsdWUgLSAxKSkge1xyXG4gICAgICAgIC8vIHdpZHRoQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IDBcclxuICAgICAgICByb3V0ZXIucHVzaChcIi4uL3Jlc3VsdHMvcmVzdWx0UXVpelwiKTtcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIHdpZHRoQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCArPSB3aWR0aENvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgIH1cclxuICAgIH0sIDEyMDApIFxyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnNvbGUubG9nKHF1ZXN0aW9ucyxcImNhIGVzdGFtb3NcIilcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD4gXHJcbiAgICAgICAgPHRpdGxlPlF1aXpfYnJpdmlhPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAge3F1ZXN0aW9ucy5sZW5ndGggPT09IDAgPyBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF3YWl0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgOiBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgcmVmPXt3aWR0aENvbnRhaW5lcn0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyUXVpen0+XHJcbiAgICAgICAgICB7cXVlc3Rpb25zLm1hcCgocXVlc3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvblF1aXp9IGtleT17TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikucmVwbGFjZSgvW15hLXpdKy9nLCAnJyl9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uRGl2fSBzdHlsZT17e21hcmdpblRvcDogXCIxMDBweFwiLH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBsYW5nPVwiZW5cIj4ge3F1ZXN0aW9uLnF1ZXN0aW9ufSA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmFuc3dlcnMubWFwKChhbnN3ZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5zd2VyQ29tcG9uZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ9eyhlKSA9PiBuZXh0UXVlc3Rpb24oZSwgYW5zd2VyLCBpbmRleCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3RkPXthbnN3ZXIuY29ycmVjdGR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXthbnN3ZXIuc2VsZWN0ZWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikucmVwbGFjZSgvW15hLXpdKy9nLCAnJykuc3Vic3RyKDAsIDUpfSB2YWx1ZT17YW5zd2VyLnZhbHVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJIZWFkIiwidXNlUm91dGVyIiwiQW5zd2VyQ29tcG9uZW50IiwiQW5zd2Vyc01vZGVsIiwiUXVlc3Rpb25Nb2RlbCIsInN0eWxlcyIsImhlIiwiUXVpekNvbnRleHQiLCJRdWl6IiwicXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zIiwid2lkdGhDb250YWluZXIiLCJyb3V0ZXIiLCJ1c2VDb250ZXh0IiwiYW1vdW50UXVlc3Rpb25zIiwic2V0QW1vdW50UXVlc3Rpb25zIiwicmlndGhRdWVzdGlvbnMiLCJzZXRSaWd0aFF1ZXN0aW9ucyIsIndyb25nUXVlc3Rpb25zIiwic2V0V3JvbmdRdWVzdGlvbnMiLCJzZXRGaW5hbFF1ZXN0aW9ucyIsInVybCIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsInJlc3VsdHMiLCJtYXAiLCJxdWVzdGlvbiIsImNhdGVnb3J5IiwiZGlmZmljdWx0eSIsImluY29ycmVjdF9hbnN3ZXJzIiwiYW5zd2VyIiwiaW5jb3JyZXRkQW5zd2VyIiwiZGVjb2RlIiwiY29uY2F0IiwiY29ycmVjdGRBbnN3ZXIiLCJjb3JyZWN0X2Fuc3dlciIsInJhbmRvbUl0ZW0iLCJNYXRoIiwicmFuZG9tIiwic29ydCIsIm9iMSIsIm9iMiIsIm9iaiIsInR5cGUiLCJzZXRJdGVtIiwibmV4dFF1ZXN0aW9uIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1F1ZXN0aW9ucyIsImFuc3dlckluZGV4IiwibGVuZ3RoIiwiYW5zd2VycyIsInNlbGVjdGVkIiwicHVzaCIsImNvcnJlY3RkIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyUXVpeiIsInF1ZXN0aW9uUXVpeiIsInF1ZXN0aW9uRGl2IiwibWFyZ2luVG9wIiwiaW5kZXgiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJzdWJzdHIiXSwic291cmNlUm9vdCI6IiJ9
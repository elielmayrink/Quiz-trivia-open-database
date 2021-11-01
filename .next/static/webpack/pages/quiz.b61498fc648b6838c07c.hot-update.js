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
        router.push("../results/resultQuiz");
      } else {
        widthContainer.current.scrollLeft += widthContainer.current.offsetWidth;
      }
    }, 1200);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("title", {
        children: "Quiz_brivia"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meta", {
        "http-equiv": "Content-Type",
        content: "text/html; charset=utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this), questions.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "await",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "spinner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
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
                lineNumber: 107,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
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
                lineNumber: 111,
                columnNumber: 25
              }, _this);
            })]
          }, Math.random().toString(36).replace(/[^a-z]+/g, ''), true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVpei5iNjE0OThmYzY0OGI2ODM4YzA3Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTWSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLGtCQUF1Q1YsK0NBQVEsQ0FBQyxFQUFELENBQS9DO0FBQUEsTUFBT1csU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxNQUFNQyxjQUFjLEdBQUdaLDZDQUFNLENBQUMsSUFBRCxDQUE3QjtBQUNBLE1BQU1hLE1BQU0sR0FBR1gsc0RBQVMsRUFBeEI7O0FBQ0EsMEJBUVVMLHVEQUFBLENBQWlCVyxnRUFBakIsQ0FSVjtBQUFBLE1BQ1FPLGVBRFIscUJBQ1FBLGVBRFI7QUFBQSxNQUVRQyxrQkFGUixxQkFFUUEsa0JBRlI7QUFBQSxNQUdRQyxjQUhSLHFCQUdRQSxjQUhSO0FBQUEsTUFJUUMsaUJBSlIscUJBSVFBLGlCQUpSO0FBQUEsTUFLUUMsY0FMUixxQkFLUUEsY0FMUjtBQUFBLE1BTVFDLGlCQU5SLHFCQU1RQSxpQkFOUjtBQUFBLE1BT1FDLGlCQVBSLHFCQU9RQSxpQkFQUjs7QUFTQSxNQUFJQyxHQUFHLGdEQUF3Q1AsZUFBZSxDQUFDUSxLQUF4RCxDQUFQO0FBQ0F6QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZGtCLElBQUFBLGtCQUFrQixDQUFDO0FBQUNPLE1BQUFBLEtBQUssRUFBRSxDQUFDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckI7QUFBVCxLQUFELENBQWxCO0FBQ0FQLElBQUFBLGlCQUFpQixDQUFDLENBQUQsQ0FBakI7QUFDQUUsSUFBQUEsaUJBQWlCLENBQUMsQ0FBRCxDQUFqQjtBQUNBTSxJQUFBQSxLQUFLLENBQUNKLEdBQUQsQ0FBTCxDQUNHSyxJQURILENBQ1EsVUFBQUMsUUFB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QUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBDSDs7R0FySHVCaEU7VUFHUFA7OztLQUhPTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWl6L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBbnN3ZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQW5zd2VyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbnN3ZXJzTW9kZWwgZnJvbSBcIi4uLy4uL21vZGVsL2Fuc3dlck1vZGVsXCI7XHJcbmltcG9ydCBRdWVzdGlvbk1vZGVsIGZyb20gXCIuLi8uLi9tb2RlbC9xdWVzdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUXVpei5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IGhlIGZyb20gXCJoZVwiXHJcbmltcG9ydCB7IFF1aXpDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9RdWl6UHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXooKSB7XHJcbiAgY29uc3QgW3F1ZXN0aW9ucywgc2V0UXVlc3Rpb25zXTogYW55ID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHdpZHRoQ29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgXHJcbiAgICAgICAgICBhbW91bnRRdWVzdGlvbnMsXHJcbiAgICAgICAgICBzZXRBbW91bnRRdWVzdGlvbnMsXHJcbiAgICAgICAgICByaWd0aFF1ZXN0aW9ucywgXHJcbiAgICAgICAgICBzZXRSaWd0aFF1ZXN0aW9ucyxcclxuICAgICAgICAgIHdyb25nUXVlc3Rpb25zLCBcclxuICAgICAgICAgIHNldFdyb25nUXVlc3Rpb25zLFxyXG4gICAgICAgICAgc2V0RmluYWxRdWVzdGlvbnNcclxuICAgICAgICB9ID0gUmVhY3QudXNlQ29udGV4dChRdWl6Q29udGV4dCk7XHJcbiAgbGV0IHVybCA9YGh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9JHthbW91bnRRdWVzdGlvbnMudmFsdWV9YFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IFxyXG4gICAgc2V0QW1vdW50UXVlc3Rpb25zKHt2YWx1ZTogK2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW1vdW50XCIpfSk7XHJcbiAgICBzZXRSaWd0aFF1ZXN0aW9ucygwKTtcclxuICAgIHNldFdyb25nUXVlc3Rpb25zKDApO1xyXG4gICAgZmV0Y2godXJsKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNldFF1ZXN0aW9ucyhyZXN1bHQucmVzdWx0cy5tYXAocXVlc3Rpb24gPT4gbmV3IFF1ZXN0aW9uTW9kZWwoXHJcbiAgICAgICAgICBxdWVzdGlvbi5jYXRlZ29yeSxcclxuICAgICAgICAgIHF1ZXN0aW9uLmRpZmZpY3VsdHksXHJcbiAgICAgICAgICBxdWVzdGlvbi5pbmNvcnJlY3RfYW5zd2Vyc1xyXG4gICAgICAgICAgICAubWFwKGFuc3dlciA9PiBBbnN3ZXJzTW9kZWwuaW5jb3JyZXRkQW5zd2VyKGhlLmRlY29kZShhbnN3ZXIpKSlcclxuICAgICAgICAgICAgLmNvbmNhdChBbnN3ZXJzTW9kZWwuY29ycmVjdGRBbnN3ZXIoaGUuZGVjb2RlKHF1ZXN0aW9uLmNvcnJlY3RfYW5zd2VyKSkpXHJcbiAgICAgICAgICAgIC5tYXAoYW5zd2VyID0+ICh7YW5zd2VyLCByYW5kb21JdGVtOiBNYXRoLnJhbmRvbSgpfSkpXHJcbiAgICAgICAgICAgIC5zb3J0KChvYjEsIG9iMikgPT4gb2IxLnJhbmRvbUl0ZW0gLSBvYjIucmFuZG9tSXRlbSlcclxuICAgICAgICAgICAgLm1hcChvYmogPT4gb2JqLmFuc3dlciksXHJcbiAgICAgICAgICAgIGhlLmRlY29kZShxdWVzdGlvbi5xdWVzdGlvbiksXHJcbiAgICAgICAgICBxdWVzdGlvbi50eXBlXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICB9ICk7ICAgICAgICBcclxuICB9LFtdKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmlndGhfcXVlc3Rpb25zXCIsIHJpZ3RoUXVlc3Rpb25zKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3cm9uZ19xdWVzdGlvbnNcIiwgd3JvbmdRdWVzdGlvbnMpXHJcbiAgfSxbd3JvbmdRdWVzdGlvbnMsIHJpZ3RoUXVlc3Rpb25zXSlcclxuXHJcbiAgY29uc3QgbmV4dFF1ZXN0aW9uID0gKGUsIGFuc3dlcjogQW5zd2Vyc01vZGVsLCBpKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGxldCBuZXdRdWVzdGlvbnMgPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3QgYW5zd2VySW5kZXggPSBpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaTwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmKHF1ZXN0aW9uc1tpXS5hbnN3ZXJzW2Fuc3dlckluZGV4XSA9PT0gYW5zd2VyKSB7XHJcbiAgICAgICAgYW5zd2VyLnNlbGVjdGVkID0gIWFuc3dlci5zZWxlY3RlZFxyXG4gICAgICAgIG5ld1F1ZXN0aW9ucy5wdXNoKHF1ZXN0aW9uc1tpXSlcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIG5ld1F1ZXN0aW9ucy5wdXNoKHF1ZXN0aW9uc1tpXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoYW5zd2VyLmNvcnJlY3RkKSB7XHJcbiAgICAgIHNldFJpZ3RoUXVlc3Rpb25zKHJpZ3RoUXVlc3Rpb25zICsgMSk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHNldFdyb25nUXVlc3Rpb25zKHdyb25nUXVlc3Rpb25zICsgMSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRRdWVzdGlvbnMobmV3UXVlc3Rpb25zKVxyXG4gICAgc2V0RmluYWxRdWVzdGlvbnMobmV3UXVlc3Rpb25zKVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZih3aWR0aENvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPj0gd2lkdGhDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCAqICgrYW1vdW50UXVlc3Rpb25zLnZhbHVlIC0gMSkpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi4uL3Jlc3VsdHMvcmVzdWx0UXVpelwiKTtcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIHdpZHRoQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCArPSB3aWR0aENvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgIH1cclxuICAgIH0sIDEyMDApIFxyXG4gICAgXHJcbiAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPiBcclxuICAgICAgICA8dGl0bGU+UXVpel9icml2aWE8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7cXVlc3Rpb25zLmxlbmd0aCA9PT0gMCA/IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXdhaXRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICA6IFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiByZWY9e3dpZHRoQ29udGFpbmVyfSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJRdWl6fT5cclxuICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uUXVpen0ga2V5PXtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25EaXZ9IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjEwMHB4XCIsfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGxhbmc9XCJlblwiPiB7cXVlc3Rpb24ucXVlc3Rpb259IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uYW5zd2Vycy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJDb21wb25lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dD17KGUpID0+IG5leHRRdWVzdGlvbihlLCBhbnN3ZXIsIGluZGV4KX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdGQ9e2Fuc3dlci5jb3JyZWN0ZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2Fuc3dlci5zZWxlY3RlZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgNSl9IHZhbHVlPXthbnN3ZXIudmFsdWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJBbnN3ZXJDb21wb25lbnQiLCJBbnN3ZXJzTW9kZWwiLCJRdWVzdGlvbk1vZGVsIiwic3R5bGVzIiwiaGUiLCJRdWl6Q29udGV4dCIsIlF1aXoiLCJxdWVzdGlvbnMiLCJzZXRRdWVzdGlvbnMiLCJ3aWR0aENvbnRhaW5lciIsInJvdXRlciIsInVzZUNvbnRleHQiLCJhbW91bnRRdWVzdGlvbnMiLCJzZXRBbW91bnRRdWVzdGlvbnMiLCJyaWd0aFF1ZXN0aW9ucyIsInNldFJpZ3RoUXVlc3Rpb25zIiwid3JvbmdRdWVzdGlvbnMiLCJzZXRXcm9uZ1F1ZXN0aW9ucyIsInNldEZpbmFsUXVlc3Rpb25zIiwidXJsIiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwicmVzdWx0cyIsIm1hcCIsInF1ZXN0aW9uIiwiY2F0ZWdvcnkiLCJkaWZmaWN1bHR5IiwiaW5jb3JyZWN0X2Fuc3dlcnMiLCJhbnN3ZXIiLCJpbmNvcnJldGRBbnN3ZXIiLCJkZWNvZGUiLCJjb25jYXQiLCJjb3JyZWN0ZEFuc3dlciIsImNvcnJlY3RfYW5zd2VyIiwicmFuZG9tSXRlbSIsIk1hdGgiLCJyYW5kb20iLCJzb3J0Iiwib2IxIiwib2IyIiwib2JqIiwidHlwZSIsInNldEl0ZW0iLCJuZXh0UXVlc3Rpb24iLCJlIiwiaSIsInByZXZlbnREZWZhdWx0IiwibmV3UXVlc3Rpb25zIiwiYW5zd2VySW5kZXgiLCJsZW5ndGgiLCJhbnN3ZXJzIiwic2VsZWN0ZWQiLCJwdXNoIiwiY29ycmVjdGQiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJvZmZzZXRXaWR0aCIsImNvbnRhaW5lclF1aXoiLCJxdWVzdGlvblF1aXoiLCJxdWVzdGlvbkRpdiIsIm1hcmdpblRvcCIsImluZGV4IiwidG9TdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyIl0sInNvdXJjZVJvb3QiOiIifQ==
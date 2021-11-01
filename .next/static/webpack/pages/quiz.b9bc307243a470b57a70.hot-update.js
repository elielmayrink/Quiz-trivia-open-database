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
    lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVpei5iOWJjMzA3MjQzYTQ3MGI1N2E3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNXLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0Isa0JBQXVDVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBL0M7QUFBQSxNQUFPVSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLE1BQU1DLGNBQWMsR0FBR1gsNkNBQU0sQ0FBQyxJQUFELENBQTdCO0FBQ0EsTUFBTVksTUFBTSxHQUFHWCxzREFBUyxFQUF4Qjs7QUFDQSwwQkFRVUosdURBQUEsQ0FBaUJVLGdFQUFqQixDQVJWO0FBQUEsTUFDUU8sZUFEUixxQkFDUUEsZUFEUjtBQUFBLE1BRVFDLGtCQUZSLHFCQUVRQSxrQkFGUjtBQUFBLE1BR1FDLGNBSFIscUJBR1FBLGNBSFI7QUFBQSxNQUlRQyxpQkFKUixxQkFJUUEsaUJBSlI7QUFBQSxNQUtRQyxjQUxSLHFCQUtRQSxjQUxSO0FBQUEsTUFNUUMsaUJBTlIscUJBTVFBLGlCQU5SO0FBQUEsTUFPUUMsaUJBUFIscUJBT1FBLGlCQVBSOztBQVNBLE1BQUlDLEdBQUcsZ0RBQXdDUCxlQUFlLENBQUNRLEtBQXhELENBQVA7QUFDQXhCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkaUIsSUFBQUEsa0JBQWtCLENBQUM7QUFBQ08sTUFBQUEsS0FBSyxFQUFFLENBQUNDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQjtBQUFULEtBQUQsQ0FBbEI7QUFDQVAsSUFBQUEsaUJBQWlCLENBQUMsQ0FBRCxDQUFqQjtBQUNBRSxJQUFBQSxpQkFBaUIsQ0FBQyxDQUFELENBQWpCO0FBQ0FNLElBQUFBLEtBQUssQ0FBQ0osR0FBRCxDQUFMLENBQ0dLLElBREgsQ0FDUSxVQUFBQyxRQUFRO0FBQUEs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QUNFLDhEQUFDLGdFQUFEO0FBQ0Usb0JBQUksRUFBRSxjQUFDbEIsQ0FBRDtBQUFBLHlCQUFPRCxZQUFZLENBQUNDLENBQUQsRUFBSWhCLE1BQUosRUFBWWtDLEtBQVosQ0FBbkI7QUFBQSxpQkFEUjtBQUVFLHdCQUFRLEVBQUVsQyxNQUFNLENBQUN5QixRQUZuQjtBQUdFLHdCQUFRLEVBQUV6QixNQUFNLENBQUN1QixRQUhuQjtBQUl3RSxxQkFBSyxFQUFFdkIsTUFBTSxDQUFDZDtBQUp0RixpQkFJT3FCLElBQUksQ0FBQ0MsTUFBTCxHQUFjMkIsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsT0FBM0IsQ0FBbUMsVUFBbkMsRUFBK0MsRUFBL0MsRUFBbURDLE1BQW5ELENBQTBELENBQTFELEVBQTZELENBQTdELENBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQU9ILGFBUkEsQ0FKSDtBQUFBLGFBQTBDOUIsSUFBSSxDQUFDQyxNQUFMLEdBQWMyQixRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxPQUEzQixDQUFtQyxVQUFuQyxFQUErQyxFQUEvQyxDQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBa0JILFNBbkJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQ0g7O0dBN0d1QmhFO1VBR1BQOzs7S0FIT08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQW5zd2VyQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Fuc3dlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5zd2Vyc01vZGVsIGZyb20gXCIuLi8uLi9tb2RlbC9hbnN3ZXJNb2RlbFwiO1xyXG5pbXBvcnQgUXVlc3Rpb25Nb2RlbCBmcm9tIFwiLi4vLi4vbW9kZWwvcXVlc3Rpb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1F1aXoubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBoZSBmcm9tIFwiaGVcIlxyXG5pbXBvcnQgeyBRdWl6Q29udGV4dCB9IGZyb20gXCIuLi8uLi9wcm92aWRlcnMvUXVpelByb3ZpZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6KCkge1xyXG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc106IGFueSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCB3aWR0aENvbnRhaW5lciA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IFxyXG4gICAgICAgICAgYW1vdW50UXVlc3Rpb25zLFxyXG4gICAgICAgICAgc2V0QW1vdW50UXVlc3Rpb25zLFxyXG4gICAgICAgICAgcmlndGhRdWVzdGlvbnMsIFxyXG4gICAgICAgICAgc2V0UmlndGhRdWVzdGlvbnMsXHJcbiAgICAgICAgICB3cm9uZ1F1ZXN0aW9ucywgXHJcbiAgICAgICAgICBzZXRXcm9uZ1F1ZXN0aW9ucyxcclxuICAgICAgICAgIHNldEZpbmFsUXVlc3Rpb25zXHJcbiAgICAgICAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUXVpekNvbnRleHQpO1xyXG4gIGxldCB1cmwgPWBodHRwczovL29wZW50ZGIuY29tL2FwaS5waHA/YW1vdW50PSR7YW1vdW50UXVlc3Rpb25zLnZhbHVlfWBcclxuICB1c2VFZmZlY3QoKCkgPT4geyBcclxuICAgIHNldEFtb3VudFF1ZXN0aW9ucyh7dmFsdWU6ICtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFtb3VudFwiKX0pO1xyXG4gICAgc2V0UmlndGhRdWVzdGlvbnMoMCk7XHJcbiAgICBzZXRXcm9uZ1F1ZXN0aW9ucygwKTtcclxuICAgIGZldGNoKHVybClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIHJldHVybiBzZXRRdWVzdGlvbnMocmVzdWx0LnJlc3VsdHMubWFwKHF1ZXN0aW9uID0+IG5ldyBRdWVzdGlvbk1vZGVsKFxyXG4gICAgICAgICAgcXVlc3Rpb24uY2F0ZWdvcnksXHJcbiAgICAgICAgICBxdWVzdGlvbi5kaWZmaWN1bHR5LFxyXG4gICAgICAgICAgcXVlc3Rpb24uaW5jb3JyZWN0X2Fuc3dlcnNcclxuICAgICAgICAgICAgLm1hcChhbnN3ZXIgPT4gQW5zd2Vyc01vZGVsLmluY29ycmV0ZEFuc3dlcihoZS5kZWNvZGUoYW5zd2VyKSkpXHJcbiAgICAgICAgICAgIC5jb25jYXQoQW5zd2Vyc01vZGVsLmNvcnJlY3RkQW5zd2VyKGhlLmRlY29kZShxdWVzdGlvbi5jb3JyZWN0X2Fuc3dlcikpKVxyXG4gICAgICAgICAgICAubWFwKGFuc3dlciA9PiAoe2Fuc3dlciwgcmFuZG9tSXRlbTogTWF0aC5yYW5kb20oKX0pKVxyXG4gICAgICAgICAgICAuc29ydCgob2IxLCBvYjIpID0+IG9iMS5yYW5kb21JdGVtIC0gb2IyLnJhbmRvbUl0ZW0pXHJcbiAgICAgICAgICAgIC5tYXAob2JqID0+IG9iai5hbnN3ZXIpLFxyXG4gICAgICAgICAgICBoZS5kZWNvZGUocXVlc3Rpb24ucXVlc3Rpb24pLFxyXG4gICAgICAgICAgcXVlc3Rpb24udHlwZVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgfSApOyAgICAgICAgXHJcbiAgfSxbXSlcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJpZ3RoX3F1ZXN0aW9uc1wiLCByaWd0aFF1ZXN0aW9ucylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid3JvbmdfcXVlc3Rpb25zXCIsIHdyb25nUXVlc3Rpb25zKVxyXG4gIH0sW3dyb25nUXVlc3Rpb25zLCByaWd0aFF1ZXN0aW9uc10pXHJcblxyXG4gIGNvbnN0IG5leHRRdWVzdGlvbiA9IChlLCBhbnN3ZXI6IEFuc3dlcnNNb2RlbCwgaSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBsZXQgbmV3UXVlc3Rpb25zID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0IGFuc3dlckluZGV4ID0gaTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGk8IHF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZihxdWVzdGlvbnNbaV0uYW5zd2Vyc1thbnN3ZXJJbmRleF0gPT09IGFuc3dlcikge1xyXG4gICAgICAgIGFuc3dlci5zZWxlY3RlZCA9ICFhbnN3ZXIuc2VsZWN0ZWRcclxuICAgICAgICBuZXdRdWVzdGlvbnMucHVzaChxdWVzdGlvbnNbaV0pXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBuZXdRdWVzdGlvbnMucHVzaChxdWVzdGlvbnNbaV0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKGFuc3dlci5jb3JyZWN0ZCkge1xyXG4gICAgICBzZXRSaWd0aFF1ZXN0aW9ucyhyaWd0aFF1ZXN0aW9ucyArIDEpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBzZXRXcm9uZ1F1ZXN0aW9ucyh3cm9uZ1F1ZXN0aW9ucyArIDEpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UXVlc3Rpb25zKG5ld1F1ZXN0aW9ucylcclxuICAgIHNldEZpbmFsUXVlc3Rpb25zKG5ld1F1ZXN0aW9ucylcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYod2lkdGhDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID49IHdpZHRoQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGggKiAoK2Ftb3VudFF1ZXN0aW9ucy52YWx1ZSAtIDEpKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIuLi9yZXN1bHRzL3Jlc3VsdFF1aXpcIik7XHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICB3aWR0aENvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgKz0gd2lkdGhDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgICB9XHJcbiAgICB9LCAxMjAwKSBcclxuICAgIFxyXG4gIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICB7cXVlc3Rpb25zLmxlbmd0aCA9PT0gMCA/IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXdhaXRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICA6IFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiByZWY9e3dpZHRoQ29udGFpbmVyfSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJRdWl6fT5cclxuICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uUXVpen0ga2V5PXtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25EaXZ9IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjEwMHB4XCIsfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPiB7cXVlc3Rpb24ucXVlc3Rpb259IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uYW5zd2Vycy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJDb21wb25lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dD17KGUpID0+IG5leHRRdWVzdGlvbihlLCBhbnN3ZXIsIGluZGV4KX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdGQ9e2Fuc3dlci5jb3JyZWN0ZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2Fuc3dlci5zZWxlY3RlZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgNSl9IHZhbHVlPXthbnN3ZXIudmFsdWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZVJvdXRlciIsIkFuc3dlckNvbXBvbmVudCIsIkFuc3dlcnNNb2RlbCIsIlF1ZXN0aW9uTW9kZWwiLCJzdHlsZXMiLCJoZSIsIlF1aXpDb250ZXh0IiwiUXVpeiIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsIndpZHRoQ29udGFpbmVyIiwicm91dGVyIiwidXNlQ29udGV4dCIsImFtb3VudFF1ZXN0aW9ucyIsInNldEFtb3VudFF1ZXN0aW9ucyIsInJpZ3RoUXVlc3Rpb25zIiwic2V0UmlndGhRdWVzdGlvbnMiLCJ3cm9uZ1F1ZXN0aW9ucyIsInNldFdyb25nUXVlc3Rpb25zIiwic2V0RmluYWxRdWVzdGlvbnMiLCJ1cmwiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJyZXN1bHRzIiwibWFwIiwicXVlc3Rpb24iLCJjYXRlZ29yeSIsImRpZmZpY3VsdHkiLCJpbmNvcnJlY3RfYW5zd2VycyIsImFuc3dlciIsImluY29ycmV0ZEFuc3dlciIsImRlY29kZSIsImNvbmNhdCIsImNvcnJlY3RkQW5zd2VyIiwiY29ycmVjdF9hbnN3ZXIiLCJyYW5kb21JdGVtIiwiTWF0aCIsInJhbmRvbSIsInNvcnQiLCJvYjEiLCJvYjIiLCJvYmoiLCJ0eXBlIiwic2V0SXRlbSIsIm5leHRRdWVzdGlvbiIsImUiLCJpIiwicHJldmVudERlZmF1bHQiLCJuZXdRdWVzdGlvbnMiLCJhbnN3ZXJJbmRleCIsImxlbmd0aCIsImFuc3dlcnMiLCJzZWxlY3RlZCIsInB1c2giLCJjb3JyZWN0ZCIsInNldFRpbWVvdXQiLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsIm9mZnNldFdpZHRoIiwiY29udGFpbmVyUXVpeiIsInF1ZXN0aW9uUXVpeiIsInF1ZXN0aW9uRGl2IiwibWFyZ2luVG9wIiwiaW5kZXgiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJzdWJzdHIiXSwic291cmNlUm9vdCI6IiJ9
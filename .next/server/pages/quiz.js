(() => {
var exports = {};
exports.id = "pages/quiz";
exports.ids = ["pages/quiz"];
exports.modules = {

/***/ "./components/AnswerComponent.tsx":
/*!****************************************!*\
  !*** ./components/AnswerComponent.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnswerComponent)
/* harmony export */ });
/* harmony import */ var _styles_AnswerComponent_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/AnswerComponent.module.css */ "./styles/AnswerComponent.module.css");
/* harmony import */ var _styles_AnswerComponent_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_AnswerComponent_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Cliente\\cursos\\desafios\\quiz_brivia\\components\\AnswerComponent.tsx";


function AnswerComponent(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    onClick: props.next,
    className: props.correctd && props.selected ? (_styles_AnswerComponent_module_css__WEBPACK_IMPORTED_MODULE_1___default().correct) : !props.correctd && props.selected ? (_styles_AnswerComponent_module_css__WEBPACK_IMPORTED_MODULE_1___default().incorrected) : (_styles_AnswerComponent_module_css__WEBPACK_IMPORTED_MODULE_1___default().answerComponent),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: props.value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./model/answerModel.ts":
/*!******************************!*\
  !*** ./model/answerModel.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnswersModel)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _value = /*#__PURE__*/new WeakMap();

var _correctd = /*#__PURE__*/new WeakMap();

class AnswersModel {
  constructor(value, correctd, selected = false) {
    _value.set(this, {
      writable: true,
      value: void 0
    });

    _correctd.set(this, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "selected", void 0);

    _classPrivateFieldSet(this, _value, value);

    _classPrivateFieldSet(this, _correctd, correctd);

    this.selected = selected;
  }

  static correctdAnswer(value) {
    return new AnswersModel(value, true);
  }

  static incorretdAnswer(value) {
    return new AnswersModel(value, false);
  }

  reveal() {
    return new AnswersModel(_classPrivateFieldGet(this, _value), _classPrivateFieldGet(this, _correctd), true);
  }

  get value() {
    return _classPrivateFieldGet(this, _value);
  }

  get correctd() {
    return _classPrivateFieldGet(this, _correctd);
  }

}

/***/ }),

/***/ "./model/question.ts":
/*!***************************!*\
  !*** ./model/question.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuestionModel)
/* harmony export */ });
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _category = /*#__PURE__*/new WeakMap();

var _difficulty = /*#__PURE__*/new WeakMap();

var _answers = /*#__PURE__*/new WeakMap();

var _question = /*#__PURE__*/new WeakMap();

var _type = /*#__PURE__*/new WeakMap();

class QuestionModel {
  constructor(category, difficulty, answers, question, type) {
    _category.set(this, {
      writable: true,
      value: void 0
    });

    _difficulty.set(this, {
      writable: true,
      value: void 0
    });

    _answers.set(this, {
      writable: true,
      value: void 0
    });

    _question.set(this, {
      writable: true,
      value: void 0
    });

    _type.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _category, category);

    _classPrivateFieldSet(this, _difficulty, difficulty);

    _classPrivateFieldSet(this, _answers, answers);

    _classPrivateFieldSet(this, _question, question);

    _classPrivateFieldSet(this, _type, type);
  }

  get category() {
    return _classPrivateFieldGet(this, _category);
  }

  get difficulty() {
    return _classPrivateFieldGet(this, _difficulty);
  }

  get answers() {
    return _classPrivateFieldGet(this, _answers);
  }

  get question() {
    return _classPrivateFieldGet(this, _question);
  }

  get type() {
    return _classPrivateFieldGet(this, _type);
  }

}

/***/ }),

/***/ "./pages/quiz/index.tsx":
/*!******************************!*\
  !*** ./pages/quiz/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Quiz)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AnswerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AnswerComponent */ "./components/AnswerComponent.tsx");
/* harmony import */ var _model_answerModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/answerModel */ "./model/answerModel.ts");
/* harmony import */ var _model_question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/question */ "./model/question.ts");
/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Quiz.module.css */ "./styles/Quiz.module.css");
/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! he */ "he");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_QuizProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/QuizProvider */ "./providers/QuizProvider.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Cliente\\cursos\\desafios\\quiz_brivia\\pages\\quiz\\index.tsx";









function Quiz() {
  const {
    0: questions,
    1: setQuestions
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const widthContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    amountQuestions,
    setAmountQuestions,
    rigthQuestions,
    setRigthQuestions,
    wrongQuestions,
    setWrongQuestions,
    setFinalQuestions
  } = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_providers_QuizProvider__WEBPACK_IMPORTED_MODULE_6__.QuizContext);
  let url = `https://opentdb.com/api.php?amount=${amountQuestions.value}`;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAmountQuestions({
      value: +localStorage.getItem("amount")
    });
    setRigthQuestions(0);
    setWrongQuestions(0);
    fetch(url).then(response => response.json()).then(result => {
      return setQuestions(result.results.map(question => new _model_question__WEBPACK_IMPORTED_MODULE_4__.default(question.category, question.difficulty, question.incorrect_answers.map(answer => _model_answerModel__WEBPACK_IMPORTED_MODULE_3__.default.incorretdAnswer(he__WEBPACK_IMPORTED_MODULE_5___default().decode(answer))).concat(_model_answerModel__WEBPACK_IMPORTED_MODULE_3__.default.correctdAnswer(he__WEBPACK_IMPORTED_MODULE_5___default().decode(question.correct_answer))).map(answer => ({
        answer,
        randomItem: Math.random()
      })).sort((ob1, ob2) => ob1.randomItem - ob2.randomItem).map(obj => obj.answer), he__WEBPACK_IMPORTED_MODULE_5___default().decode(question.question), question.type)));
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    localStorage.setItem("rigth_questions", rigthQuestions);
    localStorage.setItem("wrong_questions", wrongQuestions);
  }, [wrongQuestions, rigthQuestions]);

  const nextQuestion = (e, answer, i) => {
    e.preventDefault();
    let newQuestions = [];
    const answerIndex = i;

    for (let i = 0; i < questions.length; i++) {
      if (questions[i].answers[answerIndex] === answer) {
        answer.selected = !answer.selected;
        newQuestions.push(questions[i]);
      } else {
        newQuestions.push(questions[i]);
      }
    }

    if (answer.correctd) {
      setRigthQuestions(rigthQuestions + 1);
    } else {
      setWrongQuestions(wrongQuestions + 1);
    }

    setQuestions(newQuestions);
    setTimeout(() => {
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
        children: questions.map(question => {
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
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 19
            }, this), question.answers.map((answer, index) => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_AnswerComponent__WEBPACK_IMPORTED_MODULE_2__.default, {
                next: e => nextQuestion(e, answer, index),
                correctd: answer.correctd,
                selected: answer.selected,
                value: answer.value
              }, Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5), false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 25
              }, this);
            })]
          }, Math.random().toString(36).replace(/[^a-z]+/g, ''), true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 17
          }, this);
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

/***/ "./styles/AnswerComponent.module.css":
/*!*******************************************!*\
  !*** ./styles/AnswerComponent.module.css ***!
  \*******************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"answerComponent": "AnswerComponent_answerComponent__3FCNH",
	"correct": "AnswerComponent_correct__3AHCd",
	"flipCorrectAnswer": "AnswerComponent_flipCorrectAnswer__2b1T7",
	"incorrected": "AnswerComponent_incorrected__jf5Z8",
	"flipIncorrectAnswer": "AnswerComponent_flipIncorrectAnswer__8WrQW"
};


/***/ }),

/***/ "./styles/Quiz.module.css":
/*!********************************!*\
  !*** ./styles/Quiz.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"containerQuiz": "Quiz_containerQuiz__7zoXA",
	"questionQuiz": "Quiz_questionQuiz__ajfI_",
	"questionDiv": "Quiz_questionDiv__31T6v"
};


/***/ }),

/***/ "he":
/*!*********************!*\
  !*** external "he" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("he");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/quiz/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vcXVpel9icml2aWEvLi9jb21wb25lbnRzL0Fuc3dlckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vcXVpel9icml2aWEvLi9tb2RlbC9hbnN3ZXJNb2RlbC50cyIsIndlYnBhY2s6Ly9xdWl6X2JyaXZpYS8uL21vZGVsL3F1ZXN0aW9uLnRzIiwid2VicGFjazovL3F1aXpfYnJpdmlhLy4vcGFnZXMvcXVpei9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcXVpel9icml2aWEvLi9wcm92aWRlcnMvUXVpelByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly9xdWl6X2JyaXZpYS8uL3N0eWxlcy9BbnN3ZXJDb21wb25lbnQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9xdWl6X2JyaXZpYS8uL3N0eWxlcy9RdWl6Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcXVpel9icml2aWEvZXh0ZXJuYWwgXCJoZVwiIiwid2VicGFjazovL3F1aXpfYnJpdmlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9xdWl6X2JyaXZpYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcXVpel9icml2aWEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQW5zd2VyQ29tcG9uZW50Lm1vZHVsZS5jc3NcIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbnN3ZXJDb21wb25lbnQocHJvcHMpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgb25DbGljaz17cHJvcHMubmV4dH0gY2xhc3NOYW1lPXtwcm9wcy5jb3JyZWN0ZCAmJiBwcm9wcy5zZWxlY3RlZCA/XHJcbiAgICAgICAgICAgIHN0eWxlcy5jb3JyZWN0IDogXHJcbiAgICAgICAgICAgICFwcm9wcy5jb3JyZWN0ZCAmJiBwcm9wcy5zZWxlY3RlZCA/IFxyXG4gICAgICAgICAgICBzdHlsZXMuaW5jb3JyZWN0ZWQgOiBcclxuICAgICAgICAgICAgc3R5bGVzLmFuc3dlckNvbXBvbmVudH0+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbnN3ZXJzTW9kZWwge1xyXG4gICAgI3ZhbHVlOiBzdHJpbmc7XHJcbiAgICAjY29ycmVjdGQ6IGJvb2xlYW47XHJcbiAgICBzZWxlY3RlZDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTpzdHJpbmcsIGNvcnJlY3RkOiBib29sZWFuLCBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlKSAge1xyXG4gICAgICAgIHRoaXMuI3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy4jY29ycmVjdGQgPSBjb3JyZWN0ZDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvcnJlY3RkQW5zd2VyICh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBbnN3ZXJzTW9kZWwodmFsdWUsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbmNvcnJldGRBbnN3ZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgQW5zd2Vyc01vZGVsKHZhbHVlLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZWFsKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQW5zd2Vyc01vZGVsKHRoaXMuI3ZhbHVlLCB0aGlzLiNjb3JyZWN0ZCwgdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3ZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvcnJlY3RkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNjb3JyZWN0ZFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEFuc3dlcnNNb2RlbCBmcm9tIFwiLi9hbnN3ZXJNb2RlbFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbk1vZGVsIHtcclxuICAgICNjYXRlZ29yeTogc3RyaW5nXHJcbiAgICAjZGlmZmljdWx0eTogc3RyaW5nXHJcbiAgICAjYW5zd2VyczogQW5zd2Vyc01vZGVsW11cclxuICAgICNxdWVzdGlvbjogc3RyaW5nXHJcbiAgICAjdHlwZTogc3RyaW5nXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgY2F0ZWdvcnk6IHN0cmluZyxcclxuICAgICAgICBkaWZmaWN1bHR5OiBzdHJpbmcsXHJcbiAgICAgICAgYW5zd2VyczogQW5zd2Vyc01vZGVsW10sXHJcbiAgICAgICAgcXVlc3Rpb246IHN0cmluZyxcclxuICAgICAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLiNjYXRlZ29yeSA9IGNhdGVnb3J5XHJcbiAgICAgICAgdGhpcy4jZGlmZmljdWx0eSA9IGRpZmZpY3VsdHlcclxuICAgICAgICB0aGlzLiNhbnN3ZXJzID0gYW5zd2Vyc1xyXG4gICAgICAgIHRoaXMuI3F1ZXN0aW9uID0gcXVlc3Rpb25cclxuICAgICAgICB0aGlzLiN0eXBlID0gdHlwZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYXRlZ29yeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jY2F0ZWdvcnlcclxuICAgIH1cclxuICAgIGdldCBkaWZmaWN1bHR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNkaWZmaWN1bHR5XHJcbiAgICB9XHJcbiAgICBnZXQgYW5zd2VycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jYW5zd2Vyc1xyXG4gICAgfVxyXG4gICAgZ2V0IHF1ZXN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNxdWVzdGlvblxyXG4gICAgfVxyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3R5cGVcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBbnN3ZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQW5zd2VyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbnN3ZXJzTW9kZWwgZnJvbSBcIi4uLy4uL21vZGVsL2Fuc3dlck1vZGVsXCI7XHJcbmltcG9ydCBRdWVzdGlvbk1vZGVsIGZyb20gXCIuLi8uLi9tb2RlbC9xdWVzdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUXVpei5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IGhlIGZyb20gXCJoZVwiXHJcbmltcG9ydCB7IFF1aXpDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9RdWl6UHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXooKSB7XHJcbiAgY29uc3QgW3F1ZXN0aW9ucywgc2V0UXVlc3Rpb25zXTogYW55ID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHdpZHRoQ29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgXHJcbiAgICAgICAgICBhbW91bnRRdWVzdGlvbnMsXHJcbiAgICAgICAgICBzZXRBbW91bnRRdWVzdGlvbnMsXHJcbiAgICAgICAgICByaWd0aFF1ZXN0aW9ucywgXHJcbiAgICAgICAgICBzZXRSaWd0aFF1ZXN0aW9ucyxcclxuICAgICAgICAgIHdyb25nUXVlc3Rpb25zLCBcclxuICAgICAgICAgIHNldFdyb25nUXVlc3Rpb25zLFxyXG4gICAgICAgICAgc2V0RmluYWxRdWVzdGlvbnNcclxuICAgICAgICB9ID0gUmVhY3QudXNlQ29udGV4dChRdWl6Q29udGV4dCk7XHJcbiAgbGV0IHVybCA9YGh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9JHthbW91bnRRdWVzdGlvbnMudmFsdWV9YFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IFxyXG4gICAgc2V0QW1vdW50UXVlc3Rpb25zKHt2YWx1ZTogK2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW1vdW50XCIpfSk7XHJcbiAgICBzZXRSaWd0aFF1ZXN0aW9ucygwKTtcclxuICAgIHNldFdyb25nUXVlc3Rpb25zKDApO1xyXG4gICAgZmV0Y2godXJsKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNldFF1ZXN0aW9ucyhyZXN1bHQucmVzdWx0cy5tYXAocXVlc3Rpb24gPT4gbmV3IFF1ZXN0aW9uTW9kZWwoXHJcbiAgICAgICAgICBxdWVzdGlvbi5jYXRlZ29yeSxcclxuICAgICAgICAgIHF1ZXN0aW9uLmRpZmZpY3VsdHksXHJcbiAgICAgICAgICBxdWVzdGlvbi5pbmNvcnJlY3RfYW5zd2Vyc1xyXG4gICAgICAgICAgICAubWFwKGFuc3dlciA9PiBBbnN3ZXJzTW9kZWwuaW5jb3JyZXRkQW5zd2VyKGhlLmRlY29kZShhbnN3ZXIpKSlcclxuICAgICAgICAgICAgLmNvbmNhdChBbnN3ZXJzTW9kZWwuY29ycmVjdGRBbnN3ZXIoaGUuZGVjb2RlKHF1ZXN0aW9uLmNvcnJlY3RfYW5zd2VyKSkpXHJcbiAgICAgICAgICAgIC5tYXAoYW5zd2VyID0+ICh7YW5zd2VyLCByYW5kb21JdGVtOiBNYXRoLnJhbmRvbSgpfSkpXHJcbiAgICAgICAgICAgIC5zb3J0KChvYjEsIG9iMikgPT4gb2IxLnJhbmRvbUl0ZW0gLSBvYjIucmFuZG9tSXRlbSlcclxuICAgICAgICAgICAgLm1hcChvYmogPT4gb2JqLmFuc3dlciksXHJcbiAgICAgICAgICAgIGhlLmRlY29kZShxdWVzdGlvbi5xdWVzdGlvbiksXHJcbiAgICAgICAgICBxdWVzdGlvbi50eXBlXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICB9ICk7ICAgICAgICBcclxuICB9LFtdKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmlndGhfcXVlc3Rpb25zXCIsIHJpZ3RoUXVlc3Rpb25zKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3cm9uZ19xdWVzdGlvbnNcIiwgd3JvbmdRdWVzdGlvbnMpXHJcbiAgfSxbd3JvbmdRdWVzdGlvbnMsIHJpZ3RoUXVlc3Rpb25zXSlcclxuXHJcbiAgY29uc3QgbmV4dFF1ZXN0aW9uID0gKGUsIGFuc3dlcjogQW5zd2Vyc01vZGVsLCBpKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGxldCBuZXdRdWVzdGlvbnMgPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3QgYW5zd2VySW5kZXggPSBpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaTwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmKHF1ZXN0aW9uc1tpXS5hbnN3ZXJzW2Fuc3dlckluZGV4XSA9PT0gYW5zd2VyKSB7XHJcbiAgICAgICAgYW5zd2VyLnNlbGVjdGVkID0gIWFuc3dlci5zZWxlY3RlZFxyXG4gICAgICAgIG5ld1F1ZXN0aW9ucy5wdXNoKHF1ZXN0aW9uc1tpXSlcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIG5ld1F1ZXN0aW9ucy5wdXNoKHF1ZXN0aW9uc1tpXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoYW5zd2VyLmNvcnJlY3RkKSB7XHJcbiAgICAgIHNldFJpZ3RoUXVlc3Rpb25zKHJpZ3RoUXVlc3Rpb25zICsgMSk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHNldFdyb25nUXVlc3Rpb25zKHdyb25nUXVlc3Rpb25zICsgMSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRRdWVzdGlvbnMobmV3UXVlc3Rpb25zKVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZih3aWR0aENvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPj0gd2lkdGhDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCAqICgrYW1vdW50UXVlc3Rpb25zLnZhbHVlIC0gMSkpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi4uL3Jlc3VsdHMvcmVzdWx0UXVpelwiKTtcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIHdpZHRoQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCArPSB3aWR0aENvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgIH1cclxuICAgIH0sIDEyMDApIFxyXG4gICAgXHJcbiAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgIHtcclxuICAgICAgcXVlc3Rpb25zLmxlbmd0aCA9PT0gMCA/IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXdhaXRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICA6IFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiByZWY9e3dpZHRoQ29udGFpbmVyfSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJRdWl6fT5cclxuICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uUXVpen0ga2V5PXtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25EaXZ9IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjEwMHB4XCIsfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPiB7cXVlc3Rpb24ucXVlc3Rpb259IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uYW5zd2Vycy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJDb21wb25lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dD17KGUpID0+IG5leHRRdWVzdGlvbihlLCBhbnN3ZXIsIGluZGV4KX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdGQ9e2Fuc3dlci5jb3JyZWN0ZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2Fuc3dlci5zZWxlY3RlZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgNSl9IHZhbHVlPXthbnN3ZXIudmFsdWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSAgICAgICAgICAgXHJcbiAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUXVpekNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUXVpelByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFthbW91bnRRdWVzdGlvbnMsIHNldEFtb3VudFF1ZXN0aW9uc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdmFsdWU6IDBcclxuICAgIH0gKTtcclxuICAgIGNvbnN0IFtyaWd0aFF1ZXN0aW9ucywgc2V0UmlndGhRdWVzdGlvbnNdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbd3JvbmdRdWVzdGlvbnMsIHNldFdyb25nUXVlc3Rpb25zXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxRdWl6Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgICAgICB1c2VyLFxyXG4gICAgICAgICAgICBzZXRVc2VyLFxyXG4gICAgICAgICAgICBhbW91bnRRdWVzdGlvbnMsXHJcbiAgICAgICAgICAgIHNldEFtb3VudFF1ZXN0aW9ucyxcclxuICAgICAgICAgICAgcmlndGhRdWVzdGlvbnMsIFxyXG4gICAgICAgICAgICBzZXRSaWd0aFF1ZXN0aW9ucyxcclxuICAgICAgICAgICAgd3JvbmdRdWVzdGlvbnMsIFxyXG4gICAgICAgICAgICBzZXRXcm9uZ1F1ZXN0aW9ucyxcclxuICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L1F1aXpDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYW5zd2VyQ29tcG9uZW50XCI6IFwiQW5zd2VyQ29tcG9uZW50X2Fuc3dlckNvbXBvbmVudF9fM0ZDTkhcIixcblx0XCJjb3JyZWN0XCI6IFwiQW5zd2VyQ29tcG9uZW50X2NvcnJlY3RfXzNBSENkXCIsXG5cdFwiZmxpcENvcnJlY3RBbnN3ZXJcIjogXCJBbnN3ZXJDb21wb25lbnRfZmxpcENvcnJlY3RBbnN3ZXJfXzJiMVQ3XCIsXG5cdFwiaW5jb3JyZWN0ZWRcIjogXCJBbnN3ZXJDb21wb25lbnRfaW5jb3JyZWN0ZWRfX2pmNVo4XCIsXG5cdFwiZmxpcEluY29ycmVjdEFuc3dlclwiOiBcIkFuc3dlckNvbXBvbmVudF9mbGlwSW5jb3JyZWN0QW5zd2VyX184V3JRV1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyUXVpelwiOiBcIlF1aXpfY29udGFpbmVyUXVpel9fN3pvWEFcIixcblx0XCJxdWVzdGlvblF1aXpcIjogXCJRdWl6X3F1ZXN0aW9uUXVpel9fYWpmSV9cIixcblx0XCJxdWVzdGlvbkRpdlwiOiBcIlF1aXpfcXVlc3Rpb25EaXZfXzMxVDZ2XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInN0eWxlcyIsIkFuc3dlckNvbXBvbmVudCIsInByb3BzIiwibmV4dCIsImNvcnJlY3RkIiwic2VsZWN0ZWQiLCJjb3JyZWN0IiwiaW5jb3JyZWN0ZWQiLCJhbnN3ZXJDb21wb25lbnQiLCJ2YWx1ZSIsIkFuc3dlcnNNb2RlbCIsImNvbnN0cnVjdG9yIiwiY29ycmVjdGRBbnN3ZXIiLCJpbmNvcnJldGRBbnN3ZXIiLCJyZXZlYWwiLCJRdWVzdGlvbk1vZGVsIiwiY2F0ZWdvcnkiLCJkaWZmaWN1bHR5IiwiYW5zd2VycyIsInF1ZXN0aW9uIiwidHlwZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJoZSIsIlF1aXpDb250ZXh0IiwiUXVpeiIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsIndpZHRoQ29udGFpbmVyIiwicm91dGVyIiwiYW1vdW50UXVlc3Rpb25zIiwic2V0QW1vdW50UXVlc3Rpb25zIiwicmlndGhRdWVzdGlvbnMiLCJzZXRSaWd0aFF1ZXN0aW9ucyIsIndyb25nUXVlc3Rpb25zIiwic2V0V3JvbmdRdWVzdGlvbnMiLCJzZXRGaW5hbFF1ZXN0aW9ucyIsInVzZUNvbnRleHQiLCJ1cmwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwicmVzdWx0cyIsIm1hcCIsImluY29ycmVjdF9hbnN3ZXJzIiwiYW5zd2VyIiwiZGVjb2RlIiwiY29uY2F0IiwiY29ycmVjdF9hbnN3ZXIiLCJyYW5kb21JdGVtIiwiTWF0aCIsInJhbmRvbSIsInNvcnQiLCJvYjEiLCJvYjIiLCJvYmoiLCJzZXRJdGVtIiwibmV4dFF1ZXN0aW9uIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1F1ZXN0aW9ucyIsImFuc3dlckluZGV4IiwibGVuZ3RoIiwicHVzaCIsInNldFRpbWVvdXQiLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsIm9mZnNldFdpZHRoIiwiY29udGFpbmVyUXVpeiIsInF1ZXN0aW9uUXVpeiIsInF1ZXN0aW9uRGl2IiwibWFyZ2luVG9wIiwiaW5kZXgiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJzdWJzdHIiLCJjcmVhdGVDb250ZXh0IiwiUXVpelByb3ZpZGVyIiwidXNlciIsInNldFVzZXIiLCJuYW1lIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import AnswerComponent from "../../components/AnswerComponent";
import AnswersModel from "../../model/answerModel";
import QuestionModel from "../../model/question";
import styles from "../../styles/Quiz.module.css"
import he from "he"
import { QuizContext } from "../../providers/QuizProvider";

export default function Quiz() {
  const [questions, setQuestions]: any = useState([]);
  const widthContainer = useRef(null);
  const router = useRouter();
  const { 
          amountQuestions,
          setAmountQuestions,
          rigthQuestions, 
          setRigthQuestions,
          wrongQuestions, 
          setWrongQuestions,
          setFinalQuestions
        } = React.useContext(QuizContext);
  let url =`https://opentdb.com/api.php?amount=${amountQuestions.value}`
  useEffect(() => { 
    setAmountQuestions({value: +localStorage.getItem("amount")});
    setRigthQuestions(0);
    setWrongQuestions(0);
    fetch(url)
      .then(response => response.json())
      .then(result => {
        return setQuestions(result.results.map(question => new QuestionModel(
          question.category,
          question.difficulty,
          question.incorrect_answers
            .map(answer => AnswersModel.incorretdAnswer(he.decode(answer)))
            .concat(AnswersModel.correctdAnswer(he.decode(question.correct_answer)))
            .map(answer => ({answer, randomItem: Math.random()}))
            .sort((ob1, ob2) => ob1.randomItem - ob2.randomItem)
            .map(obj => obj.answer),
            he.decode(question.question),
          question.type
          )
          )
          )
       } );        
  },[])


  useEffect(() => {
    localStorage.setItem("rigth_questions", rigthQuestions)
    localStorage.setItem("wrong_questions", wrongQuestions)
  },[wrongQuestions, rigthQuestions])

  const nextQuestion = (e, answer: AnswersModel, i) => {
    e.preventDefault()
    let newQuestions = [];
    
    const answerIndex = i;
    for(let i = 0; i< questions.length; i++) {
      if(questions[i].answers[answerIndex] === answer) {
        answer.selected = !answer.selected
        newQuestions.push(questions[i])
      }else {
        newQuestions.push(questions[i])
      }
    }
    if(answer.correctd) {
      setRigthQuestions(rigthQuestions + 1);
    }else {
      setWrongQuestions(wrongQuestions + 1)
    }

    setQuestions(newQuestions)

    setTimeout(() => {
      if(widthContainer.current.scrollLeft >= widthContainer.current.offsetWidth * (+amountQuestions.value - 1)) {
        router.push("../results/resultQuiz");
      }else {
        widthContainer.current.scrollLeft += widthContainer.current.offsetWidth
      }
    }, 1200) 
    
  }
    return(
        <div>
      {
      questions.length === 0 ? 
        <div className="await">
          <div className="spinner"></div>
        </div> 
        : 
        <div>
        <div ref={widthContainer} className={styles.containerQuiz}>
          {questions.map((question) => {
              return (
                <div className={styles.questionQuiz} key={Math.random().toString(36).replace(/[^a-z]+/g, '')}>
                  <div className={styles.questionDiv} style={{marginTop: "100px",}}>
                    <h2> {question.question} </h2>
                  </div>
                  {question.answers.map((answer, index) => {
                      return (
                        <AnswerComponent 
                          next={(e) => nextQuestion(e, answer, index)} 
                          correctd={answer.correctd} 
                          selected={answer.selected} 
                          key={Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)} value={answer.value} />
                      )
                  })}
        
                </div>
              )           
          })}

        </div>
      </div>
      }
    </div>
    )
}
import React, { useEffect } from "react";
import ResultComponent from "../../components/ResultComponent";
import { QuizContext } from "../../providers/QuizProvider";



export default function ResultQuiz () {

    const {
        amountQuestions,
        setAmountQuestions,
        rigthQuestions,
        setRigthQuestions,
        wrongQuestions,
        setWrongQuestions, 
      } = React.useContext(QuizContext);
      useEffect(() => {
        if(localStorage.getItem("wrong_questions")) {
            setWrongQuestions(localStorage.getItem("wrong_questions"))
        }
        if(localStorage.getItem("rigth_questions")) {
            setRigthQuestions(localStorage.getItem("rigth_questions"))
        }
        if(localStorage.getItem("amount")) {
            setAmountQuestions({value: +localStorage.getItem("amount")})
        }
      },[])
    return (
        <div>
            <ResultComponent
                amount={amountQuestions.value}
                rigthQuestions={rigthQuestions}
                wrongQuestions={wrongQuestions}
                porcent={`${(rigthQuestions * 100 / amountQuestions.value).toFixed(2)}% `}
            />
        </div>
    )
}
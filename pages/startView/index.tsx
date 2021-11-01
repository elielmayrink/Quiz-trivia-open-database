import { QuizContext } from "../../providers/QuizProvider";
import React from "react"
import StartComponent from "../../components/StartComponent";



export default function StartQuiz () {
let url = `../quiz`
const { user,  
        amountQuestions,
      } = React.useContext(QuizContext);
    return (
        <div className="container">
            <StartComponent
                name={user.name}
                value={amountQuestions.value}
                url={url}
            />
        </div>
    );
}
import React, { useState, useEffect } from "react";

export const QuizContext = React.createContext({});


export const QuizProvider = (props) => {
    const [user, setUser]  = useState({
        name: "",
    });
    const [amountQuestions, setAmountQuestions] = useState({
        value: 0
    } );
    const [rigthQuestions, setRigthQuestions] = useState(0);
    const [wrongQuestions, setWrongQuestions] = useState(0);


    return (
        <QuizContext.Provider value={{
            user,
            setUser,
            amountQuestions,
            setAmountQuestions,
            rigthQuestions, 
            setRigthQuestions,
            wrongQuestions, 
            setWrongQuestions,
         }}>
            {props.children}
        </QuizContext.Provider>
    )
}
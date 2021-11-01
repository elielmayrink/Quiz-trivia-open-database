import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import FormComponent from "../components/FormComponent";
import { QuizContext } from "../providers/QuizProvider";



export default function Home() {
  const { user, 
          setUser, 
          amountQuestions, 
          setAmountQuestions,
        } = React.useContext(QuizContext);
  let url = `startView`
  const handlerName = (e) => {
    e.preventDefault()
    setUser({name: e.target.value})
  }
  useEffect(() => {
    if(localStorage.getItem("name")) {
      setUser({name: localStorage.getItem("name")})
    }
    if(localStorage.getItem("amount")) {
      setAmountQuestions({value: localStorage.getItem("amount")})
    }
  },[])
  useEffect(() => {
    localStorage.setItem("name",user.name)
    
  }, [user])
  useEffect(() => {
    localStorage.setItem("amount", amountQuestions.value)
  },[amountQuestions])
  return (
    <div className="container">
      <Head> 
        <title>Quiz_brivia</title>
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {  
        <Link href="results/resultQuiz">
      
        <button className="resultBtn">Ultimo resultado</button>
            
      </Link>
      }
      <FormComponent 
        user={user.name}
        changeName={(e) => handlerName(e)} 
        changeAmount={e => setAmountQuestions({value: +e.target.value})}  
        amount={amountQuestions.value} 
        url={url} 
      />
     
    </div>
  );
}
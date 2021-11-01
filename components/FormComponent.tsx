import Link from "next/link";
import React from "react";
import styles from "../styles/FormComponent.module.css";
export default function FormComponent ({user, amount, changeAmount, changeName, url}) {
    return (
        <div className={styles.form}>
          <h1>Formulario do Quiz</h1>
          <div className={styles.inputsForm}>
            <input onChange={changeName} value={user} name="userName" placeholder="Me diga seu nome" type="text" />
            <input className={styles.numbers} value={amount} onChange={changeAmount} type="number" />
            <Link href={url}>
              <button disabled={amount <= 0}>
                Enviar  
              </button>
            </Link>
          </div>
          
        </div>
    )
}
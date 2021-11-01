import styles from "../styles/ResultComponent.module.css";
import Link from "next/link"

export default function ResultComponent(props) {

    return (
        <div className={styles.resultContainer}>
            <Link href="/">
                <button className={styles.backBtn}>Back to home</button>
            </Link>
            <div className={styles.resultItens}>
                <div className={styles.amountQuestions}>
                    <span>Número de Questões</span>
                    <div>
                        <p>
                            {props.amount}
                        </p>
                    </div>
                </div>
                <div className={styles.rigthQuestions}>
                    <span>Questões certas</span>
                    <div>
                        <p>
                            {props.rigthQuestions}
                        </p>
                    </div>
                </div>
                <div className={styles.wrongQuestions}>
                    <span>Questões erradas </span>
                    <div>
                        <p>
                            {props.wrongQuestions}
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.porcent}>
                <span>Sua porcentagem de acertos</span>
                <div>
                    <p>
                        {props.porcent}
                    </p>
                </div>
            </div>
        </div>
    );
}
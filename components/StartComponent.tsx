import styles from "../styles/StartComponent.module.css";
import Link from "next/link";
export default function StartComponent (props) {


    return (
        <div className={styles.startQuiz}>
            <h1>
                Bem vindo {props.name}
            </h1>
            <p>Hoje vamos jogar com {props.value} questoes</p>

            <div>
                <Link href="/">
                    <button className={styles.back}>Back</button>
                </Link>
                <Link href={props.url}>
                    <button>Start</button>
                </Link>
            </div>
        </div>
    )
}
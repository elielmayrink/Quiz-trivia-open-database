import styles from "../styles/AnswerComponent.module.css"
export default function AnswerComponent(props) {

    return (
        <div onClick={props.next} className={props.correctd && props.selected ?
            styles.correct : 
            !props.correctd && props.selected ? 
            styles.incorrected : 
            styles.answerComponent}>
            <span>
                {props.value}
            </span>
        </div>
    )
}
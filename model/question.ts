import AnswersModel from "./answerModel"

export default class QuestionModel {
    #category: string
    #difficulty: string
    #answers: AnswersModel[]
    #question: string
    #type: string

    constructor(
        category: string,
        difficulty: string,
        answers: AnswersModel[],
        question: string,
        type: string,
    ) {
        this.#category = category
        this.#difficulty = difficulty
        this.#answers = answers
        this.#question = question
        this.#type = type
    }

    get category() {
        return this.#category
    }
    get difficulty() {
        return this.#difficulty
    }
    get answers() {
        return this.#answers
    }
    get question() {
        return this.#question
    }
    get type() {
        return this.#type
    }
}
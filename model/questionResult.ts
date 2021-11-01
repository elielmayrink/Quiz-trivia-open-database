export default class QuestionResult {
    #question: string;
    #correctAnswer: string;
    #selectedAnswer: string;

    constructor(question: string, correctAnswer:string, selectedAnswer: string) {
        this.#question = question;
        this.#correctAnswer = correctAnswer;
        this.#selectedAnswer = selectedAnswer;
    }

    get question() {
        return this.#question;
    }
    
    get correctAnswer() {
        return this.#correctAnswer;
    }

    get selectedAnswer () {
        return this.#selectedAnswer;
    }
}
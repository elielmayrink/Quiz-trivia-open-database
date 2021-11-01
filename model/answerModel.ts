export default class AnswersModel {
    #value: string;
    #correctd: boolean;
    selected: boolean;

    constructor(value:string, correctd: boolean, selected: boolean = false)  {
        this.#value = value;
        this.#correctd = correctd;
        this.selected = selected;
    }

    static correctdAnswer (value: string) {
        return new AnswersModel(value, true);
    }

    static incorretdAnswer(value: string) {
        return new AnswersModel(value, false);
    }

    reveal() {
        return new AnswersModel(this.#value, this.#correctd, true)
    }

    get value() {
        return this.#value
    }

    get correctd() {
        return this.#correctd
    }
}
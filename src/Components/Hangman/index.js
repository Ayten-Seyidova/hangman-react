import { Component } from "react";
import "./index.css";
import { image } from "../../Constant/image";
import { Guess } from "../Guess";
import { Word } from "../Word";
import { Letter } from "../Letter";
import { Restart } from "../Restart";
import { randomWord } from "../../Constant/words";

export class Hangman extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            guessed: new Set(),
            word: randomWord(),
            unknownWord: "",
        }
    }

    resetData() {
        let newWord = randomWord();
        let wordLength = newWord.length;
        let hide = "_".repeat(wordLength);
        this.setState({
            count: 0,
            guessed: new Set(),
            word: newWord,
            unknownWord: hide,
            isWin: false,
            gameOver: false,
        });
    }

    componentDidMount() {
        let wordLength = this.state.word.length;
        let hide = "_".repeat(wordLength);
        this.setState({ unknownWord: hide });
        return hide;
    }

    guessWord(letter) {
        let guessedLetter = letter;
        let answer = this.state.word;
        console.log('random word ' + answer);
        let indices = [];
        if (answer.indexOf(guessedLetter) === -1) {
            if (this.state.count <= 5) {
                this.setState({ count: this.state.count + 1 })
                if (this.state.count === 5) {
                    this.setState({ gameOver: true })
                }
            }
        } else {
            if (this.state.count <= 5) {
                for (var i = 0; i < answer.length; i++) {
                    if (answer[i] === letter) indices.push(i);
                }
                var str = this.state.unknownWord;

                str = str.split('');

                for (let index of indices) {
                    str[index] = letter;
                }

                str = str.join('');
                this.setState({ unknownWord: str })

                if (str === this.state.word) {
                    this.setState({ isWin: true })
                }
            }
        }
        this.setState({ guessed: this.state.guessed.add(letter) })
    }

    makeLetter() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button className={`letterBtn ${this.state.guessed.has(letter) && 'disabled-btn'}`}
                key={letter}
                value={letter}
                onClick={() => this.guessWord(letter)}
                disabled={this.state.guessed.has(letter)} >
                {letter}
            </button>
        ));
    }

    render() {
        return (
            <>
                <div className="mt-3">
                    <h1>Hangman</h1>
                    <div>
                        <img src={image[`Hang` + this.state.count]} width={200} className="img-thumbnail" />
                    </div>
                </div>
                <Guess wrong={this.state.count} />
                <Word gameOver={this.state.gameOver} word={this.state.word} unknownWord={this.state.unknownWord} />
                <Letter isWin={this.state.isWin} gameOver={this.state.gameOver} makeLetter={() => this.makeLetter()} />
                <Restart resetData={() => this.resetData()} />
            </>
        )
    }
}
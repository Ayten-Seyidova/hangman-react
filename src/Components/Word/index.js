import { Component } from "react";
import "./index.css";

export class Word extends Component {
    render() {
        return (
            <p className="h1 hideWord">{this.props.gameOver ? this.props.word : this.props.unknownWord}</p>
        )
    }
}
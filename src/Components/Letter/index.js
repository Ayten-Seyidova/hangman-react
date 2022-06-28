import { Component } from "react";
import "./index.css";

export class Letter extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="button-section mt-4">
                {this.props.isWin ? "You Win" : this.props.gameOver ? "You Lose" : this.props.makeLetter()}
            </div>
        )
    }
}
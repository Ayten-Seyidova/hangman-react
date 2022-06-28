import { Component } from "react";

export class Guess extends Component {
    render() {
        return (
            <p className="mt-4 h3">Guessed Wrong: {this.props.wrong}</p>
        )
    }
}
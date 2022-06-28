import { Component } from "react";
import "./index.css"

export class Restart extends Component {
    render () {
        return(
            <button className="restart-btn" onClick={this.props.resetData}>Restart?</button>
        )
    }
}
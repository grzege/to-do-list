import React, {Component} from "react";

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            text: props.text
        }
    }

    render() {
        const completedStyle = {
            textDecoration: "line-through"
        };
        return (
            <div className="task">
                <input
                    type="checkbox"
                    checked={this.props.completed}
                    onChange={() => this.props.handleChange(this.state.id)}
                />
                <p style={this.props.completed ? completedStyle : null}>{this.state.text}</p>
            </div>
        )
    }
}

export default Task
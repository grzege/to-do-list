import React, {Component} from "react";

class Filter extends Component{


    render() {
        return(
        <div className="filter">
            <input
                type="checkbox"
                checked={this.props.completed}
                onChange={() => this.props.handleFilter()}
            />
            <p>hide completed</p>
        </div>
        )
    }
}

export default Filter
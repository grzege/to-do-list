import React from "react";
import Task from "./Task";

class ToDoList extends React.Component {
    render() {
        let listItems;
        const tasks = this.props.tasks;
        /*if (this.props.filter === false) {
            listItems = tasks.map(item =>
                <Task
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    completed={item.completed}
                    handleChange={this.props.handleChange}
                    filter={this.props.filter}
                />);
        } else {*/
            listItems = tasks.map(item => {
                return (item.completed === false || this.props.filter===false)?
                    <Task
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        completed={item.completed}
                        handleChange={this.props.handleChange}
                        filter={this.props.filter}
                    />
                    :
                    null
            });
            listItems = listItems.filter(function (i) {
                if(i===null)return false;
                return true;
            })
        return (
            <div className="nothing">
                {(listItems&&listItems.length <= 0) ? "Nothing to do..." : listItems}
            </div>
        )
    }
}

export default ToDoList
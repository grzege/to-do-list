import React from 'react';
import './App.css';
import ToDoList from "./Components/ToDoList";
import NewTask from "./Components/NewTask";
import Filter from "./Components/Filter";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            filter: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (id) => {
        //console.log(id);
        this.setState(prevState => {
            const updatedTasks = prevState.tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task
            });
            return {
                tasks: updatedTasks
            }
        })
    };

    handleSubmit(task) {
        this.setState({tasks: [...this.state.tasks, task]})
    };

    handleFilter = () => {
        this.setState(prevState=>{
            return{
                filter:!prevState.filter
            }
        })
    }
    render() {
        return (
            <div>
                <h1 className="Header">Welcome to my To Do list!</h1>
                <div className="todo-list">
                    <Filter handleFilter={this.handleFilter}/>
                    <ToDoList filter={this.state.filter} tasks={this.state.tasks} handleChange={this.handleChange}/>
                    <NewTask onFormSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    };
}

export default App;

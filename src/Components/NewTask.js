import React from "react";

class NewTask extends React.Component{
    constructor(props){
        super(props);
        this.state={text:'',id: 1};
    }

   handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.text==='')return;
        this.props.onFormSubmit({
            id: this.state.id,
            text: this.state.text,
            completed: false
        });
        this.setState(prevState=>{
            return{
                id: prevState.id + 1,
                text:''
            }
        })

    };
    render() {
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <input type="text" name="text" value={this.state.text}
                       onChange={(e) => this.setState({text: e.target.value})}/>
                <input type="submit" value="Add"/>
            </form>
        )
    }
}

export default NewTask
import React, { Component } from "react";
import TodoStore from '../stores/TodoStore';
import {observer} from 'mobx-react';
@observer

class TodoEntry extends Component {
  state = {
    value: " "
  };
  handleKeyDown=event=>{
    if(event.keyCode  !==13){
      return;
    }
    event.preventDefault()
document.getElementById('place').placeholder="what needs to be done?" 
    TodoStore.addTodo(this.state.value)
    this.setState({
      value:''
    })  
  }

  render() {
    return (
      <header className="header">
        <h1>To-Do</h1>
        <input id='place'
        
          onChange={event => this.setState({ value: event.target.value})}
          onKeyDown={
            event=>this.handleKeyDown(event)
          }
          value={this.state.value}
          type="text"
          className="new-todo"
          placeholder="what needs to be done?"
        />
      </header>
    );
  }
}
export default TodoEntry

import React from 'react'
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      newtodo: "",
      completed: false,
      todolist: ["walk the dog","groceries"],
    }
  }
  render() {
    return (
      <TodoList todos={this.state.todolist}/>
    )
  }
}

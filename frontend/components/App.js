import React from 'react'

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
      <div>
        Todo App
      </div>
    )
  }
}

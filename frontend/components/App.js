import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todolist: [
        {
          name: "Organize Garage",
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false,
        },
        {
          name: "Bake Cookies",
          id: 1528817084358,
          completed: true,
        },
      ],
    };
  }

  handleClear = (e) => { 
    e.preventDefault
   this.setState({...this.state, todolist: this.state.todolist.filter(todo => {return (todo.completed===false)})}) 
  }
  render() {
    const { todolist } = this.state;
    return (
      <>
        <h1>Todos:</h1>
        <TodoList todo={todolist} />
        <Form />
        <button onClick={this.handleClear}>Clear</button>
      </>
    );
  }
}

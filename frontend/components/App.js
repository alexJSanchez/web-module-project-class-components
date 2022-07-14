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
          completed: false,
        },
      ],
    };
  }
  handleAdd = (newTodo) => {
    const addTodo = {
      name: newTodo,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todolist: [...this.state.todolist, addTodo],
    });
  };
  handleToggle = (clickedId) => {
    console.log(clickedId);
    this.setState({
      ...this.state,
      todolist: this.state.todolist.map((todo) => {
        if (todo.id === clickedId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    });
  };
  handleClear = (e) => {
    e.preventDefault;
    this.setState({
      ...this.state,
      todolist: this.state.todolist.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };
  render() {
    const { todolist } = this.state;
    return (
      <>
        <h1>Todos:</h1>
        <TodoList handleToggle={this.handleToggle} todo={todolist} />
        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear</button>
      </>
    );
  }
}

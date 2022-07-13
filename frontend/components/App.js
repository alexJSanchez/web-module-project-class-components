import React from 'react'
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      newtodo: "",
      
      todolist: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
    }
  }
  render() {
    const {todolist} = this.state;
    return (
      <div>
      <h1>Todos:</h1>
      <ol>
        {todolist.map(todo => <li>{todo.name} {todo.completed?<span>completed</span>:<span></span>}</li> )}
      </ol>
        <form>
          <input/>
          <button>Add</button>
          <button>Clear</button>
        </form>
      </div>
    )
  }
}

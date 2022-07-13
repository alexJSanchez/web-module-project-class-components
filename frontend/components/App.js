import React from 'react'
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {      
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
     <TodoList todo={todolist}/>  
        <form>
          <input/>
          <button>Add</button>
          <button>Clear</button>
        </form>
      </div>
    )
  }
}

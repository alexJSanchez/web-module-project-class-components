import React from 'react'
import Todo from './Todo'
export default class TodoList extends React.Component {
  render() {
    return (
      <ol>
        {this.props.todo.map(todo => <Todo handleToggle={this.props.handleToggle} todo={todo}/> )}
      </ol>
    )
  }
}

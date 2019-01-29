import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

  getStyle = () => {
    if(this.props.todo.completed) {
      return {textDecoration: 'line-through'};
    }
    return {textDecoration: 'none'};
  } 

  render() {
    return (
      <div>
        <p style={this.getStyle()}>{this.props.todo.title}</p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem

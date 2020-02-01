import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props._todo.isCompleted ? "line-through" : "none"
    };
  };
  render() {
    return (
      <div style={this.getStyle()}>
        <h2>
          <input
            name="markTodo"
            type="checkbox"
            onChange={this.props.markComplete.bind(this, this.props._todo.id)}
          ></input>
          {this.props._todo.title}
          <button
            name="deleteTodo"
            onClick={this.props.deleteTodo.bind(this, this.props._todo.id)}
            style={btnStyle}
          >
            x
          </button>
        </h2>
      </div>
    );
  }
}

TodoItem.propTypes = {
  _todo: PropTypes.object.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  padding: "5px 9px",
  borderRadius: "30%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;

import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const { label, important = false } = this.props;

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <span className="todo-list-item">
        <span className="todo-list-item-label" style={style}>{ label }</span>
        <button className="btn btn-outline-success btn-sm float-right" type="button">
          <i className="fa fa-exclamation" />
        </button>
        <button className="btn btn-outline-danger btn-sm float-right" type="button">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
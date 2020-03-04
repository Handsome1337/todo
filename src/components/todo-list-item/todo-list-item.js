import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  constructor() {
    super();

    this.state = {
      done: false,
      important: false
    };

    this.onLabelClick = () => {
      this.setState(({done}) => ({done: !done}));
    };

    this.onMarkImportantClick = () => {
      this.setState(({important}) => ({important: !important}));
    };
  }

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>{ label }</span>
        <button className="btn btn-outline-success btn-sm float-right" type="button" onClick={this.onMarkImportantClick}>
          <i className="fa fa-exclamation" />
        </button>
        <button className="btn btn-outline-danger btn-sm float-right" type="button">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

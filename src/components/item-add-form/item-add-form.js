import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  constructor() {
    super();

    this.state = {
      label: ''
    };

    this.onLabelChange = (e) => {
      this.setState({
        label: e.target.value
      });
    };

    this.onSubmit = (e) => {
      e.preventDefault();
      e.currentTarget.reset();
      this.props.onItemAdded(this.state.label);
    };
  }
  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input className="form-control" type="text" placeholder="What needs to be done" onChange={this.onLabelChange} />
        <button className="btn btn-outline-secondary text-nowrap">Add Item</button>
      </form>
    );
  }
};

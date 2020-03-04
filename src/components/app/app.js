import React, { Component } from 'react';
import AppHeader from './../app-header';
import SearchPanel from './../search-panel';
import ItemStatusFilter from './../item-status-filter';
import TodoList from './../todo-list';
import ItemAddForm from './../item-add-form';
import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.maxId = 1;

    this.state = {
      todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Have a lunch')
      ],
      term: ''
    };

    this.onSearchChange = (term) => {
      this.setState({ term });
    };

    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);
        const newData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

        return {
          todoData: newData
        };
      });
    };

    this.addItem = (text) => {
      const newItem = this.createTodoItem(text);

      this.setState(({ todoData }) => {
        const newData = [...todoData, newItem];

        return {
          todoData: newData
        };
      });
    };

    this.onToggleImportant = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, 'important')
        };
      });
    };

    this.onToggleDone = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, 'done')
        };
      });
    };
  }

  search(items, term) {
    if (!term) {
      return items;
    }

    return items.filter((el) => el.label.toLowerCase().includes(term.toLowerCase()));
  }

  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++
    };
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  render() {
    const { todoData, term } = this.state;

    const visibleItems = this.search(todoData, term);
    const todoCount = todoData.filter((el) => !el.done).length;
    const doneCount = todoData.length - todoCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel value={term} onSearchChange={this.onSearchChange} />
          <ItemStatusFilter />
        </div>
        <TodoList todos={visibleItems} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}

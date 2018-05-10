import React, { Component } from 'react';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterVal: ''
    };

    this.viewMore = this.viewMore.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.checkFilter = this.checkFilter.bind(this);
  }

  viewMore = function(task) {
    console.log(task);
  };

  handleFilterChange = function(event) {
    event.preventDefault();
    this.setState({ filterVal: event.target.value });
  };

  checkFilter = function(task, filterVal) {
    if (filterVal.length < 1) {
      return true;
    }
    return task.title.toUpperCase().indexOf(filterVal.toUpperCase()) >= 0;
  };

  render() {
    return (
      <div>
        <label>
          Filter
          <input type="text" value={this.state.filterVal} onChange={this.handleFilterChange} />
        </label>
        <ul>
          {this.props.tasks.filter(task => this.checkFilter(task, this.state.filterVal)).map(task => (
            <li className="App__Task-Button" onClick={() => this.viewMore(task)} key={task.ID}>
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;

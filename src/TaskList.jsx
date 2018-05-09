import React, { Component } from 'react';

class TaskList extends Component {
  render() {
    return (
      <div>
        <ul>{this.props.tasks.map(task => <li key={task.ID}>{task.title}</li>)}</ul>
      </div>
    );
  }
}

export default TaskList;

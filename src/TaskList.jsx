import React, { Component } from 'react';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.viewMore = this.viewMore.bind(this);
  }

  viewMore = function(task) {
    console.log(task);
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map(task => (
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

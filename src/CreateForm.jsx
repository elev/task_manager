import React, { Component } from 'react';

class CreateButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: {
        ID: 22,
        title: '',
        priority: 2,
        subtasks: []
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = function(event) {
    this.setState({ newTask: Object.assign({}, this.state.newTask, { title: event.target.value }) });
  };

  handleSubmit = function(event) {
    event.preventDefault();
    this.props.onSubmitMethod(this.state.newTask);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          New Task:
          <input type="text" value={this.state.newTask.title} name="taskTitle" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateButton;

import React, { Component } from 'react';
import axios from 'axios';
import 'normalize.css/normalize.css';
import './App.css';
import TaskList from './TaskList';
import CreateForm from './CreateForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    };

    this.createNew = this.createNew.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${process.env.PUBLIC_URL}/tasks.json`)
      .then(res => {
        this.setState({ tasks: res.data.tasks });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  createNew(newTask) {
    console.log(newTask);
    this.setState({ tasks: this.state.tasks.concat(newTask) });
  }

  render() {
    return (
      <div className="App">
        <div className="App__Header">
          <h1>This is the header</h1>
        </div>
        <div className="App__Content">
          <div className="App__Gutter">
            <TaskList tasks={this.state.tasks} />
          </div>
          <div className="App__Main">
            <CreateForm onSubmitMethod={this.createNew} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

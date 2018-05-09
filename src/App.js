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
  // Make each task Editable

  // Make a create Task Button

  // build a component for create button

  // may want to make "tasks" available on the app level then change then pass them in as props on the list level...

  // it will have create form inside of it but it will be hidden

  // let it slide into place when you click or double click the create button

  // follow the template structure in the other application.

  //

  //

  // also create a "task list" form that lists them all out

  // we want to see these update when you create a new one.

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

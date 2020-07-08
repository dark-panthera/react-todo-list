import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <TodoInput></TodoInput>
            <TodoList></TodoList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
/*
<div className="col-4 bg-warning"><TodoInput /></div>
<div className="col-4 bg-danger">hello from app</div>
<div className="col-4 bg-primary">hello from app</div>
*/
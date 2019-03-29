import React, { Component } from "react";
  import "./App.css";
import TodoEntry from "./components/TodoEntry";
import TodoItms from "./components/TodoItems";
import TodoFooter from "./components/TodoFooter";

import { observer } from "mobx-react";

@observer
class App extends Component {
  
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry />
        <TodoItms />
        <TodoFooter />
      </div>
    );
  }
}

export default App;

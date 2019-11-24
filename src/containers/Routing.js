import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route path="/add" component={AddTodo} />
      </Switch>
    </Router>
  );
};

export default Routing;

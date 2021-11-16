import React from 'react';
import Form from './components/contact-form/Form'
import Home from './components/home/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/add"><Form /></Route>
          <Route exact path="/update/:id"><Form /></Route>
          <Route exact path=""><Home /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;

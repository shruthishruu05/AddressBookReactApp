import React from 'react';
import Form from './components/contact-form/Form'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path=""><Form /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;

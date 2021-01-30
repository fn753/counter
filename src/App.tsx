import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import { View } from './features/view/View';
import { Navigation } from './Components/Navigation/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Counter} exact/>
          <Route path="/view" component={View}/>
        </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
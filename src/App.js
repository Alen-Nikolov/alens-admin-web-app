import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';
import Fuel from './components/Fuel/Fuel';
import Currency from './components/Currency/Currency';
import Timetable from './components/Timetable/Timetable';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
            <Sidebar/>
            <Switch>
                <Route exact path="/" component={Weather}/>
                <Route exact path="/fuel" component={Fuel}/>
                <Route exact path="/currency" component={Currency}/>
                <Route exact path="/timetable" component={Timetable}/>
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;

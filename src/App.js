import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;

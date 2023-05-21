// import logo from './logo.svg';
import './App.css';
import News from './components/News';

import React, { Component } from 'react'

import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}


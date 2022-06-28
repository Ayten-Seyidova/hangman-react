import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { Hangman } from './Components/Hangman';

class App extends Component {
  render() {
    return (
      <div className='container m-auto text-center'>
        <Hangman />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import TravelObject from './Components/TravelObject'

class App extends React.Component {
  render () {
    return(
    <div className="App">
      <TravelObject type='flight'/>
    </div>
    );
  }
}

export default App;

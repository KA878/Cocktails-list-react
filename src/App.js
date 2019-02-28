import React, { Component } from 'react';
import './App.css';
import CocktailsListContainer from './components/CocktailsListContainer';
import CocktailDetailsContainer from './components/CocktailDetailsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <main>
            <CocktailsListContainer />
            <CocktailDetailsContainer />
          </main>
          
        </header>
      </div>
    );
  }
}

export default App;

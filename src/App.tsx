import React from 'react';
import './App.css';

import mainPage from './pages/mainPage';

function App() {
  return (
    <div className="App">
      <div className="greeting content App-header">
        {mainPage('Hello friend!')}

        <p>This is New todo list project for private purpose</p>
      </div>
    </div>
  );
}

export default App;

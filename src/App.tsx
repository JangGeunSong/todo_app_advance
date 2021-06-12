import React from 'react';
import './App.css';

import mainPage from './pages/mainPage';

function App() {
  return (
    <div className="App">
      <div className="greeting content App-header">
        {mainPage('Hello friend! this is todolist test web page')}
      </div>
    </div>
  );
}

export default App;

import './App.css';

import router from './pages/common/Router';

function App() {
  return (
    <div className="App">
      <div className="greeting content App-header">
        {router()}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
//import Slider from 'react-input-slider';
import MainPage from './components/MainPage';
import List from './components/MyList';
import './App.css';

function App() {
  return (
    <div className="App">       
      <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <List />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <MainPage />
        </div>   
    </div>
  );
}

export default App;

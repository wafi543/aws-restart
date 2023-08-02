import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import UserSelector from './userSelector';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserSelector></UserSelector>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import UserSelector from './userSelector';


const router = createBrowserRouter([
  {path: '/', element: <UserSelector isGrouped={false}></UserSelector>},
  {path: '/groups', element: <UserSelector isGrouped={true}></UserSelector>}
])

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router}></RouterProvider>
      </header>
    </div>
  );
}

export default App;

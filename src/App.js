import React from 'react';
import './App.css';
import Login from './app/Login'
import Logout from './app/Logout'
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="App">
     {user? <Logout /> : <Login/>}
    </div>
  );
}

export default App;

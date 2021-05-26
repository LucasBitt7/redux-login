import {useState} from 'react'
import "./Login.css"
import {useSelector} from 'react-redux'
import {selectUser} from '../features/userSlice'
import { logout } from "../features/userSlice"
import {useDispatch} from 'react-redux'

const Logout = () => {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  }

  return(
    <div className="logout">
    <h1>
        Welcome
         <span className="user_name">{user.name}</span>
         
    </h1>
    <button className="logout_button" onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout
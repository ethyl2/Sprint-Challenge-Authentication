import React, { useState } from 'react';
import logo from './images/tie.svg';
import './App.scss';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';

import Signup from './components/Signup';
import Jokes from './components/Jokes';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

function App() {
  const [user, setUser] = useState({username: '', password: '', department: ''})

  const registerUser = (user, push) => {
    axios.post('http://localhost:3300/api/auth/register', user)
      .then(response => {
        console.log(response)
        setUser(response.data);
        localStorage.setItem('token', response.data.token);
        push('/jokes');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const loginUser = (user, push) => {
    console.log('user to submit: ', user);
    axios.post('http://localhost:3300/api/auth/login', user)
      .then(response => {
        console.log(response)
        setUser(response.data.user);
        localStorage.setItem('token', response.data.token);
        push('/jokes');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <h1>Dad Jokes</h1>
      
        <nav>
         <NavLink to='/home'>Home</NavLink>
         <NavLink to='/signup'>Sign Up</NavLink>
         <NavLink to='/signin'>Sign In</NavLink>
         <NavLink to='/jokes'>Jokes</NavLink>
         <NavLink to='/signout'>Sign Out</NavLink>
       </nav>
      </header>

      <div className='main-content'>
        <Route exact path='/' component={Home} />
        <Route path='/signup' render={props => <Signup {...props} registerUser={registerUser} />} />
        <Route path='/signin' render={props => <SignIn {...props} loginUser={loginUser} />} />
        <Route path='/jokes' component={Jokes} /> 
        <Route path='/signout' component={SignOut} />
      </div>

      <footer>
        <a href="https://www.stockio.com/free-icon/neck-tie-full-color">Tie icon from stockio.com</a>
        <p>Copyright 2020 Heather Nuffer</p>
      </footer>

    </div>
  );
}

export default App;

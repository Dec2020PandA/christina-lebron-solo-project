import React from 'react';
import { Router } from "@reach/router";
import './styles.scss';

import Nav from './components/Nav';
import LoginPage from './components/LoginPage';
import NewAcctPage from './components/NewAcctPage';

import Dashboard from './components/Dashboard';
import Reading from './components/Reading';
import ToRead from './components/ToRead';
import HaveRead from './components/HaveRead';

import SocialFeed from './components/SocialFeed';
import Goals from './components/Goals';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <div className="app">
      <div className="nav-section">
        <Nav />
      </div>
      <div className="main-section">
        <Router>
          <LoginPage path="/" />
          <NewAcctPage path="/create-account" />

          <Dashboard path="/dashboard" />
          <Reading path="/books/reading" />
          <ToRead path="/books/to-read" />
          <HaveRead path="/books/have-read" />

          <SocialFeed path="/social-feed" />
          <Goals path="/goals" />
          <UserProfile path="/my-profile" />

        </Router>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {

  const changeTabState = e => {
    e.target.classList.toggle("open");
  }

  return (
    <ul className="nav">
      <li className="nav-item logo">BOOK APP</li>
      <li className="nav-item"><Link to="/dashboard"><i className="fas fa-home"></i> Dashboard</Link></li>
      <li className="nav-item parent" onClick={ e => changeTabState(e) }><i className="fas fa-book"></i> Books
        <ul className="subnav">
          <li className="subnav-item"><Link to="/books/reading">Reading</Link></li>
          <li className="subnav-item"><Link to="/books/to-read">To Read</Link></li>
          <li className="subnav-item"><Link to="/books/have-read">Have Read</Link></li>
        </ul>
      </li>
      <li className="nav-item"><Link to="/social-feed"><i className="fas fa-users"></i> Friends</Link></li>
      <li className="nav-item"><Link to="/goals"><i className="fas fa-clipboard-check"></i> Goals</Link></li>
      <li className="nav-item profile"><Link to="/my-profile"><i className="fas fa-book-reader"></i> View My Profile</Link></li>
      <li className="nav-item"><Link to="/"><i className="fas fa-sign-out-alt"></i> Sign Out</Link></li>
    </ul>
  )
}

export default Nav;
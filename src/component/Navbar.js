import React from 'react'
import { Link } from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks'

function Navbar(props) {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">District Digital Portal</Link>
        <SignedOutLinks />
      </div>
    </nav>
  );
}

export default Navbar
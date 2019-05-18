import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
       <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">Emaily</a>
          <ul id="nav-mobile" className="right">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="/auth/google">Login with google</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

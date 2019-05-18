import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent(){
    switch(this.props.auth) {
      case null:
      return;
      case false:
        return (
            <ul id="nav-mobile" className="right">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="/auth/google">Login with google</a></li>
            </ul>
        );
      default:
        return (
            <ul id="nav-mobile" className="right">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="/api/logout">Logout</a></li>
            </ul>
        );
    }
  }

  render() {
    return (
       <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">Emaily</a>
          {
            this.renderContent()
          }
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
}

export default connect(mapStateToProps)(Header);

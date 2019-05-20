import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent(){
    switch(this.props.auth) {
      case null:
      return;
      case false:
        return (
            <ul id="nav-mobile" className="right">
              <li><a href="/auth/google">Login with google</a></li>
            </ul>
        );
      default:
        return (
            <ul id="nav-mobile" className="right">
              <li><a href="/surveys">Add Credits</a></li>
              { /*
              <li><a href="/surveys/new">New Survey</a></li>
              */}
              <li><a href="/api/logout">Logout</a></li>
            </ul>
        );
    }
  }

  render() {
    return (
       <nav>
        <div className="nav-wrapper">
          <Link to= { this.props.auth? '/surveys' : '/'} className="left brand-logo">Emaily</Link>
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

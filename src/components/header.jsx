import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header-box">
        <header className="header">
          <img
            className="header-logo"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
          />
          <span className="header-text">YouTube</span>
          <input
            type="text"
            className="header-input"
            placeholder="Search"
          />
          <div className="header-search">
            <img
              className="header-search-img"
              type="submit"
              src={`${process.env.PUBLIC_URL}/images/search.png`}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
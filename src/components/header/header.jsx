import React, { Component } from 'react';
import styles from './header.module.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.headerbox}>
        <header className={styles.header}>
          <img
            className={styles.logo}
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
          />
          <span>YouTube</span>
          <input
            type="text"
            className={styles.searchinput}
            placeholder="Search"
          />
          <div className={styles.searchbox}>
            <img
              className={styles.searchimg}
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
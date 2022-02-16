import React, { Component } from 'react';
import styles from './header.module.css';

const Header = (props) => (
  <div className={styles.headerbox}>
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={`/images/logo.png`}
      />
      <span>YouTube</span>
      <input
        type="text"
        className={styles.searchinput}
        placeholder="Search"
      />
      <button type="submit" className={styles.searchbox}>
        <img
          className={styles.searchimg}
          src={`/images/search.png`}
        />
      </button>
    </header>
  </div>
);

export default Header;
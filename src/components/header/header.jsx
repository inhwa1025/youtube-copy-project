import React, { memo, useRef } from 'react';
import styles from './header.module.css';

const Header = memo(({onSearch}) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if(event.key === 'Enter') {
      handleSearch();
    }
  };

  return(
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={`/images/logo.png`}
      />
      <span>YouTube</span>
      <input
        ref={inputRef}
        type="text"
        className={styles.searchinput}
        placeholder="Search"
        onKeyPress={onKeyPress}
      />
      <button 
        type="submit" 
        className={styles.searchbox}
        onClick={onClick}
      >
        <img
          className={styles.searchimg}
          src={`/images/search.png`}
        />
      </button>
    </header>
  )
});

export default Header;
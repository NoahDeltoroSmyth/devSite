import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/contact">
        <h2>Contact</h2>
      </Link>
      <Link to="personal-projects">
        <h2>Personal Projects</h2>
      </Link>
      <Link to="/">
        <h2>Bio</h2>
      </Link>
      <Link to="code-projects">
        <h2>Code Projects</h2>
      </Link>
    </div>
  );
};

export default Header;

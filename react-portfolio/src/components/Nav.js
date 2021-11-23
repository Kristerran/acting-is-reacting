import React from 'react';
import { Link } from 'react-router-dom';
const styles = {
  ulStyle: {
    Width: 'fitContent',
    height: '50%',
    marginLeft: 'auto',
    marginRight: '10%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'spaceBetween',
  },
  liStyle: {
    borderRadius: '5px',
    padding: '1%',
    height: '90%',
    background: '#57FFB3',
    listStyleType: 'none',
    margin: '2%',
    textAlign: 'center',
    whiteSpace: 'noWrap',
    boxShadow: '2px 2px 10px #96C1AE',
  },
  linkStyle: {
    fontFamily: 'Lovelo-Black',
    color: 'white',
    fontSize: '10px',
    textDecoration: 'none',
    filter: 'drop-Shadow(2px 2px 2px #96C1AE)'
  }
};


function Nav() {
  return (
    <ul className="nav nav-tabs" style={styles.ulStyle}>
      <li className='nav-item'>
      <Link style={styles.linkStyle} to="/about">
            About Me
        </Link>
      </li>
      <li className='nav-item'>
      <Link style={styles.linkStyle} to="/portfolio">
            Portfolio
        </Link>
      </li>
      <li className='nav-item'>
      <Link style={styles.linkStyle} to="/contact">
            Contact
        </Link>
      </li>
      <li className='nav-item'>
      <Link style={styles.linkStyle} to="/resume">
            Resume
        </Link>
      </li>
    </ul>
  );
}

export default Nav;

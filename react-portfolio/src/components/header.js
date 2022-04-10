import React from 'react';
import Nav from './Nav'
import { Link } from 'react-router-dom';

const styles = {
  headerStyle: {
    position: 'relative',
    top: '0',
    background: '#d6e6df',
    width: '100%',
    height: '10vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    width: 'fitContent',
    margin: '2%',
    fontSize: '2vw',
    color: '#3D3D3D',
    filter: 'drop-shadow(2px 2px 2px)',
  },
  imgStyle: {
    height: '90%',
    width: 'fitContent',
    margin: '2%',
    bottom: '50',
    top: '50',
    filter: 'drop-shadow(4px 3px 5px #96C1AE)',
  },
};


function Header() {
  return (
    <div style={styles.headerStyle} className="header">
      <Link style={styles.imgStyle} to="/">
        <img style={styles.imgStyle} src="./Name4.svg" alt="logo" />
      </Link>
      <Nav />
      <div class="custom-shape-divider-top-1649555239">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
    </div>
  );
}

export default Header;
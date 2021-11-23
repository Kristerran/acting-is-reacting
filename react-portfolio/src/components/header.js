import React from 'react';
import Nav from './Nav'
import { Link } from 'react-router-dom';

const styles = {
  headerStyle: {
    zIndex: '2',
    position: 'fixed',
    top: '0',
    background: 'linear-gradient(0deg, rgba(103,103,103,1) 0%, rgba(132,132,132,1) 62%, rgba(88,88,88,1) 100%)',
      width: '100%',
      height: '10vh',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      boxShadow: '0px 2px 10px',
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
    filter: 'drop-shadow(4px 5px 5px #96C1AE)',
  }
};


function Header() {
  return (
    <div style={styles.headerStyle} className="header">
        <Link style={styles.imgStyle} to="/">
            <img style={styles.imgStyle} src="./Name4.svg" alt="logo"/>
        </Link>
        <Nav />
    </div>
  );
}

export default Header;
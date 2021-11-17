import React from 'react';
import Nav from './Nav'
const styles = {
  headerStyle: {
    background: '#848484',
      width: '100%',
      height: '10vh',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      boxShadow: '2px 2px 10px',

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

function Header({ currentPage, handlePageChange }) {
  return (
    <div style={styles.headerStyle} class="header">
        <a href="/" style={styles.imgStyle}>
          <img style={styles.imgStyle} src="./Name4.svg" alt="logo"/>
        </a>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Header;
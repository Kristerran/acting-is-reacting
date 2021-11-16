import React from 'react';
import Nav from './Nav'
const styles = {
  headerStyle: {
      width: '100%',
      height: '10vh',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      boxShadow: '2px 2px 10px lightGrey',

  },
  textStyle: {
    textAlign: 'center',
    width: 'fitContent',
    // marginRight: 'auto',
    margin: '2%',
    fontSize: '2vw',
    color: 'black'
  },
  imgStyle: {
    height: '90%',
    width: 'fitContent',
    margin: '2%',
    bottom: '50',
    top: '50',
    borderRadius: '10%',
    filter: 'drop-shadow(2px 2px 10px lightGrey)'
  }
};

function Header({ currentPage, handlePageChange }) {
  return (
    <div style={styles.headerStyle} class="header">
        <img style={styles.imgStyle} src="./logo.jpg" alt="logo" />
        <h1 style={styles.textStyle}>KRIS TERRAN BAILY</h1>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Header;
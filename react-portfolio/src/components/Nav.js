import React from 'react';

const styles = {
  ulStyle: {
    Width: 'fitContent',
    height: '50%',
    marginLeft: 'auto',
    marginRight: '4%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'spaceBetween',
  },
  liStyle: {
    height: '90%',
    background: 'lightBlue',
    listStyleType: 'none',
    margin: '2%',
    textAlign: 'center',
    whiteSpace: 'noWrap',

  },
  aStyle: {
    fontSize: '20px',
    textDecoration: 'none',
    color: 'black'
  }
};

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={styles.ulStyle}>
      <li className="nav-item" style={styles.liStyle}>
        <a 
          style={styles.aStyle}
          href="#aboutMe"
          onClick={() => handlePageChange('aboutMe')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item" style={styles.liStyle}>
        <a
          style={styles.aStyle}
          href="#contact"
          onClick={() => handlePageChange('contact')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item" style={styles.liStyle}>
        <a
          style={styles.aStyle}
          href="#portfolio"
          onClick={() => handlePageChange('portfolio')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item" style={styles.liStyle}>
        <a
          style={styles.aStyle}
          href="#resume"
          onClick={() => handlePageChange('resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Nav;

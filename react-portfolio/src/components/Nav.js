import React from 'react';

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
  aStyle: {
    fontFamily: 'Lovelo-Black',
    color: 'white',
    fontSize: '10px',
    textDecoration: 'none',
    filter: 'drop-Shadow(2px 2px 2px #96C1AE)'
  }
};

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={styles.ulStyle}>
      <li className={currentPage === 'aboutMe' ? 'nav-item active' : 'nav-item'}>
        <a 
          href="#aboutMe"
          onClick={() => handlePageChange('aboutMe')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className='nav-link'
        >
          About Me
        </a>
      </li>
      <li className={currentPage === 'contact' ? 'nav-item active' : 'nav-item'}>
        <a
          href="#contact"
          onClick={() => handlePageChange('contact')}
          className='nav-link'
        >
          Contact
        </a>
      </li>
      <li className={currentPage === 'portfolio' ? 'nav-item active' : 'nav-item'}>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('portfolio')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className='nav-link'
        >
          Portfolio
        </a>
      </li>
      <li className={currentPage === 'resume' ? 'nav-item active' : 'nav-item'}>
        <a
          href="#resume"
          onClick={() => handlePageChange('resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className='nav-link'
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Nav;

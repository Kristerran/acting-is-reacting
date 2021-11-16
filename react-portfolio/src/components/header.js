import React from 'react';

const styles = {
  headerStyle: {
      background: 'blue',
  },
  textStyle: {
    fontSize: '50px',
    color: 'red'
  },
};

function Header() {
  return (
    <div style={styles.headerStyle} class="header">
        <h1 style={styles.textStyle}>HEADER</h1>
    </div>
  );
}

export default Header;
import React from 'react';

const styles = {
  footerStyle: {
      background: 'blue',
  },
  textStyle: {
    fontSize: '50px',
    color: 'red'
  },
};

function Footer() {
  return (
    <div style={styles.footerStyle} class="footer">
        <h1 style={styles.textStyle}>FOOTER</h1>
    </div>
  );
}

export default Footer;
import React from 'react';

const styles = {
  footerStyle: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '5vh',
    position: 'absolute',
    bottom: '0',
    background: 'blue',
  },
  textStyle: {
    fontSize: '10px',
    color: 'red'
  },
};

function Footer() {
  return (
    <div style={styles.footerStyle} class="footer">
        <h4 style={styles.textStyle}>FOOTER</h4>
    </div>
  );
}

export default Footer;
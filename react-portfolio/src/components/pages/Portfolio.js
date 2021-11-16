import React from 'react';

const styles = {
  portfolioStyle: {
      background: 'blue',
  },
  textStyle: {
    fontSize: '50px',
    color: 'red'
  },
};

function Portfolio() {
  return (
    <div style={styles.portfolioStyle} class="contact">
        <h1 style={styles.textStyle}>PORTFOLIO</h1>
    </div>
  );
}

export default Portfolio;
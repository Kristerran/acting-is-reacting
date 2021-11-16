import React from 'react';

const styles = {
  resumeStyle: {
      background: 'blue',
  },
  textStyle: {
    fontSize: '50px',
    color: 'red'
  },
};

function Resume() {
  return (
    <div style={styles.resumeStyle} class="contact">
        <h1 style={styles.textStyle}>RESUME</h1>
    </div>
  );
}

export default Resume;
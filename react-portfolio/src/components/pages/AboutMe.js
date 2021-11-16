import React from 'react';

const styles = {
  aboutStyle: {
      background: 'blue',
  },
  textStyle: {
    fontSize: '50px',
    color: 'red'
  },
};

function AboutMe() {
  return (
    <div style={styles.aboutStyle} class="aboutMe">
        <h1 style={styles.textStyle}>ABOUT ME</h1>
    </div>
  );
}

export default AboutMe;
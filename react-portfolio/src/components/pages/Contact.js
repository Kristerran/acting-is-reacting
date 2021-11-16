import React from 'react';

const styles = {
  contactStyle: {
      background: 'blue',
  },
  textStyle: {
    fontSize: '50px',
    color: 'red'
  },
};

function Contact() {
  return (
    <div style={styles.contactStyle} class="contact">
        <h1 style={styles.textStyle}>CONTACT</h1>
    </div>
  );
}

export default Contact;
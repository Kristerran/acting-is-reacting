import React from 'react';

const styles = {
  headingStyle:{
    color: '#3D3D3D',
    textAlign: 'center',
    fontFamily: 'Lovelo-Black',
    filter: 'drop-shadow(3px 1px 2px)',
  },
  aboutStyle: {
    minHeight: '85vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingTop: '10vh'
  },
  textStyle: {
  },
  imgStyle: {
    width: '20%',
  }
};

function AboutMe() {
  return (
    <div className="aboutMe">
        <div className='card' id='aboutMeCard' style={styles.aboutStyle}>
            <h2 id='aboutMe' style={styles.headingStyle}>Kris Terran Baily</h2>
            <img style={styles.imgStyle} src="./IMG_20200807_175956.jpg" alt="Kristopher Terran Baily Portrait" id='portrait' />
            <p style={styles.textStyle}>Kris Terran Baily is a web designer currently enrolled in Uc davis web development bootcamp.
                Kris has a background in art and creative problem solving. They specialize in creating beautiful
                websitess
                with creative themes and content.</p>
            <p style={styles.textStyle}>Follow the button above to see examples of Kris' work in school and personal projects.</p>
            <p style={styles.textStyle}>Kris is currently available for hire! If you are interested in working with them, please take a look at
                their resume and contact me pages.
                Feel free to reach out with questions or comments.
            </p>
        </div>
    </div>
  );
}

export default AboutMe;
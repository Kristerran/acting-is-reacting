import React from 'react';

const styles = {
  headingStyle:{
    marginBottom: '2%',
    color: '#3D3D3D',
    textAlign: 'center',
    fontFamily: 'Lovelo-Black',
    filter: 'drop-shadow(3px 1px 2px)',
  },
  aboutStyle: {
    minHeight: '85vh',
    width: '80%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingTop: '10vh'
  },
  textStyle: {
    width: '90%',
    margin: '1%',
    fontFamily: 'Montserrat',
  },
  imgStyle: {
    filter: 'drop-shadow(3px 4px 10px #96C1AE)',
    width: '20%',
    marginBottom: '2%',
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
            <p style={styles.textStyle}>Kris is currently available for hire! If you are interested in working with them, please take a look at
                their resume and contact me pages.
                Feel free to reach out with questions or comments.
            </p>
        </div>
    </div>
  );
}

export default AboutMe;
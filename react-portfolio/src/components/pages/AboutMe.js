import React from 'react';

const styles = {
  headingStyle: {
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
        <p style={styles.textStyle}>
          I am a full stack web developer who leverages their art and design background to create aesthetically pleasing, responsive, mobile first, web applications.
        </p>
        <p style={styles.textStyle}>
          I have earned a certificate in full stack web development from UC Davis Web Development Bootcamp. I have experience with Javascript, React, HTML5, CSS3, and more. I am skilled in teamwork, creativity, and problem solving. I recently showcased my skills in a salon booking application in which I utilized my experience with React and API Integration to create a booking calendar from scratch for use with Full Calendar.
        </p>
        <p style={styles.textStyle}>
          My creativity, paired with my technical knowledge, and quick learning ability make me a valuable asset to a development team.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
import React from 'react';
import Card from './Card'
const styles = {
  portfolioStyle: {
    minHeight: '80vh',
    marginTop: '15vh',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    flexBasis: '100%',
    textAlign: 'center'
  },
};

function Portfolio() {
  return (
    <div style={styles.portfolioStyle} class="portfolio">
        <h1 style={styles.textStyle}>PORTFOLIO</h1>
        <Card title='Lai Salon' link='https://github.com/Kristerran/salon-project' src='./screenshots/laiSalon.png' description='Group project #3 Lai Salon '/>
        <Card title='Pillar Art Gallery' link='https://github.com/Kristerran/pillarArtApplication' src='./screenshots/pillar.png' description='Group project #2 Pillar Art Gallery'/>
        <Card title='There and Back Travel app' link='https://github.com/Kristerran/thereAndBack' src='./screenshots/thereAndBack.png' description='Group project #1 There and Back. '/>
        <Card title='Tech blog' link='https://github.com/Kristerran/homeworkThirteen' src='./screenshots/techBlog.png' description='Tech blog, Allows multiple users to sign up, login, and post about tech!'/>
        <Card title='Virtuefig' link='https://github.com/projectKroak' src='./screenshots/virtuefig.png' description='Virtuefig, first personal project (still in construction)'/>
    </div>
  );
}

export default Portfolio;
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
        <Card title='Lai Salon' link='https://shrouded-springs-95173.herokuapp.com/' githubLink='https://github.com/Kristerran/salon-project' src='./screenshots/laiSalon.png' title='Lai Salon' description='Professional salon website featuring stylist information, custom built booking software, map API Integration, and fully featured ecommerce page.'/>
        <Card title='Pillar Art Gallery' link='https://www.pillargallery.com/' githubLink='https://github.com/Kristerran/pillarArtApplication' src='./screenshots/pillar.png' title='Pillar Art Gallery' description='Virtual art gallery utilizing pure CSS to create an illusion of 3d space.'/>
        <Card title='There and Back Travel app' link='https://lordlowdar.github.io/thereandback/' githubLink='https://github.com/Kristerran/thereAndBack' src='./screenshots/thereAndBack.png' title='There and Back' description='Travel app with built-in directions, pre-trip planner, and location info API integration.. '/>
        <Card title='Virtuefig' link='https://www.virtuefig.com' githubLink='https://github.com/Kristerran/projectKroak' src='./screenshots/virtuefig.png' title='Virtuefig' description='First personal project during school. Generate simple tabletop rpg avatars using html form.'/>
    </div>
  );
}

export default Portfolio;
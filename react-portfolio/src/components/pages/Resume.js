import React from 'react';

const styles = {
  resumeStyle: {
    minHeight: '85vh',
    width: '90%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    padding: '5%',
    paddingTop: '15vh',
  },
  downloadStyle: {
    borderRadius: '5px',
    padding: '1%',
    height: '90%',
    background: '#57FFB3',
    margin: '2%',
    whiteSpace: 'noWrap',
    boxShadow: '2px 2px 10px #96C1AE',
    fontFamily: 'Lovelo-Black',
    color: 'white',
    fontSize: '10px',
    textDecoration: 'none',
    marginLeft: 'auto',

  },
  imageStyle: {
    borderRadius: '100%',
    width: '20vh',
    height: '20vh',
    objectFit: 'cover',
    float: 'left',
  },
  headingStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    padding: '2%',
    background: '#fb5959',
    borderRadius: '5px'

  },
  textStyle: {
  },
};

function Resume() {
  return (
    <div style={styles.resumeStyle} className="resume">
      <a style={styles.downloadStyle} href="./Resume 2022 Kris Terran Baily.pdf" download>
        Download
      </a>
      <div className='resumeContent'>
        <h1>
          Kris Terran Baily
        </h1>
        <ul>
          <li>
            Citrus Heights, CA 95610
          </li>
          <li>
            Phone: (530) 417-0111
          </li>
          <li>
            Email: Kristopherbaily@gmail.com
          </li>
          <li>
            LinkedIn: https://www.linkedin.com/in/kris-terran-baily/
          </li>
          <li>
            GitHub: https://github.com/Kristerran/
          </li>
          <li>
            Portfolio: https://www.kristerranbaily.com
          </li>
        </ul>
        <h2>
          Summary
        </h2>
        <p>
          Full stack web developer, leverages Art and design background to create aesthetically pleasing, responsive, mobile first, web applications. Earned a certificate in full stack web development from UC Davis Web Development Bootcamp. Experience with Javascript, React, HTML5, CSS3, and more. Skilled in teamwork, creativity, and problem solving.
        </p>
        <h2>
          Technical Skills
        </h2>
        <h4>
          Languages:
        </h4>
        <ul>
          <li>
            JavaScript
          </li>
          <li>
            CSS3
          </li>
          <li>
            HTML5
          </li>
          <li>
            SQL
          </li>
        </ul>
        <h4>
          Applications:
        </h4>
        <ul>
          <li>
            GitHub
          </li>
          <li>
            MongoDB
          </li>
          <li>
            MySQL
          </li>
        </ul>
        <h4>
          Tools:
        </h4>
        <ul>
          <li>
            Express
          </li>
          <li>
            React
          </li>
          <li>
            Node.js
          </li>
          <li>
            Handlebars
          </li>
          <li>
            JQuery
          </li>
          <li>
            Bootstrap
          </li>
        </ul>
        <h2>
          Education
        </h2>
        <ul>
          <li>
            Bootcamp Certificate: University of California, Davis, CA
          </li>
          <li>
            6 month intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js and ReactJS.
          </li>
        </ul>
        <h2>
          Projects
        </h2>
        <h4>
          Pillar Art Gallery |
        </h4>
        <ul>
          <li>
            <a href='https://github.com/Kristerran/pillarArtApplication'>
              https://github.com/Kristerran/pillarArtApplication
            </a>
          </li>
          <li>
            <a href='https://www.pillargallery.com/'>
              https://www.pillargallery.com/
            </a>
          </li>
          <li>
            <p>
              Virtual art gallery utilizing pure css to create an illusion of 3d space.
            </p>
          </li>
          <li>
            <p>
              Created application scaffold, developed image upload features, managed Sql database.
            </p>
          </li>
          <li>
            <p>
              MVC Stack, SQL Database, Handlebars renderer, Node.js
            </p>
          </li>
        </ul>
        <h4>
          Lai Salon
        </h4>
        <ul>
          <li>
            <a href='https://github.com/Kristerran/salon-project'>
              https://github.com/Kristerran/salon-project
            </a>
          </li>
          <li>
            <a href='https://shrouded-springs-95173.herokuapp.com/'>
              https://shrouded-springs-95173.herokuapp.com/
            </a>
          </li>
          <li>
            <p>
              Virtual art gallery utilizing pure css to create an illusion of 3d space.
            </p>
          </li>
          <li>
            <p>
              Created application scaffold, developed image upload features, managed Sql database.
            </p>
          </li>
          <li>
            <p>
              MVC Stack, SQL Database, Handlebars renderer, Node.js
            </p>
          </li>
        </ul>
        <h4>
          There and Back
        </h4>
        <ul>
          <li>
            <a href='https://github.com/Kristerran/thereAndBack'>
              https://github.com/Kristerran/thereAndBack
            </a>
          </li>
          <li>
            <a href='https://shrouded-springs-95173.herokuapp.com/'>
              https://shrouded-springs-95173.herokuapp.com/
            </a>
          </li>
          <li>
            <p>
              Travel app with built in directions, pre-trip planner, and location info api integration.
            </p>
          </li>
          <li>
            <p>
              Created trip planning component, integrated mapbox api.
            </p>
          </li>
          <li>
            <p>
              Pure HTML, Javascript, Jquery, Bootstrap.
            </p>
          </li>
        </ul>
        <h2>
          Experience
        </h2>
        <h4>
          Team Lead/ Pet Concierge
        </h4>
        <p>
          2020 – 2022 (Current)
        </p>
        <h5>
          Insight Veterinary Wellness Center
        </h5>
        <p>
          Eldorado Hills, CA
        </p>
        <p>
          Managed Guest relations and communications including email, phone, and in person correspondence. Exhibited Leadership skills during team meetings, training, and shift coordination. Showed multitasking capabilities while surveying animal safety, Animal data management, and sanitization procedures.

        </p>
        <h4>
          Produce Buyer/ Grocery Clerk
        </h4>
        <p>
          2019 – 2020
        </p>
        <h5>
          Placerville Natural Foods Co-op
        </h5>
        <p>
          Placerville, CA
        </p>
        <p>
          Utilized management skills to order, organize, prep, and display Merchandise for the produce department. Showcased creativity while designing store signage, displays, and seasonal displays.
        </p>
        <h4>
          Pet care assistant
        </h4>
        <p>
          2018 – 2019
        </p>
        <h5>
          Dogtopia

        </h5>
        <p>
          Sacramento, CA
        </p>
        <ul>
          <li>
            Developed multitasking capabilities, balancing the needs of pets, team, and personal
            tasks.
          </li>
          <li>
            Showed dedication, studying animal behavior to better serve the role.
          </li>
        </ul>
        <h4>
          Hardlines Team Member/Cashier
        </h4>
        <p>
          2017 – 2018
        </p>
        <h5>
          Target Eldorado Hills, CA
        </h5>
        <ul>
          <li>
            Exhibited self-sufficiency, followed technical directions to set up displays and aisle
            setups.
          </li>
          <li>
            Showcased teamwork, balancing personal tasks and needs of the team.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
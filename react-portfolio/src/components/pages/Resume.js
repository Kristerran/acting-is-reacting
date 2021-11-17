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
    <div style={styles.resumeStyle} class="resume">
        <div class="contact">
        <h1>
            Kris Terran Baily
        </h1>
        <ul>
            <li>
                7711 Greenback Ln
            </li>
            <li>
                Citrus Heights CA, 95610
            </li>
            <li>
                (530) 417-0111
            </li>
            <li>
                Kristopherbaily@gmail.com
            </li>
            <li>
                kristerranbaily.com
            </li>
        </ul>
    </div>

    <div class="workExperience">
        <h2>
            Work Experience
        </h2>
        <h4>
            Insight Veterinary Wellness Center - Team lead/ Pet Concierge
        </h4>
        <h5>
            July 2020-Present
        </h5>
        <p>
            Manages daily schedules and guest relations. Works with scheduling and veterinary software. Coordinates Email
            correspondence and payment protocols. Lead meetings and trainings on dog behaviors and cleaning procedures.
        </p>
        <h4>
            Placerville Natural Foods Co-op- Produce buyer, Cashier, Grocery clerk
        </h4>
        <h5>
            June 2019 – July 2020
        </h5>
        <p>
            In charge of ordering, prepping, and displaying fresh produce. Provided customer service. Created Store signage
            and promotional materials. Worked with ordering and inventory/SKU software.
        </p>
        <h4>
            Dogtopia of Sacramento - Canine coach
        </h4>
        <h5>
            October 2018 - April 2019
        </h5>
        <p>
            Independently operated playrooms of up to twenty dogs. In charge of cleaning procedures and supervision of play.
        </p>
        <h4>
            Target, Town center, El Dorado hills - General Merchandise Expert
        </h4>
        <h5>
            June 2017 - October 2018
        </h5>
        <p>
            Specialized in guest service, and store recovery. Cross-trained on checkout, backroom procedures, Electronics,
            Sales-planning, and grocery department.
        </p>
    </div>
    <div class="skills">

        <h2>
            Skills
        </h2>
        <ul>
            <li>
                HTML5
            </li>
            <li>
                CSS3
            </li>
            <li>
                JavaScript
            </li>
            <li>
                jQuery
            </li>
            <li>
                Bootstrap
            </li>
            <li>
                Express.js
            </li>
            <li>
                React.js
            </li>
            <li>
                Node.js
            </li>
            <li>
                MongoDB
            </li>
            <li>
                MySQL
            </li>
            <li>
                Command Line
            </li>
            <li>
                Git
            </li>
        </ul>
    </div>

    <div class="Education">

        <h2>
            Education
        </h2>
        <ul>
            <li>
                <h4>
                    UC Davis Web Development Bootcamp
                </h4>
                <h5>
                    June 2021 - December 2021
                </h5>
                <p>
                    Full stack Web development bootcamp. Certified in Javascript, HTML5, CSS3, Jquery, Node.js, and React,
                    among other technologies.
                </p>
            </li>
            <li>
                <h4>
                    Udemy- The web developer bootcamp
                </h4>
                <h5>
                    2020-2021
                </h5>
                <p>
                    Studied front end web development and design
                </p>
            </li>
            <li>
                <h4>
                    Folsom Lake College
                </h4>
                <h5>
                    2017-2019
                </h5>
                <p>
                    Coursework in Art, Design, and computer science.
                </p>
            </li>
        </ul>
    </div>
    </div>
  );
}

export default Resume;
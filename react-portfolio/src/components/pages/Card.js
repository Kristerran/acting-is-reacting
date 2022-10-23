import React from 'react';
const styles = {
  cardStyle: {
    background: 'white',
    borderRadius: '5%',
    minWidth: '30%',
    maxWidth: '400px',
    margin: '5%',
    marginTop: '5%',
    marginBottom: '5%',
    padding: '4%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '2px 5px 10px #96C1AE',
  },
  imageStyle: {
    width: '100%',
    boxShadow: '2px 2px 5px #96C1AE',
  },
  linkStyle: {
    textDecoration: 'none',
    
  },
};

function Card(props) {
  return (
    <div style={styles.cardStyle} class="contact">
        <h1 style={styles.textStyle}>{props.name}</h1>
        <a href={props.link}>
        <img style={styles.imageStyle} src={props.src} />
        </a>
        <h4>
          {props.name}
        </h4>
        <a style={styles.linkStyle} href={props.link}>
          {props.link}
        </a>
        <a style={styles.linkStyle} href={props.githubLink}>
          {props.githubLink}
        </a>
        <p>
            {props.description}
        </p>
    </div>
  );
}

export default Card;
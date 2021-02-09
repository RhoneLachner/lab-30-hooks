import React from 'react';
import PropTypes from 'prop-types';
import styles from '../containers/containers.css';

const Villager = ({ name, image, quote, skill, birthday  }) => (
  <figure className={styles.detailItem}>
    <img src={image} alt={name}></img>
    <figcaption>
      <p>Name: {name}</p>
      <p>Quote: {quote}</p>
      <p>Skill: {skill}</p>
      <p>Birthday: {birthday}</p>
    </figcaption>

  </figure>
);

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired
};

export default Villager;

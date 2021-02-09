import React from 'react';
import PropTypes from 'prop-types';
import styles from '../containers/containers.css';

const Villager = ({ name, image }) => (
  <figure className={styles.listItems}>
    <img src={image} alt={name} className={styles.listItems}/>
    <figcaption>{name}</figcaption>
  </figure>
);

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Villager;


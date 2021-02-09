import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ name, image }) => (
  <figure>
   
    <img src={image} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Villager;


import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ name, image, quote, skill, birthday  }) => (
  <figure>
    <img src={image} alt={name}></img>
    <figcaption>
      <p>{name}</p>
      <p>{quote}</p>
      <p>{skill}</p>
      <p>{birthday}</p>
      
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

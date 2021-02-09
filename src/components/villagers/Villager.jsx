import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Villager = ({ _id, name, image, quote }) => (
  <figure>
    <Link to={`/details/${_id}`}>
      <img src={image} alt={name} />
    </Link>
    <figcaption>{name}</figcaption>
    <figcaption>{quote}</figcaption>
  </figure>
);

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  _id: PropTypes.number.isRequired
};

export default Villager;


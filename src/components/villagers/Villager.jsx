import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Villager = ({ _id, name, image }) => (
  <figure>
    <Link to={`/details/${_id}`}>
      <img src={image} alt={name} />
    </Link>
    <figcaption>{name}</figcaption>
  </figure>
);

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  _id: PropTypes.number.isRequired
};

export default Villager;


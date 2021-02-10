import React from 'react';
import PropTypes from 'prop-types';
import Villager from '../villagers/Villager';
import { Link } from 'react-router-dom';
import styles from '../containers/containers.css';

const VillagerList = ({ villagers }) => {
  const villagerElements = villagers.map(villager => (
    <div key={villager._id}>
      <Link to={`/details/${villager._id}`}>
        <Villager {...villager} />
      </Link>
    </div>
  ));

  return (
    <div data-testid="villagers" className={styles.villagerList}>
      {villagerElements}
    </div>
  );
};

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
  })).isRequired
};

export default VillagerList;


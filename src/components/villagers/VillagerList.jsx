import React from 'react';
import PropTypes from 'prop-types';
import Villager from '../villagers/Villager';


const VillagerList = ({ villagers }) => {
  const villagerElements = villagers.map(villager => (
    <li key={villager._id}>
      <Villager {...villager} />
    </li>
  ));

  return (
    <ul>
      {villagerElements}
    </ul>
  );
};

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired
  })).isRequired
};

export default VillagerList;


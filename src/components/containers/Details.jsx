import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVillagerById } from '../villagers/villagerApi';
import VillagerDetails from '../villagers/VillagerDetails';

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [villager, setVillagersById] = useState([]);

  const { _id } = useParams();

  useEffect(() => {
    getVillagerById(_id).then((res) => {
      setVillagersById(res);
      setLoading(false);
    });
  }, []);

  if(loading) return <h1>loading</h1>;
  return <VillagerDetails 
    name={villager.name} 
    image={villager.image}
    quote={villager.quote}
    skill={villager.skill}
    birthday={villager.birthday}
  />;

};

export default Details;

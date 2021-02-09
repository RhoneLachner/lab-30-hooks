export const getVillagers = () => {
  return fetch('https://ac-vill.herokuapp.com/villagers')
    .then(res => res.json());
};

export const getVillagerById = (_id) => {
  return fetch(`https://ac-vill.herokuapp.com/villagers/${_id}`)
    .then(res => res.json());
};

export const getVillagers = () => {
  return fetch('https://ac-vill.herokuapp.com/villagers')
    .then(res => res.json());
};

export const getVillagerById = (id) => {
  return fetch(`https://ac-vill.herokuapp.com/villagers/${id}`)
    .then(res => res.json());
};

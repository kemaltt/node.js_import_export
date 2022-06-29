const more100k = (data) => {
  return data.filter((item) => item.population > 100000);
};

const less100K = (data) => {
  return data.filter((item) => item.population < 100000);
};

module.exports = { more100k, less100K };

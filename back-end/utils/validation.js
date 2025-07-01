const motDePasseValide = (mdp) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{14,}$/;
  return regex.test(mdp);
};

module.exports = { motDePasseValide };
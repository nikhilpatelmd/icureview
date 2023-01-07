/** Returns all trials as a collection. */
const getAllTrials = collection => {
  const projects = collection.getFilteredByGlob('./src/trials/*.md');
  return projects.reverse();
};

module.exports = {
  getAllTrials
};

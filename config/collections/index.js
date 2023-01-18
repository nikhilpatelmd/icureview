// Trials
const getAllTrials = collection => {
  const trials = collection.getFilteredByGlob('./src/trials/**/*.md');
  return trials;
};

module.exports = {
  getAllTrials
};

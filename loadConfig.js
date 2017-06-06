module.exports = fail => {
  // imagine some time-expensive async workload here
  return new Promise((resolve, reject) => {
    if (fail) {
      reject();
    } else {
      resolve({ successMessage: 'Woohoo!' });
    }
  });
};

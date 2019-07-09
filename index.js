const { stat } = require('fs');
const mkdirp = require('mkdirp');

/**
 * Ensure the specified directory path exists
 *
 * @param {string} dir
 * @returns {Promise} A promise that fulfills when the operation completes
 */
module.exports = dir =>
  new Promise((resolve, reject) => {
    stat(dir, (statErr, stats) => {
      if (!statErr && stats.isDirectory()) {
        resolve();
      } else {
        mkdirp(dir, (createErr) => {
          if (createErr) {
            reject(createErr);
          } else {
            resolve();
          }
        });
      }
    });
  });

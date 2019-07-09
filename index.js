const { stat } = require('fs');
const mkdirp = require('mkdirp');

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

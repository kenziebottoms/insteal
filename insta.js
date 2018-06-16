'use strict';

const request = require('request');
const INSTA = 'https://www.instagram.com';

// get all page data from _sharedData object
module.exports.getSharedData = path => {
  return new Promise((resolve, reject) => {
    request(`${INSTA}/${path}`, (err, response, body) => {
      if (err) return reject(new Error('Instagram is being a bitch.'));
      // find the `_sharedData` variable in `body`
      let script = body.split('window._sharedData')[1];
      // grab the next JSON object starting with `{` until it ends with `;` or `<`
      let data = script.slice(script.indexOf('{')).split(/[;<]/ig)[0];
      resolve(JSON.parse(data));
    });
  });
};
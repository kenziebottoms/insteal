'use strict';

const request = require('request');
const INSTA = 'https://www.instagram.com';

// get all page data from _sharedData object
const getSharedData = path => {
  return new Promise((resolve, reject) => {
    request(`${INSTA}/${path}`, (err, response, body) => {
      if (err) return reject({
        status: 500,
        message: "Instagram's being a bitch."
      });
      // find the `_sharedData` variable in `body`
      let script = body.split('window._sharedData')[1];
      // grab the next JSON object starting with `{` until it ends with `;` or `<`
      let data = script.slice(script.indexOf('{')).split(/[;<]/ig)[0];
      resolve(JSON.parse(data));
    });
  });
};

// get all raw data from user's profile
module.exports.profile = user => {
  return new Promise((resolve, reject) => {
    getSharedData(user)
      .then(data => {
        let { user } = data.entry_data.ProfilePage[0].graphql;
        resolve(JSON.stringify(user));
      })
      .catch(err => reject(err));
  });
};

// get all raw data on user's first 12 images
module.exports.feed = (user, limit=12) => {
  return new Promise((resolve, reject) => {
    module.exports.profile(user)
      .then(data => {
        data = JSON.parse(data);
        let nodes = data.edge_owner_to_timeline_media.edges;
        let feed = nodes.map(n => n.node);
        resolve(JSON.stringify(feed.slice(0, limit)));
      })
      .catch(err => console.log(err));
  });
};
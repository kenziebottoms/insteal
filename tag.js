'use strict';

const insta = require('./insta');

// get all raw data from user's profile
module.exports.tag = tagname => {
  return new Promise((resolve, reject) => {
    insta.getSharedData(`explore/tags/${tagname}`)
      .then(data => {
        resolve(data.entry_data.TagPage[0].graphql);
      })
      .catch(err => reject(err));
  });
};
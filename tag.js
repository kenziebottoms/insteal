'use strict';

const insta = require('./insta');

// get all raw data from <tagname>'s explore page
module.exports.tag = tagname => {
  return new Promise((resolve, reject) => {
    insta.getSharedData(`explore/tags/${tagname}`)
      .then(data => {
        resolve(data.entry_data.TagPage[0].graphql);
      })
      .catch(err => reject(err));
  });
};

// get the top <limit> posts on <tagname>'s explore page
module.exports.feed = (tagname, limit = 100) => {
  return new Promise((resolve, reject) => {
    module.exports.tag(tagname)
      .then(data => {
        let nodes = data.hashtag.edge_hashtag_to_media.edges;
        let feed = nodes.map(d => d.node);
        resolve(feed.slice(0, limit));
      })
  });
};
'use strict';

const { getSharedData, cleanFeed } = require('./insta');

// get all raw data from <tagname>'s explore page
const tag = tagname => {
  return new Promise((resolve, reject) => {
    getSharedData(`explore/tags/${tagname}`)
      .then(data => {
        resolve(data.entry_data.TagPage[0].graphql);
      })
      .catch(err => reject(err));
  });
};

// get the top <limit> posts on <tagname>'s explore page
const feed = (tagname, limit = 100) => {
  return new Promise((resolve, reject) => {
    raw_feed(tagname, limit)
      .then(data => {
        let feed = cleanFeed(data);
        resolve(feed.slice(0, limit));
      })
  });
};

// get the top <limit> posts on <tagname>'s explore page
const raw_feed = (tagname, limit = 100) => {
  return new Promise((resolve, reject) => {
    tag(tagname)
      .then(data => {
        let nodes = data.hashtag.edge_hashtag_to_media.edges;
        let feed = nodes.map(d => d.node);
        resolve(feed.slice(0, limit));
      })
  });
};

module.exports = {
  tag,
  feed,
  raw_feed
};
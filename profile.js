'use strict';

const insta = require('./insta');

// get all raw data from user's profile
module.exports.profile = user => {
  return new Promise((resolve, reject) => {
    insta.getSharedData(user)
      .then(data => {
        let { user } = data.entry_data.ProfilePage[0].graphql;
        resolve(user);
      })
      .catch(err => reject(err));
  });
};

// get bio from user's profile
module.exports.bio = user => {
  return new Promise((resolve, reject) => {
    module.exports.profile(user)
      .then(user => {
        let { biography } = user;
        resolve(biography);
      })
      .catch(err => reject(err));
  });
};

// get number of followers from user's profile
module.exports.followers = user => {
  return new Promise((resolve, reject) => {
    module.exports.profile(user)
      .then(user => {
        let { edge_followed_by: { count } } = user;
        resolve(count);
      })
      .catch(err => reject(err));
  });
};

// get number of users followed from user's profile
module.exports.following = user => {
  return new Promise((resolve, reject) => {
    module.exports.profile(user)
      .then(user => {
        let { edge_follow: { count } } = user;
        resolve(count);
      })
      .catch(err => reject(err));
  });
};

// get number of users followed from user's profile
module.exports.pic = user => {
  return new Promise((resolve, reject) => {
    module.exports.profile(user)
      .then(user => {
        let { profile_pic_url_hd } = user;
        resolve(profile_pic_url_hd);
      })
      .catch(err => reject(err));
  });
};

// get all raw data on user's first 12 images
module.exports.feed = (user, limit = 12) => {
  return new Promise((resolve, reject) => {
    module.exports.profile(user)
      .then(data => {
        let nodes = data.edge_owner_to_timeline_media.edges;
        let feed = nodes.map(n => n.node);
        resolve(feed.slice(0, limit));
      })
      .catch(err => console.log(err));
  });
};
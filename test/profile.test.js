'use strict';

const { assert } = require('chai');
const {
  profile,
  bio,
  followers,
  following,
  pic,
  feed,
  raw_feed
} = require('../profile');

describe('profile.js', () => {
  describe('profile', () => {
    it('should return an object', () => {
      profile('kenziebottoms')
        .then(data => {
          assert.isObject(data);
          assert.isDefined(data);
        })
        .catch(err => {
          // auto fail
          assert.isTrue(false);
        });
    });
    it('should have specific properties', () => {
      profile('kenziebottoms')
        .then(data => {
          assert.isTrue(data.hasOwnProperty('blocked_by_viewer'));
          assert.isTrue(data.hasOwnProperty('followed_by_viewer'));
          assert.isTrue(data.hasOwnProperty('has_channel'));
          assert.isTrue(data.hasOwnProperty('edge_felix_combined_draft_uploads'));
        })
        .catch(err => {
          // auto fail
          assert.isTrue(false);
        });
    });
    it('should have integers as followers', () => {
      profile('kenziebottoms')
        .then(data => {
          assert.isNumber(data.edge_follow.count);
          assert.isNumber(data.edge_followed_by.count);
        })
        .catch(err => {
          // auto fail
          assert.isTrue(false);
        });
    });
  });
});
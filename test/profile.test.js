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
        assert.property(data, 'blocked_by_viewer');
        assert.property(data, 'followed_by_viewer');
        assert.property(data, 'has_channel');
        assert.property(data, 'edge_felix_combined_draft_uploads');
      })
      .catch(err => {
        // auto fail
        assert.isTrue(false);
      });
  });
  describe('followers and followed by properties', () => {
    it('should be integers', () => {
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

describe('bio', () => {
  it('should be a string', () => {
    bio('whats')
      .then(data => {
        assert.isDefined(data);
        assert.isString(data);
      })
      .catch(err => {
        // auto fail
        assert.isTrue(false);
      });
  });
});

describe('raw_feed', () => {
  it('should resolve into an array of objects', () => {
    raw_feed('kenziebottoms')
      .then(data => {
        assert.isDefined(data);
        assert.isArray(data);
        assert.isObject(data[0]);
      })
      .catch(err => {
        // auto fail
        assert.isTrue(false);
      });
  });
  it('should have specific properties', () => {
    raw_feed('kenziebottoms')
      .then(data => {
        assert.property(data[0], '__typename');
        assert.property(data[0], 'display_resources');
        assert.property(data[0], 'taken_at_timestamp');
      })
      .catch(err => {
        // auto fail
        assert.isTrue(false);
      });
  });
  describe('shortcode property', () => {
    it('should be a string', () => {
      raw_feed('kenziebottoms')
        .then(data => {
          assert.isString(data[0].shortcode);
        })
        .catch(err => {
          // auto fail
          assert.isTrue(false);
        });
    });
  });
});
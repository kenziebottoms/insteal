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
  it('should return an object', async () => {
    let data = await profile('kenziebottoms');
    assert.isObject(data);
    assert.isDefined(data);
  });
  it('should have specific properties', async () => {
    let data = await profile('kenziebottoms');
    assert.property(data, 'blocked_by_viewer');
    assert.property(data, 'followed_by_viewer');
    assert.property(data, 'has_channel');
    assert.property(data, 'edge_felix_combined_draft_uploads');
  });
});

describe('bio', () => {
  it('should be a string', async () => {
    let data = await bio('whats');
    assert.isDefined(data);
    assert.isString(data);
  });
});

describe('followers', () => {
  it('should be a number', async () => {
    let data = await followers('kenziebottoms');
    assert.isNumber(data);
  });
});

describe('following', () => {
  it('should be a number', async () => {
    let data = await following('kenziebottoms');
    assert.isNumber(data);
  });
});

describe('pic', () => {
  it('should be a string', async () => {
    let data = await pic('kenziebottoms');
    assert.isDefined(data);
    assert.isString(data);
  });
});

describe('raw_feed', () => {
  it('should resolve into an array of objects', async () => {
    let data = await raw_feed('kenziebottoms');
    assert.isDefined(data);
    assert.isArray(data);
    assert.isObject(data[0]);
  });
  it('should have specific properties', async () => {
    let data = await raw_feed('kenziebottoms');
    assert.property(data[0], '__typename');
    assert.property(data[0], 'display_resources');
    assert.property(data[0], 'taken_at_timestamp');
  });
  describe('shortcode property', () => {
    it('should be a string', async () => {
      let data = await raw_feed('kenziebottoms');
      assert.isDefined(data[0].shortcode);
      assert.isString(data[0].shortcode);
    })
  });
});

describe('feed', () => {
  it('should resolve into an array of objects', async () => {
    let data = await feed('kenziebottoms');
    assert.isDefined(data);
    assert.isArray(data);
    assert.isObject(data[0]);
  });
  it('should have specific properties', async () => {
    let data = await feed('kenziebottoms');
    assert.property(data[0], 'thumb_url');
    assert.property(data[0], 'shortcode');
  });
  describe('shortcode property', () => {
    it('should be a string', async () => {
      let data = await feed('kenziebottoms');
      assert.isDefined(data[0].shortcode);
      assert.isString(data[0].shortcode);
    })
  });
});
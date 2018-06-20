'use strict';

const { assert } = require('chai');
const {
  tag,
  feed,
  raw_feed
} = require('../tag');

describe('tag', () => {
  it('should return an object', async () => {
    let data = await tag('tattoos')
    assert.isObject(data);
    assert.isDefined(data);
  });
  it('should have specific properties', async () => {
    let data = await tag('tattoos')
    assert.property(data, 'is_top_media_only');
    assert.property(data, 'edge_hashtag_to_media');
    assert.property(data, 'edge_hashtag_to_top_posts');
    assert.property(data, 'edge_hashtag_to_content_advisory');
  });
});


describe('raw_feed', () => {
  it('should resolve into an array of objects', async () => {
    let data = await raw_feed('tattoos');
    assert.isDefined(data);
    assert.isArray(data);
    assert.isObject(data[0]);
  });
  it('should have specific properties', async () => {
    let data = await raw_feed('tattoos');
    assert.property(data[0], 'comments_disabled');
    assert.property(data[0], 'thumbnail_resources');
    assert.property(data[0], 'taken_at_timestamp');
  });
  describe('shortcode property', () => {
    it('should be a string', async () => {
      let data = await raw_feed('tattoos');
      assert.isDefined(data[0].shortcode);
      assert.isString(data[0].shortcode);
    })
  });
  describe('limit/length', () => {
    it('should be the same', async () => {
      let data = await raw_feed('tattoos', 3);
      assert.isDefined(data);
      assert.isArray(data);
      assert.equal(data.length, 3);
    })
  });
});

describe('feed', () => {
  it('should resolve into an array of objects', async () => {
    let data = await feed('tattoos');
    assert.isDefined(data);
    assert.isArray(data);
    assert.isObject(data[0]);
  });
  it('should have specific properties', async () => {
    let data = await feed('tattoos');
    assert.property(data[0], 'thumb_url');
    assert.property(data[0], 'shortcode');
  });
  describe('shortcode property', () => {
    it('should be a string', async () => {
      let data = await feed('tattoos');
      assert.isDefined(data[0].shortcode);
      assert.isString(data[0].shortcode);
    })
  });
  describe('limit/length', () => {
    it('should be the same', async () => {
      let data = await feed('tattoos', 3);
      assert.isDefined(data);
      assert.isArray(data);
      assert.equal(data.length, 3);
    })
  });
});
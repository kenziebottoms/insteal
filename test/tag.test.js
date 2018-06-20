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
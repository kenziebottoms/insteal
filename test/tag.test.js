'use strict';

const { assert } = require('chai');
const {
  tag,
  feed,
  raw_feed
} = require('../tag');

describe('tag', () => {
  it('should return an object', () => {
    tag('tattoos')
      .then(data => {
        assert.isObject(data);
        assert.isDefined(data);
      })
      .catch(err => {
        // auto fail
        assert.isTrue(false, 'tag promise rejected');
      });
  });
  it('should have specific properties', () => {
    tag('tattoos')
      .then(data => {
        assert.property(data, 'is_top_media_only');
        assert.property(data, 'edge_hashtag_to_media');
        assert.property(data, 'edge_hashtag_to_top_posts');
        assert.property(data, 'edge_hashtag_to_content_advisory');
      })
      .catch(err => {
        // auto fail
        assert.isTrue(false, 'tag promise rejected');
      });
  });
});
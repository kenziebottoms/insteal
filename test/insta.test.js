'use strict';

const { assert } = require('chai');

const {
  getSharedData,
  cleanFeed
} = require('../insta');

describe('getSharedData:profile', () => {
  it('should resolve into an object', () => {
    getSharedData('kenziebottoms')
      .then(data => {
        assert.isObject(data);
        assert.isDefined(data);
      })
      .catch(err => {
        // auto fail
        assert.isTrue(false, 'getSharedData promise rejected');
      });
  });
});

describe('getSharedData:tag', () => {
  it('should resolve into an object', () => {
    getSharedData('explore/tags/tattoos')
      .then(data => {
        assert.isObject(data);
        assert.isDefined(data);
      })
      .catch(err => {
        // auto fail
        assert.isTrue(false, 'getSharedData promise rejected');
      });
  });
});
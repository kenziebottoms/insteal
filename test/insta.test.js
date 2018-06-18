'use strict';

const { assert } = require('chai');

const {
  getSharedData,
  cleanFeed
} = require('../insta');

describe('getSharedData', () => {
  it('should resolve into an object', () => {
    getSharedData('kenziebottoms')
      .then(data => {
        assert.isObject(data);
        assert.isDefined(data);
      })
      .catch(err => {
        // auto fail
        assert.isTrue(false);
      });
  });
});
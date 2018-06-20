'use strict';

const { assert } = require('chai');

const { getSharedData } = require('../insta');

describe('getSharedData:profile', () => {
  it('should resolve into an object', async () => {
    let data = await getSharedData('kenziebottoms');
    assert.isObject(data);
    assert.isDefined(data);
  });
});

describe('getSharedData:tag', () => {
  it('should resolve into an object', async () => {
    let data = await getSharedData('explore/tags/tattoos');
    assert.isObject(data);
    assert.isDefined(data);
  });
});
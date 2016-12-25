'use strict'
const assert = require('assert');
const __ = require('./lex/lib')

describe('underscore-recreation', () => {
  describe('first', () => {
    it("should return the first number in an array.", () => {
      assert.equal(1, __.first([1, 2, 3, 4, 5]))
    })
  })
  describe('last', () => {
    it("should return the last number in an array.", () => {
      assert.equal(5, __.last([1, 2, 3, 4, 5]))
    })
  })
  describe('flatten', () => {
    it("should flatten the array.", () => {
      assert.equal([1, 2, 3, 4], __.flatten([1, [2], [3, [[4]]]]))
    })
  })
})

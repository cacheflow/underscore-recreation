'use strict'
const assert = require('assert');
const __ = require('./dist/lib')
const expect = require('chai').expect
const should = require('chai').should();

describe('underscore-recreation', function()  {
  describe('first', function() {
    it("should return the first number in an array.", function() {
      expect(__.first([1, 2, 3, 4, 5])).to.eql([1])
    })
  })

  describe('last', function () {
    it("should return the last number in an array.", function() {
      expect(__.last([1, 2, 3, 4, 5])).to.eql([5])
    })
  })
  describe('flatten', function() {
    it("should flatten the array.", function() {
      expect(__.flatten([1, [2], [3, [[4]]]])).to.eql([1, 2, 3, 4])
    })
  })

  describe('pluck', function() {
    it("should extract values from an array of objects.", function() {
      let stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
      expect(__.pluck(stooges, "name")).to.eql(["moe", "larry", "curly"])
    })
  })

  describe('indexOf', function() {
    it("should return index of a given value.", function() {
      expect(__.indexOf([1, 2, 3], 2)).to.equal(1)
    })
  })

  describe('contains', function() {
    it("should return true or false if a given value exists within an array", function() {
      expect(__.contains([1, 2, 3], 2)).to.equal(true)
    })
  })

  describe('filter', function() {
    it("should return a new copy of an array with the desired value.", function() {
      expect(__.filter([1, 2, 3], function(el) {
        return el == 2
      })).to.eql([2])
    })
  })

  describe('every', function() {
    it("should ensure each value in an array matches a truth test.", function() {
      expect(__.every(["hello", "world", "from", "la"], function(el) {
        return typeof el == 'string'
      })).to.equal(true)
    })
  })

  describe('some', function() {
    it("should ensure a value in an array match a truth test.", function() {
      expect(__.some(["hello", "world", "from", 1], function(el) {
        return typeof el == 'number'
      })).to.equal(true)
    })
  })

  describe('reduce', function() {
    it("should reduce all values in an array to one single value.", function() {
      expect(__.reduce([1, 2, 3], function(prev, curr) {
        return prev + curr
      }, 0)).to.eql(6)
    })
  })

  describe('difference', function() {
    it("should return the values from array that are not present in the other arrays.", function() {
      expect(__.difference([1, 2, 3, 4, 5], [5, 2, 10])).to.eql([1, 3, 4])
    })
  })

})

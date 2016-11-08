'use strict'
 const __ = require('./lex/lib')

 console.log(__.first([1, 2, 3, 4], 2))
 console.log(__.last([1, 2, 3, 4], 3))
 console.log(__.each([1, 2, 3, 4], () => console.log('hello world')))
 console.log(__.filter(["Chipotle", "Taco Bell", "Panda Express"], (restaurant) => restaurant == "Chipotle" ))
 console.log(__.reject(["Chipotle", "Taco Bell", "Panda Express"], (restaurant) => restaurant == "Taco Bell" ))
 console.log(__.indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7, true))

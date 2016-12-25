'use strict'
 const __ = require('./lex/lib')
 var iceCream = {flavor: "chocolate", cake: "vanilla"};

console.log(__.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots", soap: "dove", cake: "chocolate"}, {flavor: "strawberry", sprinkles: "coconut", soap: "olay", cake: "pound"}))

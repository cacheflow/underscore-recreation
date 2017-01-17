  'use strict'
const __ = {}

__.first = (arr, n) => {
  return arr.slice(0, Math.max(0, n) || 1)
}

__.last = (arr, n) => {
  return arr.slice(-Math.abs(n) || -1)
}

__.debounce = (func, wait, immediate) => {
  let timeout;
  return function() {
    var args = arguments;
    let later = function() {
      var context = this;
      timeout = null
      if(!immediate) {
        func.apply(this, args)
      }
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait || 1000)
    if(!later && immediate) {
      func.apply(context, args)
    }
  }
}

__.throttle = (func, limit) => {
  var pauseExecution = false;
  return function() {
    var args = arguments;
    if(!pauseExecution) {
      func.apply(this. args)
      pauseExecution = true
      setTimeout(() => {
        pauseExecution = false
      }, limit || 500)
    }
  }
}

__.memoize = function(func, depsFunc) {
  var cache = {}
  var key = JSON.stringify(depsFunc || "", arguments)
  return function() {
    if(cache.hasOwnProperty(key)) {
      return cache[key]
    }
    else {
      var val = func.apply(this, arguments)
      cache[key] = val
      return val
    }
  }
}

__.each = (list, iteratee, context) => {
  let copyOfList;
  if(Array.isArray(list)) {
    copyOfList = list.slice()
    for(var i = 0; i < copyOfList.length; ++i) {
      iteratee.call(context || this, list[i], i, list)
    }
  }
  else {
    copyOfList = {}
    for(var key in list) {
      copyOfList[key] = list[key]
      iteratee.call(context || this, copyOfList[key], key, copyOfList)
    }
  }
  return copyOfList
}

 __.binarySearch = (arr, val) => {
  let beginning = 0;
  let end = arr.length - 1;
  let middle;

  while(beginning <= end) {
    middle = Math.floor((beginning + end) / 2)
    if(val === arr[middle]) {
      return middle;
    }
    else {
      if(val > arr[middle]) {
        beginning = middle + 1
      }
      else {
        end = middle - 1
      }
    }
  }
}

__.pluck = (list, propertyName) => {
  return __.map(list, (element) => {
    return element[propertyName]
  })
}

 __.linearSearch = (arr, val, indexToStartFrom) => {
  let arrIndex;
  for(let i = indexToStartFrom || 0; i < arr.length; i++) {
     if(val == arr[i]) {
      arrIndex = i
      return arrIndex
    }
  }
  return false
}

 __.indexOf = (arr, val, isSorted) => {
  let searchAlgo = isSorted == true ? __.binarySearch(arr, val) : __.linearSearch(arr, val, isSorted)
  if(isSorted == true) {
    return searchAlgo != undefined || false ? searchAlgo : false
  }
  return searchAlgo == undefined ? false : searchAlgo
}

__.contains = (list, value, fromIndex) => {
  let val = __.indexOf(list, value, fromIndex)
  return val ? true : false
}

 __.filter = (list, predicate, context) => {
  let newArr = []
  __.map(list, (element, key, list) => {
    if(predicate.call(context || this, element, key, list)) {
      newArr = newArr.concat(element)
    }
  })
  return newArr
}

__.map = (list, iteratee, context) => {
  let results = []
  __.each(list, (value, key, collection) => {
    results = results.concat(iteratee.call(context || this, value, key, collection))
  })
  return results
}

__.every = (list, predicate, context) => {
  let truthNum = 0;
  __.each(list, ((element) => {
    if(predicate.call(context, list[element])) {
      truthNum++
    }
  }))
  return truthNum === list.length ? true : false
}

__.some = (list, predicate, context) => {
  return !__.every(list, (i) => {
    return !predicate.call(context || this, i)
  })
}

__.reduce = (list, iteratee, memo, context) => {
  let accumulatedResult;
  memo === undefined ? accumulatedResult = list[0] : accumulatedResult = memo
  __.each(list, ((value, key, list) => {
    accumulatedResult = iteratee.call(context || this, accumulatedResult, value)
  }))
  return accumulatedResult
}

__.flatten = (arr) => {
  let newArr = []
  __.each(arr, ((val) => {
    newArr = newArr.concat(Array.isArray(val) ? __.flatten(val) : val)
  }))
  return newArr
}

__.invoke = function(list, methodName, args) {
  if(__.hasOwnProperty(methodName)) {
    return __.map(list, function(element) {
      return __[methodName](element)
    })
  }
}

__.once = function(func) {
    let called = false
    let calledResult;
    let argumentsWithoutCallback = __.reject(arguments, (element, key, index) => typeof element == "function")
    if(!called) {
      calledResult = argumentsWithoutCallback.length > 0 ? func(argumentsWithoutCallback[0]) : func()
      called = true
    }
    return calledResult
}

__.difference = function(array, others)  {
  let cacheObj = {}
  let results = []
  let argumentsLength = arguments.length
  while(argumentsLength > 0) {
    if(argumentsLength > 0) {
      __.each(arguments[argumentsLength], ((element, key, list) => {
        cacheObj[element] = element
      }))
    }
    else {
      __.each(arguments[argumentsLength], ((element, key, list) => {
        return !cacheObj.hasOwnProperty(element) ? results.push(element) : null
      }))
    }
    argumentsLength -= 1
  }
  return results
}

__.zip = function() {
    let argumentsLength = arguments.length;
    let i = 0;
    let cacheObj = {}
    let results = []
    Object.keys(arguments).map(key => cacheObj[key] = [])
    while(i < arguments.length) {
      __.each(arguments[i], ((element, key, list) => {
        if(cacheObj.hasOwnProperty(key)) {
          cacheObj[key] = cacheObj[key].concat(element)
        }
      }))
      i += 1
    }
    __.map(cacheObj, (element, key, list) => results.push(element))
    return results
}

__.intersection = function(arrays)  {
  var cacheObj = {}
  let results = []
  let argumentsLength = arguments.length;
  while(0 < argumentsLength) {
    argumentsLength -= 1
    __.each(arguments[argumentsLength], (element) => {
      if(!cacheObj.hasOwnProperty(element)) {
        cacheObj[element] = 1
      }
      else {
        cacheObj[element] = cacheObj[element] + 1
      }
    })
  }
  __.map(cacheObj, ((element, key, list) => {
    return element > 1 ? results = results.concat(parseInt(key)) : null
  }))
  return results
}
__.shuffle = (list) => {
  let listCopy = list.slice(0)
  let currentIndex = listCopy.length
  let tempVal;
  let randomIndex;
  while(0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    tempVal = listCopy[currentIndex]
    listCopy[currentIndex] = listCopy[randomIndex]
    listCopy[randomIndex] = tempVal
  }
  return listCopy
}

 __.reject = (list, predicate, context) => {
  let funcContext = context || this
  let newArr = []
  return __.filter(list, (val) => {
    return !predicate(val)
  })
}

__.rejectProperty = (obj, propToReject) => {
  let results = []
  __.each(obj, ((element, key, list) => {
    if(list.hasOwnProperty(propToReject) && key != propToReject) {
      results.push(element)
    }
  }))
  return results
}

__.extend = function(destionationObj, sourceObj)  {
  let argumentsWithoutDestinationObj = __.rejectProperty(arguments, "0")
  for(var i = 0; i < argumentsWithoutDestinationObj.length; i++) {
    for(var key in argumentsWithoutDestinationObj[i]) {
      destionationObj[key] = argumentsWithoutDestinationObj[i][key]
    }
  }
  return destionationObj
}

__.defaults = function(destionationObj, sourceObj) {
  let argumentsWithoutDestinationObj = __.rejectProperty(arguments, "0")
  for(var i = 0; i < argumentsWithoutDestinationObj.length; i++) {
    for(var prop in argumentsWithoutDestinationObj[i]) {
      if(!destionationObj.hasOwnProperty(prop)) {
        if(__.isObject(argumentsWithoutDestinationObj[i][prop], argumentsWithoutDestinationObj[i].constructor)) {
          destionationObj[prop] = argumentsWithoutDestinationObj[i][prop] || {}
        }
        destionationObj[prop] = argumentsWithoutDestinationObj[i][prop]
      }
    }
  }
  return destionationObj
}

__.isObject = (prop, propWithConstructor) => {
  return prop || propWithConstructor === Object || typeof prop === Object ? true : false
}

__.delay = (func, waitTime, args) => {
  setTimeout(() => func(args), waitTime)
}

 __.uniq = (arr, isSorted, iteratee) => {
  let obj = {}
  let results = []
  __.each(arr, (val) => {
    if(!obj.hasOwnProperty(arr[val])) {
      obj[arr[val]] = true
      results.push(arr[val])
    }
  })
  return results.concat.apply([], results)
}

module.exports = __

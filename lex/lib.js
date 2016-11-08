'use strict'
const __ = {}

__.first = (arr, n) => {
  if(typeof n == 'number' && n != undefined) {
    return arr.slice(0, Math.max(0, n))
  }
  else {
    return arr.slice(0, 1)
  }
}

__.last = (arr, n) => {
  if(typeof n == 'number' && n != undefined) {
    return arr.slice(Math.abs(n) * -1)
  }
  else {
    return arr.slice(-1)
  }
}

 __.each = (list, iteratee, context) => {
  let funcContext = context || this
  if(Array.isArray(list)) {
    for(var i = 0; i < list.length; ++i) {
      let element = list[i]
      iteratee.call(funcContext, element, i, list)
    }
  }
  else {
    let copyOfListObj = JSON.parse(JSON.stringify(list))
    for(var key in copyOfListObj) {
      let listVal = copyOfListObj[key]
      iteratee.call(funcContext, listVal, key, copyOfListObj)
    }
  }
  return list
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

 __.linearSearch = (arr, val, indexToStartFrom) => {
  let arrIndex;
  for(let i = indexToStartFrom || 0; i < arr.length; ++i) {
     if(val == arr[i]) {
      arrIndex = i
      return arrIndex
    }
  }
}

 __.indexOf = (arr, val, isSorted) => {
  if(isSorted == true) {
    return __.binarySearch(arr, val) != undefined || false ? __.binarySearch(arr, val) : false
  }
  else {
    let numToStartFrom = isSorted
    return __.linearSearch(arr, val, numToStartFrom) == undefined ? false : __.linearSearch(arr, val, numToStartFrom)
  }
}

 __.filter = (list, predicate, context) => {
  let funcContext = context || this
  let newArr = []
  for(var i = 0; i < list.length; i++) {
    if(predicate.call(context, list[i])) {
      newArr = newArr.concat(list[i])
    }
  }
  return newArr
}

 __.reject = (list, predicate, context) => {
  let funcContext = context || this
  let newArr = []
  for(var i = 0; i < list.length; i++) {
    if(!predicate.call(context, list[i])) {
      newArr = newArr.concat(list[i])
    }
  }
  return newArr
}



 __.uniq = (arr, isSorted, iteratee) => {
  let arrOfDuplicates = {}
  let results = []
  for(var i = 0; i < arr.length; ++i) {
    if(!arrOfDuplicates.hasOwnProperty([arr[i]])) {
      arrOfDuplicates[i] = true
      results.push([i])
    }
  }
  return results
}

module.exports = __

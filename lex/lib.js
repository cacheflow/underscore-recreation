'use strict'
const __ = {}

__.first = (arr, n) => {
  return arr.slice(0, Math.max(0, n) || 1)
}

__.last = (arr, n) => {
  return arr.slice(-Math.abs(n) || -1)
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
      iteratee.call(context || this, copyOfList[key], key, list)
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
  let funcContext = context || this
  let newArr = []
  for(var i = 0; i < list.length; i++) {
    if(predicate.call(context, list[i])) {
      newArr = newArr.concat(list[i])
    }
  }
  return newArr
}

__.every = (list, predicate, context) => {
  let truthNum = 0;
  for(var i = 0; i < list.length; i++) {
      if(predicate.call(context, list[i])) {
        truthNum++
      }
  }
  return truthNum == list.length ? true : false
}

__.some = (list, predicate, context) => {
  let truthNum = 0;
  for(var i = 0; i < list.length; i++) {
      if(predicate.call(context, list[i])) {
        truthNum++
      }
  }
  return truthNum > 0 ? true : false
}

__.shuffle = (list) => {
  let currentIndex = list.length
  let listCopy = list.slice(0)
  let tempVal;
  let randomIndex
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



 __.uniq = (arr, isSorted, iteratee) => {
  let obj = {}
  let results = []
  for(var i = 0; i < arr.length; i++) {
    if(!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = true
      results.push(arr[i])
    }
  }
  return results.concat.apply([], results)
}

module.exports = __

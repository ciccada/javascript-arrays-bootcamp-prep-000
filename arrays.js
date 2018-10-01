var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element){
  var Newarray = [element,...array];
  return Newarray
}

function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element)
}

function addElementToEndOfArray(array, element){
  var newArray = [...array,element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  console.log(array)
}
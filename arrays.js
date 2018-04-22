//Practice Making an Array
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]

//Without Changing The Original Array
function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

addElementToBeginningOfArray([1], 'foo');

//With Changing The Original Array
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

destructivelyAddElementToBeginningOfArray([1], 'foo');

//Without Changing The Original Array
function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}

addElementToEndOfArray([1], 'foo');

//With Changing The Original Array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

destructivelyAddElementToEndOfArray([1], 'foo');

//Return Element At Specific Array Index
function accessElementInArray(array, index) {
  return array[index];
}

accessElementInArray([1], 0);

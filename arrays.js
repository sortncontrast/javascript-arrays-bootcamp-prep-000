//Test 1: Practice Making an Array
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]

//Test 2 and 3: Without Changing The Original Array
function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

addElementToBeginningOfArray([1], 'foo');

//Test 4 and 5: With Changing The Original Array
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

destructivelyAddElementToBeginningOfArray([1], 'foo');

//Test 6 and 7: Without Changing The Original Array
function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}

addElementToEndOfArray([1], 'foo');

//Test 8 and 9: With Changing The Original Array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

destructivelyAddElementToEndOfArray([1], 'foo');

//Test 10: Return Element At Specific Array Index
function accessElementInArray(array, index) {
  return array[index];
}

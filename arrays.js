var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

addElementToBeginningOfArray([1], 'foo');

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

destructivelyAddElementToBeginningOfArray([1], 'foo');

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}

addElementToEndOfArray([1], 'foo');

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

destructivelyAddElementToEndOfArray([1], 'foo');

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


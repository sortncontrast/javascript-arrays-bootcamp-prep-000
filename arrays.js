var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element) {
  [element, ...array];
  return array;
}

addElementToBeginningOfArray([1], 'foo');


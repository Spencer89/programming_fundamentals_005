// =============== PART 1 - Advanced Objects ================

/*
  Q1. COMPLETE
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/


function size(object) {

  return Object.keys(object).length
}

/*
  Q2. COMPLETE 
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
  let minValue;
  for (let key in object) {
    if (minValue === undefined || object[key] < minValue) {
      minValue = object[key]
    }
  }
  return minValue;
}

/*
  Q3. COMPLETE
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  const arrayOfValues = Object.values(object);
  return Math.max(...arrayOfValues)
}
/*
  Q4.  COMPLETE
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  const obj2 = Object.assign({}, object)
  return (obj2);
}

/*
  Q5. COMPLETE
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {
  return object[key];
}

/*
  Q6. INCOMPLETE *** FAILS 1/3 tests***
  This function will receive an object and a key, and will return true if the 
  object has the given key, and false if not.
*/
function has(object, key) {
  //loop through each property in the object
  for (let property in object) {
  //If object.property exists...
    if (object[property])
  //...then return true
    {return true;} 
  //If object property exists and has a falsey value...
    else if(object[property] === false)
  //...then return true
    {return true;}
  // otherwise return false
    else {return false;}
    
  };
}

/*
  Q7. INCOMPLETE *** fAILS 4/4 tests***
  This function receives an object, whose values will all be numbers,
   and returns the sum of all these numbers.
*/
function sum(object) {
//loop through the object
for (let property in object)
//if the thing we are looping through is a number, map over to a new array,justNumbers

//if justNumbers.length = 0, return 0

//else return total justNumbers


   }


/*
  Q8. INCOMPLETE ***FAILS 2/2 TESTS***
  This function receives an object and will return a new object with the keys 
  and values inverted. See the tests for examples of this.
  https://stackoverflow.com/questions/23013573/swap-key-with-value-json/23013744
*/
function invert(object) { 
const newData = Object.keys(object).reduce(function(obj, key) {
  obj[object[key]] = key;
  return obj;
});
return(newData);
}
/*
  Q9. COMPLETE
  This function reveives an array of objects. It should return a single object,
   which is a combination of all the objects in the array.
  Found example on stack overflow: https://stackoverflow.com/questions/27538349/merge
  -multiple-objects-inside-the-same-array-into-one-object

  We have a new variable called mergedObj. This will be equal to the original 
  array, reduced down into a single output which will be compiled by adding all of each 
  object in the array(current item) onto all of the previous total(resulting item) and 
  put them into a target object. Return mergedObject
  */
function addAll(arr) { 
 
  mergedObj = arr.reduce((result,current) => ({...result,...current}), {}) 
  return mergedObj;
}

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) { }

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) { }

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) { }

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;

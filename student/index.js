//  Given an array of numbers,
//  return a new array that has only the numbers that are even.
function onlyEven (array) {
  // your code here
}

// Given an array of people objects,
// return a new array that has filtered out all those who don't belong to the club.
function peopleWhoBelongToTheIlluminati (array) {
  return array.filter(person => person.member)
}

// Given an array of people objects,
// return a new array with all the people who are old enough to see The Matrix,
// older than 18
function oldEnough (array) {
  return array.filter(person => person.age > 18)
}

// Given an array of strings,
// return a new array that only includes those that are only one word.
// no spaces
function onlyOneWord (array) {
  return array.filter(string => string.split(", ").length === 1)
}

// Given an array of arrays,
// return only those arrays that contain only positive numbers
function positiveRowsOnly (array) {
  return array.filter(row => {
    return row.filter(num => num < 0).length === 0
  })
}

module.exports = {
  onlyEven: onlyEven,
  peopleWhoBelongToTheIlluminati: peopleWhoBelongToTheIlluminati,
  oldEnough: oldEnough,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};

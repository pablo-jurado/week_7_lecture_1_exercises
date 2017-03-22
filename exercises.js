// 1. In your own words, write a definition of arrays.
// An Array is a list of collections of data where order matters.

// 2. Write a short program in which you create a grocery list containing 10 items
// using bracket notation (not array literals). Output the grocery list to the
// console as a whole. Output only the first and then the 5th elements in
// the array to the console.
var grocery = ['chicken', 'milk', 'bread', 'coffee', 'cheese', 'ham', 'rice', 'salsa', 'chips', 'beef']
console.log(grocery, grocery[0], grocery[4])

// 3. Write code that does the following:
// Create an array of 10 arbitrary numbers using array literal syntax.
var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Next, create a second empty array.
var emptyArr = []
// Using a while loop, write code that removes data from the first array and
// places it into the second array. At the end of this process the first array
// should be empty and the second array should contain the same numbers, but in reverse order.
while (numberArr.length !== 0) {
  emptyArr.push(numberArr.pop())
  console.log(emptyArr)
}

// 4. You are given the following array of objects:
var people = [
  {
    firstName: 'Lucas',
    lastName: 'Xun'
  },
  {
    firstName: 'Michaela',
    lastName: 'Devlin'
  },
  {
    firstName: 'Mose',
    lastName: 'Bodrogi'
  },
  {
    firstName: 'Heidi',
    lastName: 'Funar'
  },
  {
    firstName: 'Bede',
    lastName: 'Abasolo'
  }
]

// Each object represents a person with a first and last name. Your job is
// to print a numbered list of the initials of each person. Use forEach()
// to iterate over the array.
//
// The expected output is:
//
// 1) L. X.
// 2) M. D.
// 3) M. B.
// 4) H. F.
// 5) B. A.
function logArrayElements (person, index) {
  console.log(index + 1 + ') ' + person.firstName[0] + '. ' + person.lastName[0] + '.')
}
people.forEach(logArrayElements)

console.log(`We are checking..`)

const myArray = ['Sam', 'Connor', 'Manny', 'Joe']
const myCompany = ['Tech Educators', 2021, true, {staff: 'foo'}] // I can access elements in array through bracket notation

myArray [1]
myArray [0]

const colors = ['red', 'orange', 'blue', 'purple']

colors [1000] = 'red'
colors [2000] = 'orange'
colors [3000] = 'blue'
colors [4000] = 'purple'

console.log(colors[1000])
console.log(colors[2000])
console.log(colors[3000])
console.log(colors[4000])

colors.push('green') // adding element onto end of array

console.log(colors)

const lastElement = colors.pop() // removing last element of array

console.log(lastElement)

colors.unshift('indigo') // add item in this context a color to beginning of array

colors[2] = 'burnt umber' // replaces an item in array with a new item

colors.shift() // removes the first element
console.log(colors)

const myDeletedElements = colors.splice(1, 3, 'Teal') // takes 3 arguments - where to start, how many elements to remove, what to add and returns deleted elements in array
console.log(colors)
console.log(myDeletedElements)

const myInfo = ('Sarah', 'Dog', ('Tech Educators', 'Student')] // Arrays - we give it the number of that element in the list

console.log(myInfo[2][0]) // Square brackets for arrays

const info = {           // Objects - the dot is only for objects
  myDog: 'Honey',
  myJob: 'Student'
}

info.myDog

const myFriends = [    // Working with objects in arrays
   {
    name: 'Sarah',
    age: 25
   },
   {
    name: 'Charlie',
    age: 26
   },
   {
    name: 'Bethany',
    age: 27
 }
]

console.log(myFriends[2].name) // Arrays are 'ordered' // Objects must be given the property name

const myArray3 = [function(name) {console.log(`Hello, ${name}`)}] // Functions in Javascript are first-class // You can use functions like any other value

myArray3[0]('Sarah')


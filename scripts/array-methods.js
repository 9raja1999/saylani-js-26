// let bucket = [1, 2, 3, 4, 5];

// Element ko delete
// 5

// bucket.pop() // last element delete // [1,2,3,4]

// remove 2
// delete bucket[1]

// remove 2
// bucket.splice(1,1)

// find elemet 5 in this bucket

// iterate over the list
// compare each element with the elemnt that need to be find
// let elementToFound = 3;
// for (
//   // initialization
//   let start = 0;
//   // condition
//   start <= bucket.length - 1;
//   // counter
//   start++
// ) {
//   console.log("start=>", start);
//   let element = bucket[start];
//   console.log(`Element at index ${start} is ${element}`);
//   if (element == elementToFound) {
//     // alert(`Element Fount at index ${start}`);
//     break
//   }
// }

// find

// let bucket = [1, 2, 3, 4, 5, 4];
// let tobeFind = 45;

// // Args may aik function (arrow function)
// let isFound = bucket.find((element) => element == tobeFind);

// if(isFound == undefined) {
//     alert("Not found")
// }else {
//     alert("found")
// }


// filter
// // find those elements in array which are equal to 5
// let students = [10, 11, 12, 11, 12, 8, 11];

// // let classToFind = 11

// let aboveten = 10

// // let result = students.find((val) => val == classToFind)
// let result = students.filter( (val) => val < aboveten )
// console.log(result)



// indexOf

// let numbers = [9,1,2,3,4,5,6,7,8,9,10]

// let index = numbers.indexOf(0)

// console.log(index)

// Problem Statement

/***
 * 
 * Ex1:
 *  0 1 2 3
 * [1,2,3,4]
 * total = 3
 * result = [2,3]
 * 
 * Ex2:
 *  0 1 2 3 4 5 6
 * [1,2,3,4,5,6,7]
 * total = 10
 * result = 
 * 
 */



// You are given with the list of numbers that can be of any
// length given that each number in this array is a one
//  digit 
// number. Another variable is there of total that will
// be a number. What you will need to do is k find the
//  elements
// in list whose indexes sum is equal to the total



// let list = [1,2,3,4]
// let total = 3

// // sum = va1 + var2

// for(let start = 0; start <= list.length-1 ; start++) {
//     console.log(`List item at ${start} =  ${list[start]}`)

//     for(let inner = start+1 ; inner <= list.length-1 ; inner++) {
//         console.log("ITEMS" ,  list[start], list[inner])
        
    
//     }



// }

// Array 
// Methods (push, pop, splice, length, filter, find)
// list of items (int, strin, bool)

// functions
// Pass by value
// Pass by reference

let list = [1,2,3] // array numbers
// let list_one = ["1","2","3"] // array numbers
// let list_three = [true, false] // array numbers


let item_one = list[0] // item_one = 1
let item_two = list[1] // 



console.log("ITEM ONE",item_one)


// How may students in my class list their names plus theoir father name
// let students = ["name1", "name2"]


// let student1 = {
//     // pairs {key: value}
//     name: "raja",
//     fatherName:  "razzak",
//     age: 27,
// }

// console.log(student1.name)
// console.log(student1.fatherName)


// console.log(student1["age"])
// console.log(student1["fatherName"])


// let students = [
//     {
//         name: "raja",
//         age : 27
//     },
//     {
//         name: "raja",
//         age : 27
//     },
//     {
//         name: "raja",
//         age : 27
//     },
//     {
//         name: "raja",
//         age : 27
//     },
// ]

// let students_one = students[0] // object
// let students_one_name = students[0].name // "raja"

// console.log(students[0].name)

// let numbers = [1,2,7,3,4,5,9] // unsorted
// let sorted = numbers.sort()

// console.log(numbers)
// console.log(sorted)


// let alphabets = ["a", "c" , "b"]


// console.log(alphabets.sort())


// let numbers= [1,2,4,3,5]


// console.log(numbers.reverse())

// let alphabets = ["a", "c" , "b"]
// console.log(alphabets.reverse())

// let para = "   I  i   "
// let paralength = para.length
// // let trimmedLeadingPara = para.trimStart()
// let trimmedLeadingPara = para.trimEnd()
// // let trimmedPara = para.trim()

// console.log(paralength)
// console.log(trimmedLeadingPara)


let para = "I am working hard, I am a good person, I am a polite person"

// console.log(para.charAt(1))
console.log(para.split(","))

// 2d - Multidimension array
let dataset  = [
    [1,0,1,0,1],
    [1,0,1,0,0],
    [0,1,0,0,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
]


console.log(dataset[4][3])



// Chopstic ko toor dunga
// play and pause
// ai aik kr k khao
// one that finishes early 


















 




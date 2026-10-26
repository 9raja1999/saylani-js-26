// statement terminator

// Camel case
// var firstName = "Ehsan";

// var lastName = "Raja";

// Snake case
// var $last_name = "Raja"

// console.log("Hellow World")

// console.log(firstName)

// console.log(lastName)

// string + string
// console.log(firstName + " " + lastName)

// + , - , / , *

// var num1 = 10
// var num2 = 20

// var sum = num1 + num2
// var mult = num1 * num2
// var div = num2 / num1
// var sub = num2 - num1

// Addition of num1 and num 2 is 30 is 1020
// console.log("Addition of num1 and num 2 is " + num1 + num2)
// console.log("Addition of num1 and num 2 is " + sum)
// console.log("Subtraction of num1 and num 2 is " + sub)
// console.log("Multiplication of num1 and num 2 is " + mult)
// console.log("Division of num1 and num 2 is " + div)

// Modulus (Remainder)
// var num3 = 13 % 4
// console.log(num3)

// Increment() - Decrement=
//         // 0+1 = 1
// num4 = num4 + 1

//         // 1 + 1
// num4 = num4 + 1

// Post inc
// Pre inc
// num4++
// num4++

// var num4 = 0;
// num4 = ++num4
// console.log("Pre Inc " + num4 )

// num4 = num4++

// console.log("Post Inc " + num4)
// num4 = ++num4
// console.log("Post Inc " + num4)

// var factor = 0;

// var newfactor = factor++ + ++factor + ++factor + factor++ + factor++
// console.log(newfactor)

// var dec = 10
// console(--dec)

// loops
// Type 1 : for loop

// 100 print
// initialization , condition, inc/dec
// for(var i = 1 ; i <= 100 ; i++){
//     console.log("HBD " + i)
// }

// age is a number
// Whatever promt return is alaways a string
// For coverting that to Int you will have
//  to explicitly typecast that variable
// var question = "What your age?"
// var defaultAge = "27"
// var age = prompt("What your age?", "27")
// var age = prompt(question, age)

// console.log("Type of Age " + typeof age)

// console.log("Age " + age)

// Condition
// 1. Equality (==)
// 1. Not Equals (!==)
// 3. Greater Than (>)
// 4. Less than (<)
// 5. Greater than Equals to (>=)
// 5. Less than Equals to (<=)

// == (Only compare the value in LHS and RHS)
// === (Will compare the value along with the data type in LHS and RHS)

// var numberOfBooks = +prompt("How many books?")
// var numberOfBooks = +prompt("How many books?")

// // concatenation
// // console.log(numberOfBooks+1)
// numberOfBooks+1

// // agar
// if(numberOfBooks === 50) {
//     // condition body
//     alert("Checked")
// }else {
//     alert("Unchecked")
// }

// Nested Conditions
// var per = +prompt("Enter percentage?")

// if(per >= 90) {
//     alert("A+")
// } else if(per >= 80) {
//     alert("A")
// }else{
//     alert("F")
// }

// var sub1 = +prompt("Enter Marks in sub1")
// var sub2 = +prompt("Enter Marks in sub2")
// var sub3 = +prompt("Enter Marks in sub3")
// var sub4 = +prompt("Enter Marks in sub4")
// var sub5 = +prompt("Enter Marks in sub5")

// var total = 500
// var obtainedMarks = sub1 + sub2 + sub3 + sub4 + sub5

// // per =( obtained markes / toal marks ) X 100

// // BODMAS
// var  percentage = (obtainedMarks / total) * 100

// console.log("Percentage" , percentage)

// if(percentage >= 90) {
//     alert("A+")
// } else if( percentage >= 80 ) {
//     alert("A")
// } else if(percentage >= 70) {
//     alert("B")
// } else {
//     alert("F")
// }

// Logical Gates
// . Many Conditions -> One Execution

// Variables
// Conditional Statements
// Loop (FOR)
// Arithmetic operators
// Inc / Dec

// Global
// var firstName
// firstName = "ehsan"

// console.log("Check bool" ,  1==1)
// console.log("Check bool" ,  1==2)
// console.log("Check bool" ,  1>2)
// console.log("Check bool" ,  1<2)

// if(true) {
//  console.log("Yes",firstName)
// }

// // Constant
// const price = 10;

// // price = 500

// console.log(price)

// String
// let firstName = "hura"
// let firstName2 = 'raja'
// let firstName3 = `raja`
// let firstName = `raja`;
// let lasttName = `ehsan`;

// // let fullName = firstName + lasttName
// let fullName = `${firstName} ${lasttName}`;

// console.log(typeof firstName, typeof firstName2, typeof firstName3);

// // console.log(firstName + lasttName)
// console.log(fullName);

// let age = 27; // integer
// let price = 110.01; // decimal

// console.log(age, price);
// console.log(typeof age, typeof price);

// Boolen (Bool) True / False

// Yes - No
// 0 - 1
// On - off

// let willISleep = false

// let str1 = Symbol("ABC")
// let str2 = Symbol("ABC")

// console.log("String Equal" ,  str1 == str2)

// let frName = null; //Declare // Bad practice
// console.log(frName)

// let fname1 = undefined
// let lname1;

// console.log(fname1 === lname1)
// let fname1
// let lname1 =  null;

// console.log(fname1 === lname1)

let var1 = 1;
let var2 = "tytytyt";

var type1 = typeof var1;
var type2 = typeof var2;

console.log(type1, type2);

let bool = true;
console.log(typeof bool);

let symbol1 = Symbol("raja");
let symbol2 = Symbol(1);

console.log(typeof symbol1);
console.log(typeof symbol2);

let anyone;
console.log(typeof anyone);

let noOne = null;
console.log(typeof noOne);

let nr1 = 2;
let nr2 = "a";
// let nr2 = "2";
// let nr2 = 3;

let isNum = Number(nr2); // NaN

// if (isNum) {
//   console.log("Yes a Number");
// } else {
//   console.log("Not a Number");
// }

let message = isNum ? "Yes a num" : "Not a num";

console.log(message);

let str = 6; //\ Number
console.log(typeof str);

let strConv = String(str);

console.log(typeof strConv);

let boolean = "kjk";
// let boolean = false
// let boolean = 1
// let boolean = 0
console.log("BOOLEAN ==>", Boolean(boolean));

// Loops
// for, while, do-while
let num;
// initialization
// condition
// counter
// console.log("POST INC")
// for (num = 0; num <= 10; num++) {
//         console.log(num);
// }

// console.log("PRE")
// for (num = 0; num <= 10; ++num) {
//   console.log(num);
// }

// Content

// 1. Swap program
// 2. Table program
// 3. Array
// 4. Array Method
// 5. Soting approaches
// 6. bubble sort (Arrays, Conditional if-else, Nested loop)

// Swapping A variable
// let a = 5
// let b = 10

// // End goal -> a = 10, b =5

// // a = b // a -> b (10)
// // // b?
// // b = a // b -> a (10)

// // // 1. By using a temp variable
// let temp =  a + b;   // temp --> 5 + 10 -> 15
// a = temp - a ; // a --> 10

// // b ?
// b = temp - b

// console.log("A ==>" , a)
// console.log("B ==>" , b)

// let a = "A"
// let b = "B"

// let temp = a // temp -> "A"
// a = b // a --> "B"
// b = temp // b --> "A"

// console.log("A ==>" , a)
// console.log("B ==>" , b)

// with out temp variable

// can hold N number of values

/**
 * Array ?
 * 1. is a data type that can hold multiple (N) number of values
 * 2. Indexes (Index start from 0) // array[index]
 * 3. Length (No of items)
 * 4. break (keyword loop sy bahir atay hain)
 */

// let num1 = 1
// let num2 = 2
// let num3 = 3
// .......... N

// let numbers = [num1, num2, num3]
// let numbers = [1, 2, 3, 4,5,6,7,8,9,10,11]
// let numbersLength = numbers.length
// console.log("Number length ==>", numbersLength)
// console.log(numbers) // array + length
// console.log(numbers[2])

// Write a program in which you need
// to multiple array each element by factor of 2
// provided that the list is of numbers and has 10 values
// starting from 1

// let numbers = [1,2,3,4,5,6,7,8,9,10]

// console.log(numbers[0] * 2) // 1* 2 -> 2
// console.log(numbers[1] * 2) // 2* 2 -> 4
// console.log(numbers[2] * 2) // 3* 2 -> 6
// console.log(numbers[3] * 2) // 4* 2 -> 8
// console.log(numbers[4] * 2) // 5* 2 -> 10

// only multiple top 5 items in list

// let factor = 2;
// let lengthOfNumbers = 10;
// let numbers = [];

// // greater then equal to
// for (let i = 1; i <= 10; i++) {
//   // Itr 1 ->  i = 1
//   // Itr 2 ->  i = 2
//   // Itr 3 ->  i = 3
//   console.log(`Index ${i}`)
//   numbers[i - 1] = i;
// }

// console.log(numbers);

// for (let j = 0; j <= numbers.length - 1; j++) {
//   // Itr 1 => number[0] * 2 -> 2
//   // Itr 2 => number[1] * 2 -> 4
//   // Itr 3 => number[2] * 2 -> 6
//   // , numbers[j] * 2
//   if(j <= 4) {
//     console.log(`Index ${j}  item  ${numbers[j]} =>`,  numbers[j] * 2); // 10 time
//     break
//   }

//   console.log("jkjkj")
// }

// let arr = [1, "a" , true, null]

// 2D array
// let arr = [
//   [1,2,3,4,5], // 0
//   [1,2,3,4,5], // 1
//   [1,2,3,4,5], // 2
//   [1,2,3,4,5], // 3
// ] // 4

// // nested for loop
// for(let i = 0 ; i <= arr.length -1 ; i++) {
//   let item = arr[i]

//   for(let j = 0 ; j <= item.length -1 ; j++) {
//     console.log(`Item At ${i} => ${item}` , item[j] *2)
//   }
// }

// let arrr = [1,2,3,4,5] ; //Array of numbers
// let arr2 = ["a", "b"]; // Array of strings
// let arr = [true, false] // Array of booleans

// let arr = [1, "a" , true]

// let arr = [1, 2, 3, 4];
// // arr[2] = 5
// // arr[4] = 10
// // arr[6] = 10
// // console.log("Mutated Array =>", arr)
// // // 1,2,5,4

// arr.push(12) // 1,2,3,4,12
// arr.push(24) //  1,2,3,4,12, 24

// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr)

// Array 2 index value update
// arr.splice(1)
// arr.splice(0)
// arr.splice(1,2)
// console.log(arr)

// Array any index par item ko insert
// let arr1 = ["apple", "banana", "pineapple"];
// length, push, pop, splice

// let arr2 = new Array(10).fill(12)
// // let arr2 = new Array(1,2,3,4)
// console.log("Contructor method array" , arr2)
// let students = new Array(100) // [empty*100]

// let updatedStudents = students
// updatedStudents.fill(1)

// console.log(students)
// console.log(updatedStudents)

// let multipleValues = [1,"string" , true]
// console.log(typeof multipleValues) // object
// console.log(typeof multipleValues[1])
// console.log(typeof multipleValues[2])

// let students = ["raja" , "muhammad" , "ehsan"]
// console.log(students)
// students[1] = "hazala"
// console.log(students)
// console.log("Length of arr", students.length)

// let studNames = ["raja" , "hanzala" , "faruikh"]
// let studAges = [27, 34, 45]

// An object in JS is a combination of key:values pairs
// let student1 = {
//     // key : value
//     name : "raja",
//     age : 27,
//     fName : "ehsan",
//     class : 12
// }
// let student2 = {
//     // key : value
//     name : "raja",
//     age : 27,
//     fName : "ehsan",
//     class : 12
// }
// let student3 = {
//     // key : value
//     name : "raja",
//     age : 27,
//     fName : "ehsan",
//     class : 12
// }

// let students = [student1, student2, student3]
// console.log(students[1].name)

let students = [
  {
    name: "student 1",
    age: 27,
    class: 12,
  },
  {
    name: "student 2",
    age: 27,
    class: 12,
  },
  {
    name: "student 3",
    age: 27,
    class: 12,
  },
  {
    name: "student 4",
    age: 27,
    class: 12,
  },
];

// let stud = students[0]
// // console.log(stud.name, typeof stud)

// // Destructuring
// const {name, age, class} = stud

// let student = {}
// student["name"] = "raja"
// student["age"] = 27

// student.name = "ehsan"
// console.log(student)

// let student = {
//     name : "raja",
//     age : 24,
//     isAlive: false
// }

// // student.name = "ehsan"
// student["name"] = "ehsan"
// console.log(student)

// You have 100 students list. Each dtudent has its
// name, age, class, and fathername
// Among all those student fin out
// how many have same age?
// how many have same father name?
//  You need to print the count of these two

// Array -> list of items -> typeof Array (object)
// Object -> a variable that can simply hold multiple properties

// 1st half -> related to JS
// 2nd half -> Topics

// Array of objects
// let array = [
//   // Oth index
//   {
//     name: "raja",
//     age: 24,
//   },
//   // 1st index
//   {
//     name: "ehsan",
//     age: 24,
//   },
//   // length -> 2
// ];
// explicity at that index
// array[2] = {
//   name:  "farrukh",
//   age: 43
// }

// Push
// array.push({
//   name: "farrukh",
//   age : 43
// })

//Insert at 1 index
// array.splice(
//   1,
//   1,
//   {
//   name: "farrukh",
//   age: 43,
//   },
//   {
//     name : "sufiyan",
//     age : 18
//   }
// );

// console.log("Array  => ", array);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// Mugay yay krna hay k aik combine array
// bananhay by using above two array

//
// let newBasketCount = arr1.length + arr2.length // 10
// let newBucket = new Array(10)
// // let newBucket = []

// // Iterate over buck 1 -> new

// for(let  i = 0; i <= arr1.length-1 ; i++){
//   console.log(`At index ${i} = ${arr1[i]}`)
//   // newBucket.push(arr1[i])
//   newBucket[i] = arr1[i]
// }

// console.log("After bucket 1 insertion =>",newBucket)
// // Iterate over buck 2 -> new
// for(let i = 0; i <= arr2.length-1 ; i++) {
//   newBucket[i+arr1.length] = arr2[i]
// }
// console.log("After bucket 2 insertion =>",newBucket)

// Array concatenation
// let newBucket = arr1.concat(arr2)
// console.log(newBucket)

// using spread operator
// let newBucket = [...arr1, ...arr2];
// console.log(newBucket)

// let newBucket  =  arr1.concat(2,3,5)
// console.log(newBucket)

// arr1.pop() // delete from very last
// arr1.shift() // delete from very first
// let arr1 = [1, 2, 3, 4, 5];

/**
 * param1 startIndex
 * param2 deleteCount (Optional)
 */
// arr1.splice(2, 1) // [1,2,4,5]

// // 4 delete
// arr1.splice(2, 1) // [1,2,5]

// using delete keyword

// delete arr1[2]

// console.log(arr1)

// Bucket of students hain jis ma sy mughay filter ketnay hain student
// jo class 10 ma parhtay hain

// students count ?? 5
// Data format ?? name(string), age(number), class(number)

// approach (Decision making)
// if else
// iterative

// let dataSet = [
//   {
//     name: "raja1",
//     age : 27,
//     class: 12
//   },
//   {
//     name: "raja1",
//     age : 27,
//     class: 11
//   },
//   {
//     name: "raja3",
//     age : 27,
//     class: 10
//   },
//   {
//     name: "raja4",
//     age : 27,
//     class: 9
//   },
//   {
//     name: "raja5",
//     age : 27,
//     class: 10
//   },
// ]

// let class10Studs = []

// for(let i = 0 ; i <= dataSet.length-1 ; i++) {
//   let data = dataSet[i]
//   console.log(data)
//   if(data.class == 10) {
//     class10Studs.push(data)
//   }
// }

// console.log(class10Studs)

// Proble statement
// You are given with the list of items and each item may be repeated.
// Your task is to degregate the item into their respective groups

let dataSet = [1, 2, 3, 4, 1, 2, 3, 4];

let sortedArray = dataSet.sort();
// [1,1,2,2,3,3,4,4]
let segregated = []
let start = 0;

for (let end = 1; end <= sortedArray.length; end++) {
  // start = 0 end = 2
  // 1 !== 2
  console.log("INDEXES", start, end)
  console.log(`DATA at ${end} itr`, sortedArray[start], sortedArray[end]);
  if(sortedArray[start] !== sortedArray[end]) {
    console.log(sortedArray.slice(start, end))
    let slice = sortedArray.slice(start, end)
    segregated.push(slice)
    start = end
  }
  
  
}

console.log("SEGREGATED", segregated)


// [1,2,3,4]   -> 6
// [1,2,3,4]   -> 5
// [1,3,4,6,7]  -> 2
// You are givent with the list of numbers. The list length can be N number.
// ? You need to insert a new number following the sequence

// let dataSet2 = [1,3,5,7];

// let value = 6;

// for(let i = 0; i < dataSet2.length; i++){
//   if(dataSet2[i] >= value){
    
//     dataSet2.splice(i, 0, value)
//     break
//   }
// }
// console.log(dataSet2)


// probability & stats

// no of stairs  koi N number eg 4
// given the fact that I can only cros Max 3
// stairs

// Hint: nCr , nPr


// 1st => [1,1,1,1]
// 2nd => [2,3]
// 3rd => [2,1,1]
// 4th => [3,1]
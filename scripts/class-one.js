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
let firstName = `raja`;
let lasttName = `ehsan`;

// let fullName = firstName + lasttName
let fullName = `${firstName} ${lasttName}`;

console.log(typeof firstName, typeof firstName2, typeof firstName3);

// console.log(firstName + lasttName)
console.log(fullName);

let age = 27; // integer
let price = 110.01; // decimal

console.log(age, price);
console.log(typeof age, typeof price);

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

let factor = 2;
let lengthOfNumbers = 10;
let numbers = [];

// greater then equal to
for (let i = 1; i <= 10; i++) {
  // Itr 1 ->  i = 1
  // Itr 2 ->  i = 2
  // Itr 3 ->  i = 3
  console.log(`Index ${i}`)
  numbers[i - 1] = i;
}

console.log(numbers);

for (let j = 0; j <= numbers.length - 1; j++) {
  // Itr 1 => number[0] * 2 -> 2
  // Itr 2 => number[1] * 2 -> 4
  // Itr 3 => number[2] * 2 -> 6
  // , numbers[j] * 2
  if(j <= 4) {
    console.log(`Index ${j}  item  ${numbers[j]} =>`,  numbers[j] * 2); // 10 time
    break
  }


  console.log("jkjkj")
}


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



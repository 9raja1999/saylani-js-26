// for loop
// using while
// do while

// initialization
// condition
// counter

// initilization
// let count = 0;
// while(
//     // CONDITION
//     count <= 5
// ){
//     console.log("Hi", count)

//     // COUNTER
//     count++
// }

// console.log("Hi Out", count)

// Find an element in an array using
// while loop

// let data = [1,2,3,4,5,6,7,8,9,10]
// let found = false

// while(found == false
//     && data.length > 0
// ){
//     console.log("Hi")
//     if(data[0] == 11) {
//         found = true
//     }else {
//         data.shift()
//     }

// }
// console.log(found)

// print the factorial of 5
// 5!. 71!

// n! = n (n-1)(n-2)(n-3) .... n=1
// 7! = 7(6)(5)(4)(3)(2)(1)

// 5! = 5*4*3*2*1 =

// let factorial = 2;
// let result = 1

// while(factorial >= 1) {
//     result = result * factorial
//     factorial--
// }

// console.log(result , "FAC")

// Print even numbers toll 20 using while

// let number = 20;

// while(
//     number >= 1
// ) {
//     if(number % 2 == 0) {
//         console.log(`${number} is even`)
//     }else {
//         console.log(`${number} is odd`)
//     }
//     number--
// }

//  Table print of any number till 12
// let number = 3;
// let count = 1;

// while (count <= 12) {
//     console.log(`${number} * ${count} = ${number * count}`);

//     count++;
// }

// Insert the element at its right place note the element
// are all numbers
// let data = [1,2,3,4,6]
// let insertable = 5;

// tbc

// print "hello world" until count is not 5

// let count = 6;

// do {
//     // reside the code which needs
//     // to be executed iteratively
//     console.log("Hello World!")
//     count++
// } while(count <= 5)

// Code a solution in which
// you ask user for a number
// and keep asking if the number not
// lies netween 0 to 100
// let number;
// let retries = 3

// do {
//   number = prompt("Enter number");
//   console.log(number, typeof number, number >= 0);
// //   retries--
// } while (!(number >= 0 && number <= 100));

// logical not operator (!)
// let count = 0
// let bool =  false
// console.log(!bool)
// console.log(!(count <= 0))

// initialization
// condition
// counter

// for(let count = 0; count <= 5; count++) {
//     console.log("Hi")
// }

// Create a quiz app
//  10 questions
// user percenage
// if percentage > 80 then pass else fail

let questions = [
  {
    question: "what is 2+2?",
    rightAnswer: 4,
    totalMarks: 10,
  },
    {
      question: "which citty is called city of light",
      rightAnswer: 'karachi',
      totalMarks: 10,
    },
  //   {
  //     question: "what is 2+2?",
  //     rightAnswer: 4,
  //     totalMarks: 10,
  //   },
  //   {
  //     question: "what is 2+2?",
  //     rightAnswer: 4,
  //     totalMarks: 10,
  //   },
  //   {
  //     question: "what is 2+2?",
  //     rightAnswer: 4,
  //     totalMarks: 10,
  //   },
  //   {
  //     question: "what is 2+2?",
  //     rightAnswer: 4,
  //     totalMarks: 10,
  //   },
  //   {
  //     question: "what is 2+2?",
  //     rightAnswer: 4,
  //     totalMarks: 10,
  //   },
  //   {
  //     question: "what is 2+2?",
  //     rightAnswer: 4,
  //     totalMarks: 10,
  //   },
  //   {
  //     question: "what is 2+2?",
  //     rightAnswer: 4,
  //     totalMarks: 10,
  //   },
  //   {
  //     question: "what is 2+2?",
  //     rightAnswer: 4,
  //     totalMarks: 10,
  //   },
];

let totalMarks = 100;
let obtainedMarks = 0;

// console.log(questions.length)
for (let count = 0; count <= questions.length - 1; count++) {
    let question = questions[count]; // Object
    console.log(question);
    let raw_answer = prompt(question.question);
    let trimmed_answer = raw_answer.trim().toLowerCase()

    console.log(trimmed_answer)

    if(trimmed_answer == question.rightAnswer) {
        obtainedMarks = obtainedMarks + question.totalMarks
    }
}


console.log(obtainedMarks)

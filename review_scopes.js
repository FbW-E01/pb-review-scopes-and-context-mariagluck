
// 1. What does the following print and why? Add your answer as a multi-line comment

// ![image](https://user-images.githubusercontent.com/635732/120242342-f2be2d80-c264-11eb-86b3-f9e02267cf36.png)


// The console.log is placed outside the if scope so it cannot access the variables declared inside the local scope of the if statement, except for the variable declared as var , which it can be accessed so it would print "Joel", while  the const variable likes would give an error (likes is not defined).

// 2. What does the following print? Add your answer as a multi-line comment
 
// ![image](https://user-images.githubusercontent.com/635732/120242468-344ed880-c265-11eb-9b96-17e360eff6f6.png)

//x() is a function that would print an empty object {}. this is also an object --> console.log(typeof this) // object; By console.log(this) javascript tries to find what is this and prints following information about Object  [global] --> object in the global scope for the first console.log(this) and would print nothing for the second console.log(this) outside the function: 
/* <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  } */  
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   }
// }

// 3. What does the following print? Add your answer as a multi-line comment

// ![image](https://user-images.githubusercontent.com/635732/120242366-ff428600-c264-11eb-8656-4db8850d7875.png)


//It will print an empty object with the name Test, so: Test{}
// new Test() is a new object based on class Test, but it is usually saved in a variable e.g.: const mytest = new Test(); which would also only print an empty Object, because the class Test {} and its constructor do not provide other information or properties, even if a string or number would be added as argument to const mytest = new Test("bread"); it would print Test{}



// 3. What does the following print? Add your answer as a multi-line comment

// ![image](https://user-images.githubusercontent.com/635732/120242400-13868300-c265-11eb-9c0e-2047bf59345d.png)


// By calling function a() it will print "HELLO WORLD" because it will execute the console.log(test) that prints the variable const test, declared within the scope of the function. In the contrary, when we think about functions b() and c() they will not be printed, because b(), is calling a function from outside its local scope, so it cannot access it, it has forgotten it and goes forward to print console.log(test). c() has not even been called anywhere. So variable const best would be forgotten and c() would not be executed either --> UNLESS --> we call c() right next to console.log(test), in this case it would print : 
// HELLO WORLD!
// HELLO WORLD! WE ARE THE BEST

//like this e.g.
// function a() {
//     const test = "HELLO WORLD!";
//      function b() {
//         const best = "WE ARE THE BEST";
//         function c() {
//             console.log(test, best);
//         }
//         console.log(test); 
//         c();
       
//     }
//     b();
// }
// a();


// 4. Write a function that returns a random number.

const randomNumber = Math.floor(Math.random() * 101);  
console.log(randomNumber); // prints a random number between 0 and 100

const  randomNum = (min, max) => Math.floor(Math.random() *  (max - min + 1)) + min;

console.log(randomNum(5, 89)); // prints a random number between a min and max given numbers

// 5. Write a function that prints the message `"“Meow” means “woof” in cat.”"

function catMessage() {
 console.log("\"Meow\" means \"woof\" in cat");
}

catMessage();


// 6. Write a function that takes in one variable and *returns* the type of that variable

const typeofVariable = arg => typeof arg;
console.log(typeofVariable("hola")); // string
console.log(typeofVariable(45)); // number


// 7. Write a function that takes in a string and returns the first letter in that string

const firstLetter = string => string.substring(0, 1);
console.log(firstLetter("Love")); // L
console.log(firstLetter("World")); // W

// 7. Write a function that takes in an array and returns the first item in that array

const redFruits = [ "🍓", "🍎", "🍅", "🍒", "🍉"];
const firstArrayItem = array => array.shift();
console.log(firstArrayItem(redFruits)); // 🍓


// 8. Write a function that takes in a string, and then returns true if that string has 3 characters, otherwise it should return false.

const stringHas3Letters = string => string.length === 3 ? true : false ;
console.log(stringHas3Letters("sun")); //true
console.log(stringHas3Letters("🍓")); //false
console.log(stringHas3Letters("summer")); //false

/*
1)
Using console.log will print anything
between the parantheses into your console.

Change the phrase being printed below, 
save, and then view your changes 
in the browser.

After confirming that it works, comment it out.
*/

console.log("This is JavaScript");

/*
2)
Using both the (+) and the (*) operators,
multiply and add any combination of numbers
together so that you get the number 10.
*/

console.log("result should equal to 10:", 7+3); //10 
console.log("result should equal to 10:", (3*2)+4); //10

/*
3)
console.log is often used to debug
issues. You can actually add multiple
arguments inside of console.log (which are
separated by a comma). Add everything
below into console.log!

3 + 4, " should equal 7"
*/
console.log("should equal 7", 3 + 4);
/*
4)
Add two strings together so that you
are printing your full name!
*/

console.log("Vennela" + " " + "Lingam");
console.log("Vennela " + "Lingam");
console.log("Vennela" + " Lingam");

/*
5)
Using modulo to get the remainder of
a number divided by 2 will tell you whether a 
number is even or odd. Try it below!
*/
let number = 10;
if(number % 2 === 0 ){
  console.log("Number is even");
} else
 console.log("Number is odd")

/*
6)
Change Mia's location by reassigning the location
variable to a new string! To do this, you will have 
to add a new line of code (do not delete any currently
written code). Note: you will also have to un-comment
the console.log to print the location.
*/

let name = "Mia";
  name = "Ria";
let currentLocation = "school";
  currentLocation = "home";
  currentLocation = "beach";
console.log(`${name} is currently at ${currentLocation}`);

/*
7)
Create variables so that the message is printed
to the screen!
*/
let firstName = "Mia";
let place = "restaurant";
let food = "pizza";

console.log(`${firstName} went to the ${place} to eat ${food}.`);
console.log(firstName +" "+"went to the"+" "+place+" "+"to eat"+" "+food+".");
 
/*
8)
Now, reassign all the previous variables so that
a new message is printed to the screen!
*/
firstName = "Tia";
place = "cafe";
food = "cake";
//  console.log("Tia" + " went to the " + "cafe", " to eat " + "cake" + ".");
console.log(`${firstName} went to the ${place} to eat ${food}.`);
console.log(firstName +" "+"went to the"+" "+place+" "+"to eat"+" "+food+".");

/*
9)
There are three ways to increase the
number stored in the variable "count".
However, there is a problem with how 
the variable has been declared. Debug it!
*/

let count = 0;
count = count + 1;
console.log(count) // 1
count += 1;
console.log(count) //2
count++; // operation shows 2 //never use this method
console.log(count) // value is 3 when u console

/*
10)
Swap time! In the code below, we want to swap
the values being stored in both "a" and "b".

This code written below does not work. To accomplish
this task, you will need to create an additional
variable (you can name it "temp") to store either
"a" or "b" while you are swapping. Draw it out if
you are unsure!
*/

let a = 1;
let b = 2;

console.log("BEFORE > a is: ", a, " - and b is: ", b); 
  // a: 1 b: 2
let c = a;
a = b;
b = c;
console.log("AFTER > a is: ", a, " - and b is: ", b);
  // a: 2 b: 1

/*
11)
Make the statement below evaluate
to true!
*/
console.log(3 !== 4);
console.log(3 < 4);
console.log(3 !== "4");

/*
12)
Make the statement below evaluate
to false.
*/

let x = 10;
let y = x++;

 console.log(x > 11);
 console.log(x < 11);
/*
13)
Fix the comparison operator so that
the statement evaluates to false.
*/

console.log(3 === "3");

/*
14)
Change something in the expression below
so that it does not evaluate to false.
*/

let sunny = true;
let warm = true;

console.log(sunny === warm);
console.log(sunny == warm);

// Negate Strings
console.log(sunny !== !warm); //true
/*
15)
Practice with everything you've learned!

Come up with 10 expressions that use what
you've learned so far.
  - Use the data types: string, number, boolean, undefined, null.
  - Use the following operators: (+) (-) (*) (/) (%).
  - Use the keywords: var, const, let.
  - Use the operators: (=) (+=) (-=) (*=)(++) (- -).
  - Use the operators: (>) (<) (>=) (<=) (== vs ===) (!=).
*/
// console.log(2+5);  
let age = 36;
let myName = "Vennela";
let livingLocation = "Barcelona";
let tv = null;
let learning = true;
let abc;

//Primitive Data Types

console.log(typeof(age)); // number
console.log(typeof(myName)); //string
console.log(typeof(livingLocation)); // string
console.log(typeof(tv)); // null: number
console.log(typeof(learning)); //boolean
console.log(abc); // undefined
let num = 7 + "19";
console.log(num, typeof(num)) // 719, string

// Operators

let num1 = 6;
let num2 = 2;

sum = num1 + num2;
console.log("sum", sum); // 8

subtract = num1 - num2;
console.log("subtract", subtract); // 4

multiply = num1 * num2;
console.log("multiply", multiply); // 12

divide = num1 / num2;
console.log("divide", divide); // 3

modulus = num1 % num2;
console.log("remainder", modulus); // 0

// keywords Var, Const, Let
// var has a global scope
const apple = "fruit";
//  apple = "mango" // error do not re-assign a constant variable
// Let n const - local scope which means inside the function we assigned.
let one = 1;
one = 11
console.log(one); // value 1 is re-assigned to 11 using let

// OPERATORS (=) (+=) (-=) (*=)(++) (- -).
//  (>) (<) (>=) (<=) (== vs ===) (!=).

let count1 = 0;
count1 = count1 + 5; 
console.log(count1) // 5 
count1 += 1   
console.log(count1) //6
count1++ 
console.log(count1) //7
count1--
console.log(count1) //6
count1 -= 1
console.log(count1) //5
count1 *= 5
console.log(count1) //25

let ten = 10;
let five = 5;

greater = ten > five 
console.log(greater) // true
less = five < ten
console.log(less) //true
notequal = ten !== five
console.log(notequal) // true
equal = ten === five
console.log(equal) //false
greaterThanEqualTo = ten >= five
console.log(greaterThanEqualTo) //true
lessThanOrEqualTo = ten <= five
console.log(lessThanOrEqualTo) // false

console.log(8 == 8) // true
console.log (3 == 4) // false
console.log( 2 == "2") // true
console.log( 2 === "2") //false
console.log( 2 !== "2") //true
console.log( 2 != "2") //false

let myname = "vennela";
let myfirstName = "Vennela";
console.log(myname === myfirstName) //false



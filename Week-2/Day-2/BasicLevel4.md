# Javascript quiz (Basic Level 4)
## Theory
Question1. What are anonymous functions in JavaScript?

>> Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

**Syntax: **
```
function() {
    // Function Body
 }
```
Question2. Explain strict comparison and Abstract comparison in javascript?
>> First, some terminology about Javascript string equals: Double equals is officially known as the abstract equality comparison operator while triple equals is termed the strict equality comparison operator.
>> The difference between them can be summed up as follows: Abstract equality will attempt to resolve the data types via type coercion before making a comparison. Strict equality will return false if the types are different. 
```
console.log(3 == "3"); // true
console.log(3 === "3"); // false.
```
>>Using two equal signs returns true because the string “3” is converted to the number 3 before the comparison is made. Three equal signs sees that the types are different and returns false

Question3. Difference b/w arrow functions and regular functions?

**Regular function:**

```function myFunction() {
  console.log(this);
}
// Simple invocation
myFunction(); // logs global object (window)
```

**Arrow function:**
```
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
```
1. Remove the word "function" and place arrow between the argument and opening body bracket

2.  Remove the body braces and word "return" — the return is implied.


Question4. What is Hoisting in JavaScript?
>> JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

>>Hoisting allows functions to be safely used in code before they are declared.

```
friendName("Ravi");

function friendName(name) {
  console.log("My  friend name is " + name);
}
/*
The result of the code above is: "My friend name is Ravi"
*/

```
Question5. JavaScript is a garbage collected programming language, explain how?
>>The garbage collector takes roots and “marks” (remembers) them. Then it visits and “marks” all references from them. Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.


Question6. Explain Shallow copy vs Deep copy in Javascript?
>> A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. A shallow copy means that certain (sub-)values are still connected to the original variable.

**Shallow Copy:**
>>When a reference variable is copied into a new reference variable using the assignment operator, a shallow copy of the referenced object is created.
a reference variable mainly stores the address of the object it refers to. When a new reference variable is assigned the value of the old reference variable, the address stored in the old reference variable is copied into the new one.
This means both the old and new reference variable point to the same object in memory. As a result if the state of the object changes through any of the reference variables it is reflected for both.

**Deep copy:** 

>>deep copy makes a copy of all the members of the old object, allocates separate memory location for the new object and then assigns the copied members to the new object.
In this way, both the objects are independent of each other and in case of any modification to either one the other is not affected.

Question7. What is Object.freeze
>> The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed.

>> Freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

# PROGRAM:
Question1. Write a function that generates a random number between two ranges, -100 to 0 and
800 - 900.
```
function radomValue(minval, maxval) {  
    return Math.floor(Math.random() * ( maxval- minval + 1) + minval)
}

const radomNum1 = radomValue(-100, 0);
const radomNum2 = radomValue(800, 900);
console.log(radomNum1);
console.log(radomNum2);

```

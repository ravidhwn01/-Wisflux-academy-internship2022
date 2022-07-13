# Typescript quiz (Basic Level - 1)

## Theory

### Question1. What are the basic data types in TypeScript?

> > **Data types in TypeScript** are
> > number, boolean,stirng, null, any ,Object Type
> > Array Type,
> > Tuple Types,
> > Enum Types
> > Any Type,
> > Never Type,
> > Union Types,
> > Type Aliases etc.

**Examples:**

```
let a: null = null;

let b: number = 123;

let c: number = 123.456;

let d: string = 'ravi dhawan';

let e: undefined = undefined;

let f: boolean = true;

let g: number = 0b111001; // Binary

let h: number = 0o436; // Octal

let i: number = 0xadf0d; // Hexa-Decimal
```

### Question2. What is Generic data type.

> > TypeScript Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types. Generics ensures that the program is flexible as well as scalable in the long term.

**Examples:**

```
function identity<T>(arg: T): T {
    return arg;
}
let a1 = identity<string>("myString");
let a2 = identity<number>( 100 );
console.log(a1);
console.log(a2);
```

### Question3. What is type inferring in TS.

> > TypeScript is a typed language. However, it is not mandatory to specify the type of a variable. TypeScript infers types of variables when there is no explicit information available in the form of type annotations.

Types are inferred by TypeScript compiler when:\
-Variables are initialized\
-Default values are set for parameters\
-Function return types are determined\

```
var a = "This is TypeScript";
var b = 123;
a = b; // Compiler Error: Type 'number' is not assignable to type 'string'
```

### Question4. What are the possible ways to define typing for functions.

> >A function type has two parts: parameters and return type. When declaring a function type, you need to specify both parts with the following syntax:
```
(parameter: type, parameter:type,...) => type
```
>>The following example shows how to declare a variable which has a function type that accepts two numbers and returns a number:
```
let add: (x: number, y: number) => number;
```
**Other examples:**
```
// Named function
function greet(name: string) {
  return 'hello ' + name
}

// Function expression
let greet2 = function(name: string) {
  return 'hello ' + name
}

// Arrow function expression
let greet3 = (name: string) => {
  return 'hello ' + name
}

// Shorthand arrow function expression
let greet4 = (name: string) =>
  'hello ' + name

// Function constructor
let greet5 = new Function('name', 'return "hello " + name')
```


### Question5.  How to define Generic type for Classes.
>>



```
function getItems<T>(items : T[] ) : T[] 
{  
      return new Array<T>().concat(items);  
}  
let arrNumber = getItems<number>([10, 20, 30]); 

let arrString = getItems<string>(["Hello", "JavaTpoint"]);  

arrNumber.push(40); // Correct  

arrNumber.push("Hi! Javatpoint"); // Compilation Error  

arrString.push("Hello TypeScript"); // Correct  

arrString.push(50); // Compilation Error  

console.log(arrNumber);  

console.log(arrString); 

```

# PROGRAMS:
### Question:- Define the types in typescript for the given following JavaScript code.
Todo:
- Define type/interface for a single Todo object.
- Define type for each function.
- Do not use `any` (TS Data Type) type of typescript.
Code:
```
var todos = [];
function add(name, description) {
return todos.push({
name: name,
description: description,
done: false
});
}
function remove(index) {
return todos.splice(index, 1);
}
function list() {
todos.forEach(function(todo, index) {
console.log(index + " - " + todo.name);
});
}
function update(index, name, description) {
todos[index].name = name;
todos[index].description = description;
return todos[index];
}
```
**Solution:**
```
   class Entry {
     name: string;
     description: string;
     done: boolean;
   }

   var todos: Entry[] = [];

   function add(name: string, description: string): number {
     return todos.push({
       name: name,
       description: description,
       done: false,
     });
   }

   function remove(index: number): Entry[] {
     return todos.splice(index, 1);
   }

   function list(): void {
     todos.forEach(function (todo: Entry, index: number) {
       console.log(index + " - " + todo.name);
     });
   }

   function update(index: number, name: string, description: string): Entry {
     todos[index].name = name;
     todos[index].description = description;
     return todos[index];
   }

   console.log(add("location of ", "your home"));        
   list();        
   ```

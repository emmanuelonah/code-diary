/**
 * @Metaprogramming refers to the ability of a program to
 * analyze or manipulate itself. This involves writing code
 * that can inspect, modify, or generate other pieces of code
 * dynamically during runtime. Metaprogramming is facilitated
 * by features such as reflection and the ability to manipulate
 * functions and objects in JavaScript.
 *
 * @Note Metaprogramming can be a powerful tool, but it should
 * be used judiciously because it can make code harder to
 * understand and maintain. Additionally, some metaprogramming
 * techniques, such as the use of eval, can introduce security
 * risks if not used carefully.
 */

/**
 * @Reflection JavaScript provides reflective capabilities through
 *  the Reflect object and the Object object. Reflection allows you
 *  to inspect and manipulate objects at runtime.
 */
// Example of reflection
const obj = { key: 'value' };

// Get all property names
const keys = Reflect.ownKeys(obj);

// Log property names
console.log(keys); // ['key']

/**
 * @Dynamic_Property_Access JavaScript allows you to access and modify
 * object properties dynamically using strings as property names.
 */
// Example of reflection
const obj = { key: 'value' };

// Get all property names
const keys = Reflect.ownKeys(obj);

// Log property names
console.log(keys); // ['key']

/**
 * @Dynamic_Function_Invocation: Functions in JavaScript can be invoked
 * dynamically using the call or apply methods, allowing you to set the
 * context (this) and pass arguments programmatically.
 */
// Dynamic function invocation
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Invoke function dynamically
greet.call(null, 'John'); // Hello, John!

/**
 * @Code_Generation You can dynamically generate and execute
 * JavaScript code using techniques like template strings or
 * the eval function (though using eval is generally discouraged
 * due to security and performance concerns).
 */
// Code generation with template strings
const variableName = 'x';
const value = 42;

const dynamicCode = `${variableName} = ${value};`;
eval(dynamicCode);

console.log(x); // 42

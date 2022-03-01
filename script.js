// Event Loop In-depth in Telugu | JavaScript
console.clear();

/* 
01. Event Loop 
02. CallStack
03. CallBack Queue
04. MicroTask Queue
*/

/*  Web APIs
==============
• setTimeout()
• fetch()
• console
• DOM API
*/

// JavaScript is a single threaded synchronous language

console.log('Start');

let myFunction = () => console.log('My Function');
myFunction();

setTimeout(() => {
    console.log('Timeout Function - 3s');
}, 3000) // CallBack Queue

console.log('End');
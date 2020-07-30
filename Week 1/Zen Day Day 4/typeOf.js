console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"


console.log(typeof(arr = [1,2,3,4,5]));

console.log(typeof(obj = { "hello" : "good"}))

/*
====================
    Output
====================

PS E:\Full Stack Guvi\FullStackBootCamp\Zen Day Day 4> node .\typeOf.js
number   
string   
boolean  
undefined
object   
object   
PS E:\Full Stack Guvi\FullStackBootCamp\Zen Day Day 4>

*/
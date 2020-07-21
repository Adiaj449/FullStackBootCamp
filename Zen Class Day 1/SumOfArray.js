const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 

let array = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
for(let i=0;i<array.length;i++)
{
    sum +=array[i];
}

console.log(sum);

//end-here
});

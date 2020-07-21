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

let array = [4,2,1,5,6,2];
let max = array[0];

for(let i=1;i<array.length;i++)
{
    if(array[i]>max)
    {
        max=array[i];
    }
}

console.log(max);

//end-here
});

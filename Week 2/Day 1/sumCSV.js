function sumCSV(s)
{
   let arr = s.split(',').map(val => +val);
   let sum =0;
   for(let i=0;i<arr.length;i++)
   {
       sum += arr[i];
   }
   
   return sum;
}
console.log(sumCSV("1,2,3,4,2,2"));

/*
output:
PS E:\Full Stack Guvi\FullStackBootCamp\Week 2\Day 1> node .\sumCSV.js
14
PS E:\Full Stack Guvi\FullStackBootCamp\Week 2\Day 1> node .\sumCSV.js
14
PS E:\Full Stack Guvi\FullStackBootCamp\Week 2\Day 1> 
*/


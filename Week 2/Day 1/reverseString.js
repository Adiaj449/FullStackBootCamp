var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   let arr = s.split("");
   return arr.reverse().join(""); 
}

/*

Output :-
PS E:\Full Stack Guvi\FullStackBootCamp\Week 2\Day 1> node .\reverseString
tpircSavaJ
PS E:\Full Stack Guvi\FullStackBootCamp\Week 2\Day 1> 

*/
function oppNum(num)
{
    if(isNaN(num))
    {
        return -1;
    }
    else
    {
        return num - (num*2);
    }
}

console.log(oppNum(10));
console.log(oppNum(5));
console.log(oppNum(18));
console.log(oppNum(12));
console.log(oppNum(40));
console.log(oppNum(90));
console.log(oppNum("5a"));
console.log(oppNum(5.5));
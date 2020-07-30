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

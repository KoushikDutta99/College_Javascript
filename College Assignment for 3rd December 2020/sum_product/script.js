arr=[]
n=prompt("enter the range")
for(i=0;i<n;i++){
    a=prompt("enter the value") 
    arr.push(a);
}
var sum=0;
var mult=1;
for(i=0;i<n;i++)
{
    sum=sum+parseInt(arr[i]);
     mult=mult*parseInt(arr[i]);
}
alert(sum);
alert(mult);

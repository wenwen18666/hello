function fn(a,b){
a = prompt('a的值');
b = prompt('b的值');
i =a;
var sum=0;
while (i <= b){

    sum += i;
    i++;
}
console.log(a,b,sum);
return sum;
}


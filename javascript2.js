const numbers = [5,3,4,7,2,1,9,7,7];
position = numbers.length - 1;
sum = 0;
while(position>=0){
        console.log("position is "+position);
        value = numbers[position];
        console.log("value is "+value);
        sum = sum + value;        
        console.log("sum is "+sum);
        position = position -1;
};
average=sum/numbers.length;
console.log("average is "+average);

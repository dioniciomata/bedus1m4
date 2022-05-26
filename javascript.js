var nombre="Dio";
console.log("Hello Dio");
const time="25";
let greeting;

if(time<12){
	greeting="Good morning";
} else if(time<20){
	greeting="Good afternoon";
} else if(time<=24){
	greeting="Good evening";
} else if(time>24){
	greeting="Are you high? This time is not valid";
} else {greeting="Get outta here!"}

console.log(greeting)

for(x=0;x<=100;x+=2){
	console.log(x);
}	

cars =  "volvo"
console.log(cars.length);
console.log(("No comas ajos. ni cebollas. porque no.").match(/\./g));

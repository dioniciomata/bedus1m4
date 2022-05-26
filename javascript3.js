const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]];
let auto = " ";

for (x in car) {
        auto +='"'+car[x]+'"';
}
console.log(auto);
let dots = auto.replace(/,/g,'":"');
console.log(dots);
let comma =  dots.replace(/""/g,'","');
console.log(comma);
let curly = "{"+comma+"}";
console.log(curly);
const objeto = JSON.parse(curly);
console.log(objeto);
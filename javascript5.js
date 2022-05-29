let yo = "Juan";
yo = "Dio";
console.log(yo);

//ciclos anidados
// for (var i = 1; i <= 9; i++) {
// 	for (j = 1; j <= 9; j++) {
// 		console.log( i + "x" + j + "=" + i*j);
// 	}
// }

let num = 19;
 // Esta función:
// function evaluaNumero () {
//     if ( num % 2 == 0 ) {
//         return "el numero " + num + " fue par";
//     }
//     else {
//         return "no fue par";
//         num ++;
//     }
// }
// ES EQUIVALENTE A ESTA arrow function 
const evaluaNumero = () => {
    if ( num % 2 == 0 ) {
        return "el numero " + num + " es par";
    }
    else {
        return "no es par";
        num ++;
    }
}
console.log (evaluaNumero(19));

// para convertir un arreglo a objetos o viceversa se requiere
//HOF High Order Functions. Funciones con colecciones
var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];
/*
  function pluck(list, propertyName) {
    const response = [];
    for (var i=0; i<list.length; i++) {
         let item = list[i];
         response.push(item[propertyName]);
    }
    return response;
  }
*/
  // const pluck = (list, propertyName) => list.map(obj => obj[propertyName]);

  // console.log( pluck(singers, 'name') );
  // console.log( pluck(singers, 'band') );
  // console.log( pluck(singers, 'born') );

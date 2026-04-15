// Array

//Definir array
//const list = ['manzana', 'pera', 'naranja', 'uva'];
//const randomList = ['pera', 32, false, ['uvas']];
//const empty = [];

//Acceder a un elemento de un array
//const fruit = list [0];
//console.log(list.length);
//console.log(fruit);

//Agregar elementos a la lista
//el punto de acceso a propiedades o acceder a metodos
//list.push('sandia');
//console.log(list);

//Eliminar elementos
//El primer num indica el indice a eliminar, el segundo numero indica cuantos elementos eliminar a partir del indice
//list.splice (2, 1);
//console.log(list);

// Loops (recorrecer un array)
//for(let index = 0; index < list.length; index++) {
//    console.log(list[index]);
//}

const list = [32, 87, 999, 1777232, 1, 54, 111];

//list.map(function(elemento)) {
//    console.log(elemento);
//}
const listaModificada = list.map(function(elemento) {
    return elemento * 2;
});
const listaReducida = list.filter(function(elemento) {
    return elemento > 100;
});                                     
console.log(listaModificada);
console.log(listaReducida);
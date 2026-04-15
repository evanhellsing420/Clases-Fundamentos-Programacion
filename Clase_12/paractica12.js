//Input
const list = [32, 87, 999, 1777232, 1, 54, 111];

//Output
// --> PARES [32, 1777232, 54]
// --> IMPARES [87, 999, 1, 111]

//Array
let pares = [];
let impares = [];

for (let i = 0; i <list.length; i++) {
    if (list[i] % 2 === 0) {
        pares.push(list[i]);
    } else {
        impares.push(list[i]);
    }
}
console.log("Pares:", pares.join(' - ')); //join transforma el array a string, y le puedo pasar un parametro para separar los elementos
console.log("Impares:", impares);

//spli
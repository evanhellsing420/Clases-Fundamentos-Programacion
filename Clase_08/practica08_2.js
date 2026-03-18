// 1. Definir una varibale iteraciones con el numero 100
// 2. Escribir un loop que itere 100 veces (usando la variable iteraciones)
// 3. En el loop usando la variable iteraciones:
//   - Si el numero es multiplo de 3, loggeamos:
//     El numero x es multiplo de 3
//   - Si el numero es multiplo de 5, loggeamos:
//     El numero x es multiplo de 5
//   - Si el numero es multiplo de ambos 3 y 5, loggeamos:
//     El numero x es multiplo de 23 y 5
//     (x es la variable iteraciones)
//   - Le restamos 1 a variable iteraciones  



let iteracion = 100;
while (iteracion > 0) {
    const residuo3 = iteracion % 3 === 0;
    const residuo5 = iteracion % 5 === 0;
    if (residuo3 && residuo5) {
        console.log( 'El numero', iteracion, 'es multiplo de 3 y 5');
    } else if (residuo3) {
        console.log('El numero', iteracion, 'es multiplo de 3');
    } else if (residuo5) {
        console.log('El numero', iteracion, 'es multiplo de 5');
    }
    iteracion = iteracion - 1;
}


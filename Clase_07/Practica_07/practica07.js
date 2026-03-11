const userName = 'user234'; // cualquiera que sea el valor real 
const userPassword = 'pass567'; //  cualquiera que sea el valor real 
const savedPassword = 'pass567'; // cualquiera que sea el valor real
const userAnswer = 'Cosmos'; // cualquiera que sea el valor real    
const savedAnswer = 'Cosmos'; // cualquiera que sea el valor real

// 1. Si el user no es user234, user no existe
// 2. Si el user si es user234 y password hace match con savedPassword, acceso concedido
// 3. Si el password no hace match con savedPassword, pero los answers hacen match, acceso concedido
// 4. Si nada hace match (pasword ni answer), acceso denegado

if (userName != 'user234') {
    console.log('Usuario no existe');
} else if ((userName == 'user234') && (userPassword == savedPassword)) {
    console.log('Acceso concedido');
} else if (userPassword != savedPassword && userAnswer == savedAnswer) {
    console.log('Acceso concedido');
} else {
    console.log('Acceso denegado');
} 
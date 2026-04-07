// Reglas
//- Estas reglas aplican para todos los clientes:
//    * Los clientes pares toman su propio numero en minutos + 45 segundos
//    * Los clientes impares toman 20 segundos
//- Estas reglas aplican como un extra sobre las reglas anteriores
//    * Los clientes múltiplos de 10 toman 18 minutos y 11 segundos más
//    * Los clientes múltiplos de 5 toman 37 minutos más 

const cantidadDeClientes = 30;

let totalSegundos = 0;
let indice = 1;

while (indice <= cantidadDeClientes) {

    if (indice % 2 === 0) {
        totalSegundos += (indice * 60) + 45;
        //Ejemplo cliente 4 --> (4 * 60) + 45 = 285 segundos
        //240 + 45 = 285 segundos
    } else {
        totalSegundos += 20;
    }
    //Los clientes múltiplos de 10 toman 18 minutos y 11 segundos más
    if (indice % 10 === 0) {
        totalSegundos += (18 * 60 + 11); 
    } else if (indice % 5 === 0) {
            totalSegundos += (37 * 60);
        }

        indice += 1; 

        let horas = 0;
        let minutos = 0;
        let segundos = totalSegundos;

        // Convertir segundos a horas, minutos y segundos
        // cada 3600 segundos es igual a 1 hora
        while (segundos >= 3600) {
            segundos -= 3600;
            horas += 1;
        }

        // cada 60 segundos es igual a 1 minuto
        while (segundos >= 60) {
            segundos -= 60;
            minutos += 1;
        }

        //Output 
        let resultado = 'Al cajero le va a tomar ';

        if (horas > 0) {
            resultado += horas + ' hora, ';
        }
        if (minutos > 0) {
            resultado += minutos + ' minuto y ';
        }
        resultado += segundos + ' segundos.';

        console.log(resultado); 
    }
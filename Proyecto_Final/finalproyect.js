const lista = ['Marlon', 59, 'Luisa', 96, 'Isabel', 77];

// VARIABLES PRINCIPALES

// Acumulador para sumar todas las notas
let sumaNotas = 0;

// Contador de estudiantes
let cantidadEstudiantes = 0;

// Arreglos para separar aprobados y reprobados
let estudiantesAprobados = [];
let estudiantesReprobados = [];

// Arreglo donde se guardará el resultado con letras
let listaConLetras = [];



// RECORRIDO DEL ARREGLO

// Se recorre de 2 en 2 porque el arreglo tiene: nombre, nota, nombre, nota...
for (let indice = 0; indice < lista.length; indice += 2) {

    // Se obtiene el nombre del estudiante
    const nombreEstudiante = lista[indice];

    // Se obtiene la nota (posición siguiente)
    let notaEstudiante = lista[indice + 1];

    // Se asegura que la nota sea un número
    notaEstudiante = Number(notaEstudiante);

    // CÁLCULO DEL PROMEDIO

    // Se acumulan las notas
    sumaNotas += notaEstudiante;

    // Se incrementa el contador de estudiantes
    cantidadEstudiantes++;

    // CLASIFICACIÓN APROBADO / REPROBADO

    if (notaEstudiante >= 70) {
        estudiantesAprobados.push(nombreEstudiante);
    } else {
        estudiantesReprobados.push(nombreEstudiante);
    }

    // CONVERSIÓN A NOTA EN LETRA

    let letraFinal;

    if (notaEstudiante >= 95) {
        letraFinal = 'A';
    } else if (notaEstudiante >= 90) {
        letraFinal = 'B';
    } else if (notaEstudiante >= 80) {
        letraFinal = 'C';
    } else if (notaEstudiante >= 70) {
        letraFinal = 'D';
    } else {
        letraFinal = 'F';
    }


    // GUARDAR RESULTADO TRANSFORMADO

    // Se guarda el nombre seguido de su letra
    listaConLetras.push(nombreEstudiante);
    listaConLetras.push(letraFinal);

    // Se imprime el resultado individual de cada estudiante
    console.log(`La calificación de ${nombreEstudiante} es ${letraFinal}`);
}


// PROMEDIO GENERAL

// Se calcula el promedio
let promedioFinal = sumaNotas / cantidadEstudiantes;

// Se redondea a 2 decimales usando Math.round
promedioFinal = Math.round(promedioFinal * 100) / 100;


// RESULTADOS GENERALES

console.log(`El promedio de calificaciones es: ${promedioFinal}`);
console.log(`Los estudiantes que aprobaron son: ${estudiantesAprobados.join(', ')}`);
console.log(`Los estudiantes que no aprobaron son: ${estudiantesReprobados.join(', ')}`);
console.log('La lista transformada es:', listaConLetras);
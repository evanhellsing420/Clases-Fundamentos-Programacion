let students = 20;
while (students > 0) {
    if (students % 2 === 0) {
        console.log('SORPRESA para estudiante', students);
    } else {
        console.log('Enviar correo a estudiante', students);
    }
    students = students - 1;
}
let estudiantes = ["Vanessa","Yhenifer","Gloria","Eliana","Linda"]

function showStudents(estudiantes) {
    for (let positionArrayStudents = 0; positionArrayStudents < estudiantes.length ; positionArrayStudents ++) {
        const estudiante = estudiantes[positionArrayStudents];
        console.log("hola soy " + estudiante+ " y estudio en migracode barcelona");
    }
    
}

showStudents(["Vanessa","Yhenifer","Gloria","Eliana","Linda"])
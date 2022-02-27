
const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Mimi";
const mentor4 = "Rob";
const mentor5 = "Yohannes";


function hacerNombreEnMayuscula(mentor) {
    const nombreEnMayuscula = mentor.toUpperCase();
    return nombreEnMayuscula;
    
}

function saludosAGritos(mentor) {
    return "HELLO" + " " + hacerNombreEnMayuscula(mentor)
}

console.log(saludosAGritos(mentor1));
console.log(saludosAGritos(mentor2));
console.log(saludosAGritos(mentor3));
console.log(saludosAGritos(mentor4));
console.log(saludosAGritos(mentor5));





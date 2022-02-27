function retornarEdadNacimiento1(age1) {
    const year = 2022;
    return year - age1;
    
}

console.log (retornarEdadNacimiento1(38))

function retornarEdadNacimiento2(age2) {
    const year = 2022;
    return year - age2;
    
}

console.log (retornarEdadNacimiento2(17))

function edadDeDiferencia(age1, age2) {
    return age2 - age1;

    
}
const resta = edadDeDiferencia (1984, 2005)


console.log(resta);

function result (age1, age2, resta) {
    return "Yo naci en " + retornarEdadNacimiento1(age1) + " y mi prima en " + retornarEdadNacimiento2(age2) + " tenemos de diferencia " + resta + " años"
    
}  

console.log(result(38,17,21));
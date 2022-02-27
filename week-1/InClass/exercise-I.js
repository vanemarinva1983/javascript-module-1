function retornarEdadNacimiento(age) {
    const year = 2022
    return year - age;
}

console.log (retornarEdadNacimiento(38))

function introducirNombreEdad(personName, age)
{
    return "Hola me llamo " + personName + " y naci en " + retornarEdadNacimiento(age)
}

console.log(introducirNombreEdad("Vanessa",38));

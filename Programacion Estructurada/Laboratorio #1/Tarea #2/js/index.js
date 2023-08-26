/*            Tarea 10 
Dado un string ingresado por el usuario,
escribir una función que calcule el número 
de letras y digitos que contiene. 
Devuelva el resultado como un objecto.*/

function countLettersAndDigits(inputString) {
    // Verifica si el tipo de dato de la entrada es una cadena.
    if (typeof inputString !== 'string') {
        throw new Error('La entrada debe ser una cadena');
    }

    // Limpia espacios en blanco al inicio y final y verifica si la cadena resultante está vacía.
    if (inputString.trim() === '') {
        throw new Error('El campo no debe estar vacío');
    }

    // Verifica si la cadena contiene caracteres especiales.
    if (inputString.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)) {
        throw new Error('No debe contener signos o caracteres especiales');
    }

    let letterCount = 0;  
    let digitCount = 0;   

    // Recorre cada carácter de la cadena.
    for (let i = 0; i < inputString.length; i++) {
        // Si el carácter es una letra, incrementa el contador de letras.
        if (inputString[i].match(/[a-zA-Z]/)) {
            letterCount++;
        } 
        // Si el carácter es un dígito, incrementa el contador de dígitos.
        else if (inputString[i].match(/[0-9]/)) {
            digitCount++;
        }
    }

    // Devuelve un objeto con la cantidad de letras y dígitos.
    return {
        letters: letterCount,
        digits: digitCount
    };
}

try {
    let input = prompt("Introduce una cadena:");
    // Llama a la función para contar letras y dígitos.
    let result = countLettersAndDigits(input);
    alert(`Letras: ${result.letters}, Números: ${result.digits}`);
    console.log(`Letras: ${result.letters}, Números: ${result.digits}`);
} 
catch (error) {
    alert(error.message);
    console.error(error.message);
}

//U20210160   Oscar Adonay Garcia Zeledon
// Constantes com const

// Regras para criar constantes:
// Não podemos criar constantes com palavras reservadas;
// Constantes precisam ter nomes significativos;
// Não pode começar o nome de uma constante com um número;
// Não podem conter espaços ou traços;
// Utilizamos camelCase;
// Case-sensitive;
// Não podemos modificar o valor de uma constante;
// Uma constante já precisa ser declarada e inicializada no
// mesmo momento;
// NÃO UTILIZE VAR, UTILIZE CONST.

/////////////////////////////////////////////////////////////////


// const name = 'João';
// console.log(name);  // => João

/////////////////////////////////////////////////////////////////

// const name;  // => SyntaxError: Missing initializer in const declaration
// console.log(name);

/////////////////////////////////////////////////////////////////

// const name = 'João';
// name = 'Otávo';
// console.log(name);  // => TypeError: Assignment to constant variable.

/////////////////////////////////////////////////////////////////

const firstNumber = 5;
const firstNumberStr = '5';
const secondNumber = 10;

const result = firstNumber * secondNumber;
const doubleResult = result * 2;
let tripleResult = result * 3;
tripleResult = tripleResult + 5;

console.log (result);                           // => 50
console.log (doubleResult);                     // => 100
console.log (tripleResult);                     // => 155

console.log(typeof firstNumber);                // => number
console.log(typeof firstNumberStr);             // => string

console.log(firstNumber + secondNumber);        // => 15
console.log(firstNumber + firstNumberStr);      // => 55

console.log(typeof(firstNumber + secondNumber));    // => number
console.log(typeof(firstNumber + firstNumberStr));  // => string



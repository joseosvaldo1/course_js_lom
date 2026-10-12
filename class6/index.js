// Variáveis com let:

// Regras para criar variáveis:
// Não podemos criar variáveis com palavras reservadas;
// Variáveis precisam ter nomes significativos;
// Não pode começar o nome de uma variável com um número;
// Não podem conter espaços ou traços;
// Utilizamos camelCase;
// Case-sensitive;
// Não podemos redeclarar variáveis com let;
// NÃO UTILIZE VAR, UTILIZE LET.


// let name = 'João';  // String
// // var name = 'João'; // Não podemos redeclarar variáveis com let

// console.log(name, 'was born in 1984.');
// console.log('In 2000',name, 'met Maria.');
// console.log(name, 'married Maria in 2012.');
// console.log('Maria had a child with', name, 'in 2015.');
// console.log(name, "'s son is named Eduardo.");


//////////////////////////////////////////////////////////

// let name;  // Variable declared but not initialized.
// console.log(name); // => undefined

// let name;  // Variable declared but not initialized.
// name = "Anything"; // Variable initialized with a string value.
// console.log(name); // => Anything

// let name;
// name = "João";
// console.log(name);  // => João
// name = "Otávio";
// console.log(name);  // => Otávio

// // let name;  // => SyntaxError: Identifier 'name' has already been declared

//////////////////////////////////////////////////////////////////////

let clientName = "Luiz"; // String
clientName = "Otávio"; // Reassigning the variable with a new string value.
console.log(clientName);

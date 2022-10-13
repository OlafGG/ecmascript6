function newFunction (name, age, country){
    var name = name || 'Olaf';
    var age = age || 21;
    var country = country || 'MX'
    console.log(name, age, country);
}
 //Con ENCMASCRIPT 6
function newFunction2(name = 'Olaf', age = 32, country = 'MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Uriel', '21', 'USA');

//Template o union de elementos

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


let lorem = "frase epica que se puede separar \n"
+ "otra frase epica"

let lorem2 = `otra frase epica
ahora otra frase epica
`;

console.log(lorem);
console.log(lorem2);

//Destructuracion de elementos

let person = {
    'name': 'Olaf',
    'age': 21,
    'country': 'MX'
}

console.log(person.name, person.age);

let {name, age, country} = person;
console.log(name, age);

//operador de propagaci[on

let team1 = ['Olaf', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

//Let es para el bloque de codigo: Var es global : const es una variable que no cambia

{
    var globalVar = "Global var"
}

{
    let globalLet = 'Global Let'
    console.log(globalLet);
}

console.log(globalVar);


const a = 'b';


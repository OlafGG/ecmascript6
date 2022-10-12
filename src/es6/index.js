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
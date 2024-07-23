const nome = "Paralelepipedo"

console.log(nome.charAt(13));
console.log(nome.charCodeAt(13));
console.log(nome.indexOf('a'));
console.log(nome.substring(8));
console.log(nome.substring(8, -1));
console.log(nome.substring(8, 10));
console.log(nome.replace('a', 4));


console.log('Allan,Ulli,Luna'.split(','));

let tempplate =`Testando a templatestring 
                ${nome}
`           
console.log(tempplate);

console.log(nome.length);
console.log(nome.toUpperCase());


const perssonagem = {};

perssonagem.nome = 'Frieren';

console.log(perssonagem);

function soma(a, b) {
    console.log(a + b); 
}

function mult(a, b = 0) {
    return a * b 
}

soma(4,2);
console.log(mult(4,2));


const div = (a, b) => {
    return a/b
}

console.log(div(10, 2));

const sub = (a, b) => a - b ;

console.log(sub(10, 2));

console.log(`------------------------------------------`);



const val = [];

for (var i = 0; i < array.length; i++) {
    val.push(function() {
        console.log(i);
    })
}
    
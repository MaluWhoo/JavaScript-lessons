// var e let

// Variavel global -> ambos aqui se comportam como global
// let numero = 10; 
// var numero ....


/*
            VAR --> Escopo global, função
            LET --> Escopo global, função, bloco

*/



{
    let numero = 5; //  usar o let dentro de um bloco, ela so estara visivel dentro desse bloco
    // VAR -> dentro de um bloco se comporta como uma variavel global
    console.log(numero);
}

function calcular(){
    numero += 10;
}

// calcular(); // Chamando função
console.log(numero);
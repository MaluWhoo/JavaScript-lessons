// // WHILE --> Usado quando você não sabe quantas vezes vai repetir, depende de uma condição.
// let numero = 1;
// while (numero <= 5){
//     console.log(`Executou ${numero}`);
//     numero ++;
// };


// DO.... WHILE
// let numero = 0;
// do{
//     console.log(`Executou ${numero}`);
//     numero --;
// }while (numero >= 1)


// Usando o FOR para criar itens de um ARRAY
let postagens = [
    "Hoje passeando pela av Paulista",
    "Passeando em Campos do Jordão",
    "Hoje eu fiz um curso de criação de site",
    "Aproveitando o dia!",
    "POSTAGEM 5"
];
let total = postagens.length

for( indice in postagens ){
    console.log(`${postagens[indice]}`);
}





// // FOR --> Usado quando você sabe quantas vezes quer repetir.
// for ( let numero = 0; numero < total; numero++){
//     console.log(`${postagens[numero]}`);
// };
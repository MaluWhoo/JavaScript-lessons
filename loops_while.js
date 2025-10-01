/* 
    while(condição){
        Executa então essa condição for verdadeira
    }
*/

// let numero = 1;

// while ( numero <= 4 ){
//     console.log(`Comeu pedaço pizza ${numero}!`)
//     numero ++;
// };

let postagens = [
    "Hoje passeando pela av Paulista",
    "Passeando em Campos do Jordão",
    "Hoje eu fiz um curso de criação de site",
    "Aproveitando o dia!"
];

let numero = 0;
// saber a quantidade de postagens que meu array pode ter 
const totalPostagens = postagens.length
console.log(`${totalPostagens}`);

while(numero <= totalPostagens){
    console.log(`IMAGEM ${numero}`);
    console.log(postagens[numero]);
    console.log("------");
    numero++;
};
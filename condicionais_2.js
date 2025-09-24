
/* Condicionais em JavaScript */

/* Operadores Relacionados = utiliza operadores de comparação e retorna o verdadeiro ou falso */


let pedidoMinimo = 20;
let carrinho = 20;

if (carrinho < pedidoMinimo) {
    console.log("Inválido para frete grátis ! Adicione mais itens ao seu carrinho.");
} else if (carrinho >= pedidoMinimo){
    console.log("Você recebeu frete grátias !! ");
}

/* Condicionais em JavaScript */

let idade = 17;

if(idade < 18) {
    console.log("Menor de idade");
} else if (idade >= 18){
    console.log("Maior de idade");
}

/*  
    --> OPERADORES LÓGICOS testa valores booleanos:

    && (E) - Verdadeiro se ambas as condições forem verdadeiras
    || (OU) - Verdadeiro se pelo menos uma das condições for verdadeira
    ! (NÃO) - Inverte o valor lógico (verdadeiro vira falso e vice-versa)

 */


let opcao = 6;

if (opcao == 1) {
    console.log("Saldo Conta");
} else if (opcao == 2) {
    console.log("Transferência");
} else if (opcao == 3) {
    console.log("Pagamento");
} else {
    console.log("Opção inválida");
}
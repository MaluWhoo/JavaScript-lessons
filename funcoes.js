/* FUNÇOES */

function calcularNota (nota1, nota2){

    let totalNotas = nota1 + nota2
    let media = totalNotas / 2

    return media
}

let media = calcularNota(6,7) // O primeiro valor no () é a nota1 e o segundo nota2

console.log("A média final é: " + media);

if (media >= 6){
    console.log("Aprovado !")
} else if (media < 6){
    console.log("Reprovado !")
}
    
    
    

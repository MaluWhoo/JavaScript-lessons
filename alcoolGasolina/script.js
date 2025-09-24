function calcularMelhorPreco() {

    // Validar campos
    let precoAlcool = document.getElementById('alcool').value // Pega o elemento pelo id e com o .value ele consegue capturar o valor
    let precoGasolina = document.getElementById('gasolina').value

    if (precoAlcool != "") {
        if (precoGasolina != "") {

            /* 

                Calculo: se o valor do alcool / da gasolina >= 0.7 é melhor utilizar Gasolina.

                Se não é melhor utilizar ácool

            */

            let resultado = precoAlcool / precoGasolina
            if (resultado >= 0.7) {
                // alert("Melhor utilizar gasolina.")
                document.getElementById('resultado').innerHTML = "Melhor utilizar gasolina." // innerHTML -> configura um valor
            } else {
                // alert("Melhor utilizar álcool.")
                document.getElementById('resultado').innerHTML = "Melhor utilizar álcool."
            }

        } else {
            alert("Adicione um valor na Gasolina.")
        }
    } else {
        alert("Adicione um valor no Álcool.")
    }

}
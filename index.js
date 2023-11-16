function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        return "Excesso de peso";
    } else if (imc >= 30.0 && imc <= 34.9) {
        return "Obesidade classe 1";
    } else if (imc >= 35.0 && imc <= 39.9) {
        return "Obesidade classe 2";
    } else {
        return "Obesidade classe 3";
    }
}

var resultados = [];

for (var i = 1; i <= 10; i++) {
    var peso = parseFloat(prompt("Informe o peso do usuário " + i + " (

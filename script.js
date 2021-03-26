let operacao = prompt("Qual operação deseja usar? 1) x | 2) / | 3) - | 4) +")

let primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
let segundoValor = parseInt(prompt("Digite o segundo valor:"))


if (operacao == 1) {
    let resultado = primeiroValor * segundoValor

    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
}

else if (operacao == 2) {
    let resultado = primeiroValor / segundoValor

    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
}

else if (operacao == 3) {
    let resultado = primeiroValor - segundoValor

    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
}

else if (operacao == 4) {
    let resultado = primeiroValor + segundoValor

    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
}

else {
    document.write("<h2>Opção inválida</h2>")
}




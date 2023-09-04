
function Carro(marca, modelo, ano, cor, kilometragem, valor_fipe) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.kilometragem = kilometragem;
    this.valor_fipe = valor_fipe;

    this.anosUtilizacao = function() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    };

    this.valorMercado = function() {
        if (this.kilometragem <= 30000) {
            return this.valor_fipe * 1.1;
        } else if (this.kilometragem > 30000 && this.kilometragem <= 50000) {
            return this.valor_fipe;
        } else {
            return this.valor_fipe * 0.9;
        }
    };
}

function calcularCarro() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = parseInt(document.getElementById("ano").value);
    const cor = document.getElementById("cor").value;
    const kilometragem = parseInt(document.getElementById("kilometragem").value);
    const valor_fipe = parseFloat(document.getElementById("valor_fipe").value);

    const carro = new Carro(marca, modelo, ano, cor, kilometragem, valor_fipe);

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `Anos de utilização: ${carro.anosUtilizacao()}<br>`;
    resultadoElement.innerHTML += `Valor de mercado: R$ ${carro.valorMercado().toFixed(2)}`;
}

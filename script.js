var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function() {
    document.querySelector(".container").classList.toggle("show-menu");
});

//Calcúlo do Orçamento
//Cada página do projeto terá um valor de R$100,00
//Ao escolher a linguagem pagará 10% a mais
//Ao solicitar projeto com layout incluso, será acrescido um valor de R$500,00
//Quanto maior a urgencia na entrega, mais pagará, tendo uma acrescimo de 10% sobre o valor total
document.querySelector("#qtde").addEventListener("change", atualizarValor)
document.querySelector("#js").addEventListener("change", atualizarValor)
document.querySelector("#layout-yes").addEventListener("change", atualizarValor)
document.querySelector("#layout-no").addEventListener("change", atualizarValor)

document.querySelector("#prazo").addEventListener("change", function() {
    prazo = document.querySelector("#prazo").value 
    document.querySelector("label[for=prazo]").innerHTML = `Prazo de Entrega: ${prazo} semanas`
    atualizarValor()
})


function atualizarValor() {
    const qtde = document.querySelector("#qtde").value
    const linguagem = document.querySelector("#js").checked
    const comLayout = document.querySelector("#layout-yes").checked
    const prazo = document.querySelector("#prazo").value

    let valor = qtde * 100;
    if(linguagem) {
        valor = valor + (valor * 10/100)
    } 
    if(comLayout) {
        valor = valor + 500
    } 
    let taxaUrgencia = 1 - prazo * 0.1;
    valor = valor + (valor*taxaUrgencia)

    document.querySelector ("#valor").innerHTML = `Orçamento: R$ ${valor.toFixed(2)}`
}

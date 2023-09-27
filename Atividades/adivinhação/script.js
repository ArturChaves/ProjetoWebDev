let sorteado = Math.floor((100*Math.random()));
let resposta = document.getElementById("resposta")
let lista = []
console.log(sorteado)

function buscar_numero(x){
    let tentativa = document.getElementById("input").value;
    if (tentativa == sorteado){
        resposta.style.backgroundColor = "green";
        resposta.innerHTML = "Parabéns, você conseguiu acertar!";
        const teste = true
    }; if(tentativa < sorteado){
        resposta.style.backgroundColor = "red";
        resposta.innerHTML = "Você errou, esse número é menor que o sorteado...";



    }; if(tentativa > sorteado){
        resposta.style.backgroundColor = "red";
        resposta.innerHTML = "Você errou, esse número é maior que o sorteado...";

    }
}
function tentativas(){
    let valor = parseInt(document.getElementById("input").value);
    lista += valor + ','
    document.getElementById('tentativas').innerHTML =  lista 


}
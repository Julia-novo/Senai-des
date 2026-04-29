const key = "c4d25ccaa73d9cc2e23b83d33c18e2a4"

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    colocarDadosNaTela(dados)
}
function colocarDadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em" + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector("texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML="Umidade :" + dados.main.humidity + "%"
    document.querySelector(".img-prevision").scroll = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}
function cliquenoBotao(){
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade;
}
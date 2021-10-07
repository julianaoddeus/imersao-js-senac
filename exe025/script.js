// 25 - Uma agência de carros quer exibir seu catálogo para os clientes. Eles exportaram os nomes dos carros no formato de array que se chama listaDeCarros:

// Seu trabalho é percorrer essa array exibindo os nomes dos carros:

// “Nome do Carro: Fox”
// “Nome do Carro: Uno”

let listaDeCarros = [ "Fox", "Uno", "Gol", "Astra", "Fiesta"];

for(let i = 0; i < listaDeCarros.length; i++) {
    console.log("Nome do carro: " + listaDeCarros[i]);
}
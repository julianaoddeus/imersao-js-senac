// 26 - Um sacolão montou uma lista com as frutas que eles vendem, e de acordo com a fruta que o usuário busca eles querem informar se existe a fruta na lista ou não!

// 
// Você deverá criar um loop que verifique se a fruta contida na variável busca existe na lista de frutas do sacolão. Se existe basta exibir uma mensagem, “Sim, temos a fruta banana disponível”. Use a variável busca para exibir o nome da fruta nessa mensagem de forma dinâmica.

let listaDeFrutas = [ "Uva", "Banana", "Manga", "Cajá", "Pinha"];
for(let busca = 0; busca < listaDeFrutas.length; busca++) {
    if(listaDeFrutas[busca] == "Banana"){
        console.log("Sim, temos a fruta banana disponível");        
    }
}
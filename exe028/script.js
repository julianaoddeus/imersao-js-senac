// 28 - A lavanderia DigitalLaundry lava roupa por quilo. Ela cobra dos seus clientes R$ 5,00 por cada quilo de roupa suja. Atualmente, eles usam um caderninho e uma calculadora para descobrir o valor que cada cliente tem a pagar. Precisamos automatizar essa empresa!

function CalculaValorDevido(pesoDaRoupaSuja){
    let valor = document.getElementById("valor").value;
    let total =  * valor;
    let resultado = document.querySelector(".resultado").innerHTML = "<p>R$ " + total + "</P>";
}


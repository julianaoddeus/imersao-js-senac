// 2 - Em uma escola, um professor quer calcular a média de notas dos seus alunos. Ele tem separado em variáveis cada nota dos trabalhos realizados por cada aluno:

// let trabalhoDeHistoria = 8.0
// let trabalhoDeMatematica = 7.0
// let trabalhoDeCiencia = 10
// let trabalhoDeGeografia = 9.5
// O professor já sabe que a média é calculada com a soma de todas as notas e dividindo pelo total.
// Mas ele se perdeu um pouco no código, e precisa da sua ajuda para terminar essa tarefa! Sua missão é ajudar o professor com o seu conhecimento dos operadores aritméticos para calcular a média dos alunos. Atribua na variável media o cálculo matemático para chegar no valor requisitado.

let trabalhoDeHistoria = 8.0;
let trabalhoDeMatematica = 7.0;
let trabalhoDeCiencia = 10;
let trabalhoDeGeografia = 9.5;

let media = (trabalhoDeHistoria + trabalhoDeMatematica + trabalhoDeCiencia + trabalhoDeGeografia) / 4;

console.log("A média é: " + media.toFixed(2));
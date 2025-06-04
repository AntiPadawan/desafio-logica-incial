//Variaveis / operadores / laços de repetição/ Estruturas de decisão
//se o XP for menor do que 1000 = ferro
//1001 e 2000 = bronze
//2001 e 5000 = prata
//5001 e 7000 = ouro
//7001 e 8000 = platina
//8001 e 9000 = Ascendente
//9001 e 10000 = Imortal
//se for maior que 10001 = Radiante

let nomeHeroi = "Padawan"
let nivelHeroi = 2500
let mensagemXp = "Seu nome é : " + nomeHeroi + " e seu nível é: " + nivelHeroi
let classificacaoHeroi = ""

for (let contador = 0; contador <= 3; contador++) {
    console.log("Contador: " + contador);
    if (nivelHeroi <= 1000) {
        console.log(classificacaoHeroi = " é Ferro");
    } else if (nivelHeroi >= 1001 && nivelHeroi <= 2000) {
        console.log(classificacaoHeroi = " é Bronze");
    } else if (nivelHeroi >= 2001 && nivelHeroi <= 5000) {
        console.log(classificacaoHeroi = " é Prata");
    } else if (nivelHeroi >= 5001 && nivelHeroi <= 7000) {
        console.log(classificacaoHeroi = " é Ouro");
    } else if (nivelHeroi >= 7001 && nivelHeroi <= 8000) {
        console.log(classificacaoHeroi = " é Platina");
    } else if (nivelHeroi >= 8001 && nivelHeroi <= 9000) {
        console.log(classificacaoHeroi = " é Ascendente");
    } else if (nivelHeroi >= 9001 && nivelHeroi <= 10000) {
        console.log(classificacaoHeroi = " é Imortal");
    } else if (nivelHeroi > 10000) {
        console.log(classificacaoHeroi = " é Radiante");
    }
}
console.log (mensagemXp + classificacaoHeroi)


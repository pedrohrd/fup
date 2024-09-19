var readlineSync = require('readline-sync');
let input = () : string => readlineSync.question();
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);

// gera um número inteiro entre superior e inferior
function random(inf: number, sup: number): number {
    return Math.floor(Math.random() * (sup - inf)) + inf;
}

let menor = 0;
let maior = 100;

write("Escolha seu número e aperte Enter");
input();

while (true){
    let chute = random(menor + 1, maior);
    write(`Seu número é o ${chute}? (1. Menor) (2. Maior) (3. Acertou): `, "")
    let resp = input();
    if (resp == "3") {
        console.log("acertei");
        break;
    }
    if (resp == "1") {
        maior = chute;
    }
    else {
        menor = chute;
    }
    if (maior - menor == 2){
        console.log("Eu perdi o jogo");
        break;
    }

}
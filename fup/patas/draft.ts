let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let palpiteChico = +input()
let palpiteCebolinha = +input()
let qtde = +input()
let soma = 0;

for(let i = 0; i <= qtde; i++){
  let animal = input();
  if(animal == "c" || animal == "v"){
    soma += 4;
  } else if (animal == "g") {
    soma += 2;
  }
}

write(soma);

let distancia_Cebolinha = palpiteCebolinha - soma;
if(distancia_Cebolinha < 0){
  distancia_Cebolinha = -distancia_Cebolinha;
}

let distancia_Chico = palpiteChico - soma;
if(distancia_Chico < 0){
  distancia_Chico = -distancia_Chico;
}

if(palpiteChico == palpiteCebolinha || distancia_Chico == distancia_Cebolinha){
  write("empate");
} else if (distancia_Cebolinha > distancia_Chico){
  write("Chico Bento");
} else {
  write("Cebolinha");
}
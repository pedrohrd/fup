let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let lista = input().split(" ")
let helicoptero = +lista[0]
let policial = +lista[1]
let fugitivo = +lista[2]
let direcao = +lista[3]

while (true) {
  fugitivo = fugitivo + direcao;
  if (fugitivo == -1){
    fugitivo = 15;
  }
  if (fugitivo == 16){
    fugitivo = 0;
  }
  if (fugitivo == helicoptero){
    console.log("S");
    break;
  }
  if (fugitivo == policial){
    console.log("N");
    break;
  }
}
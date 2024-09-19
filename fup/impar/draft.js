let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let P = +input()
let D_1 = +input()
let D_2 = +input()

// se P = 0, Alice gritou par
// se P = 1, Bob gritou par

// imprimir 0 se Alice ganhar
// imprimir 1 se Bob ganhar

let soma = D_1 + D_2

let soma_par = soma % 2 == 0

if (soma_par == 1)
  if (P == 0){
  console.log(0)
  } else {
    console.log(1)
  } 
  else if (soma_par == 0 && P == 0){
  console.log(1)
} else {
  console.log(0)
}
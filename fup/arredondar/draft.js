let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let caractere = input()
let numero = +input()

if (caractere == "c"){
  let res = Math.ceil(numero)
  console.log(res)
} else if (caractere == "f") {
  let res = Math.floor(numero)
  console.log(res)
} else if (caractere == "r") {
  let res = Math.round(numero)
  console.log(res)
}
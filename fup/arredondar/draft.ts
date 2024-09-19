let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

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

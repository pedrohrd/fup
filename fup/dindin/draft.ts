let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtde = +input()
let soma_chocolate = 0;
let soma_limao = 0;
let soma_manha = 0;
let soma_tarde = 0;

for (let i = 0; i < qtde; i++){
  let lista = input().split(" ")
  let sabor = lista[0]
  let turno = lista[1]
  if (sabor == "c"){
    soma_chocolate += 1;
  } else {
    soma_limao += 1;
  }
  if (turno == "m"){
    soma_manha += 1;
  } else {
    soma_tarde += 1;
  }
}

if (soma_chocolate > soma_limao){
  write("c")
} else if (soma_limao > soma_chocolate){
  write("l")
} else {
  write("empate")
}

if (soma_tarde > soma_manha){
  write("m")
} else if (soma_manha > soma_tarde){
  write("t")
} else {
  write("empate")
}
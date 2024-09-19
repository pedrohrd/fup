let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let capacidade = +input();
let soma = 0;
let passageiros = 0;

while(soma < 2 * capacidade){
  passageiros = +input();
  soma += passageiros;
  
  if (soma == 0){
    write("vazio");
  } else if (soma < capacidade){
    write("ainda cabe");
  } else if (soma >= capacidade && soma < 2 * capacidade){
    write("lotado");
  } else if (soma >= 2 * capacidade){
    write("hora de partir");
  }  
}
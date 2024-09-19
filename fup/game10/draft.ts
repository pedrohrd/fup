let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let numeroPosicoes = +input()
let posicaoDiscoVoador = +input()
let posicaoAviao = +input()

if (posicaoDiscoVoador == posicaoAviao){
  console.log(0)
} else if (posicaoDiscoVoador > posicaoAviao){
  let resp = posicaoDiscoVoador - posicaoAviao
  console.log(resp)
} else {     // if (posicaoDiscoVoador < posicaoAviao)
  let resp = (numeroPosicoes - posicaoAviao) + posicaoDiscoVoador
  console.log(resp)
}
let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let tabuleiro = +input()
let posicaoX = +input()
let posicaoY = +input()
let direcao = input()
let segundos = +input()

if (direcao == "U"){

} else if (direcao == "D"){

} else if (direcao == "L"){

}
 else {

}
let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtdededias = +input()
let soma = 0

for (let i = 0; i < qtdededias; i++){
  let calorias = +input()
  soma += calorias
}

write((soma/qtdededias).toFixed(1))
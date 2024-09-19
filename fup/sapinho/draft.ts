let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let profundidade = +input()
let salto = +input()
let desce = +input()
let posicao = 0

while(posicao <= profundidade){
  write(posicao, ' ')
  posicao += salto
  if (posicao >= profundidade){
    write("saiu")
    break;
  }
  write(posicao, '\n')
  posicao -= desce

}
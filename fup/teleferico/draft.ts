let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let capacidade = +input()
let alunos = +input()

if (alunos % (capacidade - 1)){
  console.log(Math.floor(alunos / (capacidade - 1) + 1))
} else {
  console.log(Math.floor(alunos / (capacidade - 1)))
}
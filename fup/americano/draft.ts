let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let jog1 = +input()
let jog2 = +input()
let jog3 = +input()
let jog4 = +input()

let soma = jog1 + jog2 + jog3 + jog4

if (soma == 0){
  console.log("nenhum")
} else if (soma == 1 || soma == 5){
  console.log("jog1")
} else if (soma == 2 || soma == 14){
  console.log("jog2")
} else if (soma == 3){
  console.log("jog3")
} else if (soma == 4 || soma == 8){
  console.log("jog4")
}

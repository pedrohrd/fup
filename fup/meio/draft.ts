let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let valor1 = +input()
let valor2 = +input()
let valor3 = +input()

if ((valor1 > valor2 && valor1 < valor3) || (valor1 < valor2 && valor1 > valor3)){
  write(valor1)
} else if ((valor2 > valor1 && valor2 < valor3) || (valor2 < valor1 && valor2 > valor3)) {
  write(valor2)
} else {
  write(valor3)
}
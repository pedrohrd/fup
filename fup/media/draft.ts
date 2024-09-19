let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function calcular_media(a: number, b: number): number {
  return (a + b) / 2
}

let a = +input()
let b = +input()
console.log(calcular_media(a, b).toFixed(1))
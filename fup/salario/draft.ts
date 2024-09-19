let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let salario = +input()

if (salario <= 1000){
  let resp = 1.2 * salario
  console.log(resp.toFixed(2))
} else if (salario <= 1500){
  let resp = 1.15 * salario
  console.log(resp.toFixed(2))
} else if (salario <= 2000){
  let resp = 1.1 * salario
  console.log(resp.toFixed(2))
} else {
  let resp = 1.05 * salario
  console.log(resp.toFixed(2))
}

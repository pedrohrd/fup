let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let num1 = +input()
let num2 = +input()

if (num1 % 3 == 0 && num2 % 3 == 0 || num1 % 5 == 0 && num2 % 5 == 0){
  write("sim")
} else {
  write("nao")
}
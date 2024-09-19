let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let monica = +input()
let filho1 = +input()
let filho2 = +input()

let filho3 = monica - filho1 - filho2

if (filho1 > filho2 && filho1 > filho3){
  write (filho1)
} else if (filho2 > filho1 && filho2 > filho3){
  write(filho2)
} else if (filho3 > filho1 && filho3 > filho2){
  write(filho3)
}
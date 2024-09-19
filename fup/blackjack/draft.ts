let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let coordx1 = +input()
let coordy1 = +input()
let coordx2 = +input()
let coordy2 = +input()

console.log = Math.sqrt(2)
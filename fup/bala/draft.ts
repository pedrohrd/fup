let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let x1: number = +input()
let y1: number = +input()
let x2: number = +input()
let y2: number = +input()

let x: number = x2 - x1
let y: number = y2 - y1

let res: number = Math.pow(x,2) + Math.pow(y,2)

res = Math.sqrt(res)

console.log(res.toFixed(2));
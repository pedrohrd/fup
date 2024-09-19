let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let base: number = 160 - +input()
let topo: number = 160 - +input()

let area_trapezio1: number = ((base + topo) * 70) / 2
let area_trapezio2: number = 11200 - area_trapezio1

if (area_trapezio1 > area_trapezio2){
  console.log("2")
} else if (area_trapezio2 > area_trapezio1) {
 console.log("1")
} else {
  console.log("0")
}
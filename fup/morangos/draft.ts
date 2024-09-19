let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let comp_1: number = +input();
let larg_1: number = +input();
let comp_2: number = +input();
let larg_2: number = +input();

let area_1: number = comp_1 * larg_1;
let area_2: number = comp_2 * larg_2;

if (area_1 > area_2){
  console.log(area_1);
} else {
  console.log(area_2);
}
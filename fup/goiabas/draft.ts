let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let capacidade: number = +input();
let bananas: number = +input();
let goiabas: number = +input();
let mangas: number = +input();

let soma: number = bananas + goiabas + mangas;

if (capacidade >= soma){
  write("1")
} else {
  write(Math.ceil(soma / capacidade))
}
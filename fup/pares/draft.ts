let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let A = +input();
let B = +input();
let soma = 0

if (A > B){
  write("invalido")
} else {
  for (let i = A; i <= B; i += 1){
    if (i % 2 == 0){
      soma += i
    }
  }
  write(soma)
}
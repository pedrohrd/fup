let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd: number = +input();
let vetor: number[] = input().split(" ").map(Number);

write("[", " ")

for (let i = qtd - 1; i >= 0; i--){
    write(vetor[i], " ")
}

write("]")
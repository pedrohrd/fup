let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd: number = +input();
let vetor: number[] = input().split(" ").map(Number);

write("[", "")

for (let i = 0; i < qtd; i++){
    if (i == 0){
        write(vetor[i], "")
    }
    if (i != 0){
        write(", ", vetor[i])
    }
}

write("]")
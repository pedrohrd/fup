let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd: number = +input();
let vetor: number[] = input().split(" ").map(Number);

let vetor_par: nnumber[] = [];
let vetor_impar: number[] = [];

for (let i = 0; i < qtd; i++){
    if (vetor[i] % 2 == 0){
        vetor_par.push(vetor[i])
    } else {
        vetor_impar.push(vetor[i])
    }

}

write("[ ", "")
for (let i = 0; i < vetor_impar.length; i++){
    write(vetor_impar[i], " ")

}
write("]")

write("[ ", "")
for (let i = 0; i < vetor_par.length; i++){
    write(vetor_par[i], " ")

}
write("]")
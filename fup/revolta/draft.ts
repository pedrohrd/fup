let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let tamanho: number = +input()
let vet: number[] = []
let soma_par: number = 0
let soma_impar: number = 0

for (let i = 0; i < tamanho; i++){
    vet.push(+input());
    if (vet[i] % 2 == 0){
        soma_par += vet[i]
    } else {
        soma_impar += vet[i]
    }
}

if (soma_par > soma_impar){
    write("rebeldes")
} else if (soma_impar > soma_par){
    write("soldados")
} else {
    write("empate")
}
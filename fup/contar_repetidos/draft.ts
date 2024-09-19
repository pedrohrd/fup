let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function contar_ocorrencias(lista: number[], valor: number): number {
    let cont = 0;
    for (let elem of lista) {
        if (elem == valor){
            cont += 1;
        }
    }
    return cont;
}

let [procurado, quantidade] = input().split(" ").map(x=>+x)
let vet: number[] = []

for (let i = 0; i < quantidade; i++){
    vet.push(+input());
}

let resp = contar_ocorrencias(vet, procurado);
write(resp);
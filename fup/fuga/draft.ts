let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let lista: string[] = input().split(" ");
let helicoptero: number = +lista[0]
let policia: number = +lista[1]
let fugitivo: number = +lista[2]
let direcao: number = +lista[3]

while (true){
    fugitivo = fugitivo + direcao;
    if (fugitivo == 16){
        fugitivo = 0;
    }
    if (fugitivo == -1){
        fugitivo = 15;
    }
    if (fugitivo == helicoptero){
        write("S");
        break;
    }
    if (fugitivo == policia){
        write("N");
        break;
    }
}
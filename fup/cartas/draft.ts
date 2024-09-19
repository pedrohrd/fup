let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function valor_para_nome(value: string): string {
    //let nomes: string[] = ["", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    if (value == "1") { return "A";}
    if (value == "11") { return "J";}
    if (value == "12") { return "Q";}
    if (value == "13") { return "K";}   
    return value;
}

let qtd: number = +input()
let valores = input()
              .split(" ")
              .map(valor_para_nome)
              .join(", ");

write("[" + valores + "]")
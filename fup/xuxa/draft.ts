let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let frase: string = input();

let fraseInvertida = "";

// Loop para percorrer a string de trás para frente
for (let i = frase.length - 1; i >= 0; i--) {
    fraseInvertida += frase[i];
}

write(fraseInvertida);
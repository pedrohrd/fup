let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let divisor = 2;
let contador: number = 0;

let numero: number = +input();

while(numero > 1){
    if (numero % divisor == 0){
        numero /= divisor;
        contador += 1;
    } else {
        if (contador > 0){
            write(`${divisor} ${contador}`);
            contador = 0;
        }
        divisor += 1;
    }
}
write(`${divisor} ${contador}`);
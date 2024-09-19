let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let limite = +input()

for (let i = 1; i <= limite; i += 1) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

for (let p = limite; p >= 0; p -= 1) {
    if (p % 2 == 0) {
        console.log(p);
    }
}

/* Sem o if
for (let i = 1; i <= limite; i += 2) {
    console.log(i);
}

for (let p = limite - 1; p >= 0; p -= 2) {
    console.log(p);
}
*/
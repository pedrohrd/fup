let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let [a, b] = input().split(" ").map(Number);

write("[", " ")

while (true) {
    if (a > b){
        for (let i = a; i > b; i--) {
            write(i, " ");
        }
        break;
    } else {
        for (let i = a; i < b; i++) {
            write(i, " ");
        }
        break;       
    }
}
write("]")
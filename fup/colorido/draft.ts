rlet _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let pedra = +input()
let pe = input()

let resp = "[ "

for (let i = 0; i < 10; i += 1){
  if (i != pedra){
    resp += i + pe + " "
    if (pe == "d"){
      pe = "e"
    } 
    else {
      pe = "d"
    }
  }
  if (i == 9 && pedra != 10){
    resp += "ceu "
  }
}

resp += "]"

write(resp)
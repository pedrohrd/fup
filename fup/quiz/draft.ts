let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let resp_1 = input();
let resp_2 = input();
let resp_3 = input();
let resp_4 = input();

let soma = 0;

if (resp_1 == "d") {
  soma += 1;
}
if (resp_2 == "a") {
  soma += 1;
}
if (resp_3 == "c") {
  soma += 1;
}
if (resp_4 == "d") {
  soma += 1;
}

if (soma == 0) {
  console.log("Nunca assistiu")
} else if (soma == 1) {
  console.log("Ja ouviu falar")
} else if (soma == 2) {
  console.log("Interessado no assunto")
} else if (soma == 3) {
  console.log("Fa")
} else if (soma == 4) {
  console.log("Super Fa")
}
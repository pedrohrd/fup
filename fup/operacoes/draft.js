let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let n1 = +input()
let n2 = +input()

let soma = n1 + n2
let sub = n1 - n2
let mult = n1 * n2
let div = (n1 / n2).toFixed(2)
let resto = n1 % n2

console.log(soma + "\n" + sub + "\n" + mult + "\n" + div + "\n" + resto)
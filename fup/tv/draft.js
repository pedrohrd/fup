let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end = "\n") => process.stdout.write("" + text + end);

let valor = +input()
let qtd = +input()
let juros = (qtd - 1) * 5
let total = valor * (1 + juros / 100)
let parcela = total / qtd

console.log(parcela.toFixed(2) + "\n" + total.toFixed(2))
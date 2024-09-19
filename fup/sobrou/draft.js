let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end = "\n") => process.stdout.write("" + text + end);

let qtde1 = +input();
let qtde2 = +input();
let qtde3 = +input();

let valor1 = +input();
let valor2 = +input();
let valor3 = +input();

let dinheiro = +input();

let total = (qtde1 * valor1) + (qtde2 * valor2) + (qtde3 * valor3);

let res = (dinheiro - total).toFixed(2);

console.log(res);
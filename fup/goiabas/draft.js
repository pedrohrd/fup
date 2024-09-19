let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let capacidade = +input()
let bananas = +input()
let goiabas = +input()
let mangas = +input()

let soma = bananas + goiabas + mangas


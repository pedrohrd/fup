let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end = "\n") => process.stdout.write("" + text + end);

let tempo = +input();

let hora = Math.floor(tempo / 3600);
let minuto = Math.floor((tempo % 3600) / 60);
let segundo = tempo % 60;

console.log(hora + ":" + minuto + ":" + segundo);
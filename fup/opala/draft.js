let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end = "\n") => process.stdout.write("" + text + end);

let vel = +input()
let tempo = +input()
let consumo = +input()

tempo = tempo / 60
let dist = vel * tempo

let des = dist / consumo

console.log(des.toFixed(2))
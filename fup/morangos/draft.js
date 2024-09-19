let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let comp1 = +input()
let larg1 = +input()
let comp2 = +input()
let larg2 = +input()

let area1 = comp1 * larg1
let area2 = comp2 * larg2

if (area1 > area2){
  console.log(area1)
} else {
  console.log(area2)
}
let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input()
let b = +input()
let c = +input()

let delta = (b * b) - 4 * a * c

if (delta > 0){
  let x1 = (- b + Math.sqrt(delta)) / (2 * a)
  let x2 = (- b - Math.sqrt(delta)) / (2 * a)
  console.log(x1.toFixed(2))
  console.log(x2.toFixed(2))
} else if (delta == 0){
    let x1 = (- b + Math.sqrt(delta)) / (2 * a)
    console.log(x1.toFixed(2))
  } else {
  console.log("nao ha raiz real")
  }
let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let num1 = +input()
let num2 = +input()

if (num1 % 3 == 0 && num2 % 3 == 0){
  console.log("sim")
} else if (num1 % 5 == 0 && num2 % 5 == 0){
  console.log("sim")
} else {
  console.log("nao")
}
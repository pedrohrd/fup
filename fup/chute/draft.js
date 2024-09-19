let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let valor = +input()
let chute1 = +input()
let chute2 = +input()

let dif1 = Math.abs(chute1 - valor)
let dif2 = Math.abs(chute2 - valor)

if (dif1 < dif2){
  console.log("primeiro")
} else if (dif2 < dif1){
    console.log("segundo")
} else {
  console.log("empate")
}
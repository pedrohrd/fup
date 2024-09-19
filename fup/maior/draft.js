let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let chute = +input()
let escolha = input()
let valor = +input()

if (chute == valor){
  console.log("primeiro")
} else if (chute < valor && escolha === 'M') {
  console.log("segundo"); // Segundo jogador escolhe 'maior' corretamente
} else if (chute > valor && escolha === 'm') {
  console.log("segundo"); // Segundo jogador escolhe 'menor' corretamente
} else {
  console.log("primeiro"); // Segundo jogador escolhe errado
}

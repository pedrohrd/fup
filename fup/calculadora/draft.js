let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let n1 = +input()
let n2 = +input()
let operador = input()

if (operador == '+'){
  let soma = n1 + n2
  console.log(soma)
} else if (operador == '-'){
  let subtracao = n1 - n2
  console.log(subtracao)
} else if (operador == '*'){
  let multiplicacao = n1 * n2
  console.log(multiplicacao)
} else if (operador == '/'){
  console.log(Math.floor(n1 / n2))
}
let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let Alcool = +input()  // preço por litro alcool
let Gasolina = +input()  // preço por litro gasolina
let RendAlcool = +input() // rendimento (km/l) alcool
let RendGasolina = +input() // rendimento (km/l) gasolina

let precoA = Alcool / RendAlcool
let precoG = Gasolina / RendGasolina

console.log(Alcool)

if (precoA < precoG){
  console.log('A')
} else if (precoA >= precoG){
  console.log('G')
}
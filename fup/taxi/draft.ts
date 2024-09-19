let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let lista = input().split(" ")
let Alcool = +lista[0]  // preço por litro alcool
let Gasolina = +lista[1]  // preço por litro gasolina
let RendAlcool = +lista[2] // rendimento (km/l) alcool
let RendGasolina = +lista[3] // rendimento (km/l) gasolina

let precoA = Alcool / RendAlcool
let precoG = Gasolina / RendGasolina

if (precoA < precoG){
  console.log('A')
} else if (precoA >= precoG){
  console.log('G')
}
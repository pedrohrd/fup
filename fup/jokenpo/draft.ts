let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

// nome descritivo, normalmente com verbo
function decidir_jogador(jog1: string, jog2: string): string {
  if (jog1 == jog2){
    return "Empate";
  } 
  if (jog1 == "R" && jog2 == "S" || 
      jog1 == "P" && jog2 == "R" || 
      jog1 == "S" && jog2 == "P") {
     return"Jogador 1";
  }
  return"Jogador 2";
}

console.log("o resultado foi " + decidir_jogador("P", "S"));
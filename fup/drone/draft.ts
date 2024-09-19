let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let largura_caixa: number = +input()
let altura_caixa: number = +input()
let prof_caixa: number = +input()

let altura_janela: number = +input()
let largura_janela: number = +input()

if (largura_caixa < altura_janela && largura_caixa < largura_janela || 
    altura_caixa < altura_janela && altura_caixa < largura_janela || 
    prof_caixa < altura_janela && prof_caixa < largura_janela){
  console.log("S")
} else {
  console.log("N")
}
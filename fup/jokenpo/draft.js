let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let jog1 = input()
let jog2 = input()

// R pedra ... P paper ... S tesoura

if (jog1 == jog2){
  console.log("empate")
} else if (jog1 == "R" && jog2 == "S"){
  console.log("jog1")
} else if (jog1 == "R" && jog2 == "P"){
  console.log("jog2")
} else if (jog1 == "P" && jog2 == "S"){
  console.log("jog2")
} else if (jog1 == "S" && jog2 == "R"){
  console.log("jog2")
} else if (jog1 == "P" && jog2 == "R"){
  console.log("jog1")
} else if (jog1 == "S" && jog2 == "P"){
  console.log("jog1")
}
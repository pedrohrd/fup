let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

for (let i = 0; i < 10; i+= 1){
  console.log(i)
}

let a = 0;
let b = 10;

while (a < 10){
  console.log(a + " " + b);
  a += 1;
  b -= 1;
}

let s = 0;
while(true){
  console.log(s)
  s += 1;
  if (s >= 10){
    break;
  }
}
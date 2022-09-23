let a = Number(prompt("Unesite prvi broj"));
let b = Number(prompt("Unesite drugi broj"));
let c = Number(prompt("Unesite treci broj"));
let maks = Number(Math.max(a,b,c));
if(a===c){
  console.log("Brojevi " + a + " i " + c + " su isti");
}
else if(a===b){
  console.log("Brojevi " + a + " i " + b + " su isti");
}
else if(b===c){
  console.log("Brojevi " + b + " i " + c + " su isti");
}
else{
  console.log("Najveci broj je " + maks);
}
const button = document.querySelector("button");
button.addEventListener("click",rolldice);

const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")

function rolldice(){
let a = parseInt((Math.random()*6))+1;
let b = parseInt((Math.random()*6))+1;


p1.innerHTML ="Dice 1: "+a;
p2.innerHTML ="Dice 2: "+b;
p3.innerHTML ="Dice Total: "+(a+b);


}

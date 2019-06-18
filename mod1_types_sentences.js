function hexFirst (decNum) {
switch (decNum - 9) {
case 1: return "A"
break;
case 2: return "B"
break;
case 3: return "C"
break;
case 4: return "D"
break;
case 5: return "E"
break;
case 6: return "F"
break;
default:
break;}
return;}

function toHex (num) {
if (num < 10) {
return num;}
else if (num < 16) {
return hexFirst(num);
}
else {
let div = Math.floor(num / 16);
let newNum = num - div*16;
return ""+div+toHex(newNum);}
}

function toOct (numDecO) {
var numOct = "";
let cociente = numDecO;
let residuo = 0;
if (numDecO < 8) {
return numDecO;}
else {
do {
residuo = cociente % 8;
numOct = ""+residuo+numOct;
cociente = Math.floor(cociente / 8);
}
while (cociente >= 8);
numOct = ""+cociente+numOct;
}
return numOct;
}

function toBin (numDecB) {
var numBin = "";
let cociente = numDecB;
let residuo = 0;
do {
residuo = cociente % 2;
numBin = ""+residuo+numBin;
cociente = Math.floor(cociente / 2);
}
while (cociente >= 2);
numBin = ""+cociente+numBin;
return numBin;
}

'\n'
let hour = new Date().getHours();
let greeting;
if (hour >= 22 || hour <=6) {
greeting = "nigth";}
else if (hour <= 12) {
greeting = "morning";}
else {
greeting = "afternoon";}
console.log("Good "+greeting+", it's "+hour+" o'clock");
'\n'
console.log(Math.PI.toFixed(6));
'\n'
for(let i=0;i<=22;i++){
console.log(i+" dec = "+toHex(i)+" hex = "+toOct(i)+" oct = "+toBin(i)+" bin"+"\n");}
'\n'
for(let i=1;i<22;i+=2){
if (i < 10 || i > 20){
console.log(i+" dec = "+toHex(i)+" hex = "+toOct(i)+" oct = "+toBin(i)+" bin"+"\n");}
}
'\n'
console.log("Hi in Chinese is written as: \u55e8\uff0c\u4f60\u597d\u5417");
'\n'
console.log("The program has finished");

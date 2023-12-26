var pName1 = prompt("Enter Name of Player 1");
var pName2 = prompt("Enter Name of Player 2");
document.querySelector("#p1").innerHTML=pName1;
document.querySelector("#p2").innerHTML=pName2;

var randomNumber1= Math.floor(Math.random() * 6) + 1;
var randomNumber2= Math.floor(Math.random() * 6) + 1;

var randomImage1Source = "./images/"+"dice"+randomNumber1+".png";
var randomImage2Source = "./images/"+"dice"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImage1Source);
document.querySelectorAll("img")[1].setAttribute("src",randomImage2Source);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins 🥳";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins 🥳";
}
else{
    document.querySelector("h1").innerHTML="Tie 😖";

}
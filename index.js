var num1 = Math.floor(Math.random()*6 + 1);
var num2 = Math.floor(Math.random()*6 + 1);

var randomImg1 = "images/" + "dice" + num1 + ".png";
var randomImg2 = "images/" + "dice" + num2 + ".png";

var imgsrc1 = document.querySelector(".img1");
imgsrc1.setAttribute("src", randomImg1);

var imgsrc2 = document.querySelector(".img2");
imgsrc2.setAttribute("src", randomImg2);

var winner = document.querySelector(".container h1");

if(num1 > num2){
  winner.innerHTML = "🚩Player1 wins!";
}else if(num1 <num2){
  winner.innerHTML = "🚩Player2 wins!";
}else{
  winner.innerHTML = "Draw!!";
}

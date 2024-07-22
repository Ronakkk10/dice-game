var randomvar1=Math.floor(Math.random()*6)+1;



var randomimagesrc="images/"+"dice"+randomvar1+".png";

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randomimagesrc);

var randomvar2=Math.floor(Math.random()*6)+1;
var randomimagesrc2="images/"+"dice"+randomvar2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimagesrc2);


if(randomvar1>randomvar2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomvar1<randomvar2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML="DRAW";
}
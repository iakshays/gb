alert("Hii user!")
var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("asp")


function set(){
	body.style.background="linear-gradient(to right, "
	+color1.value
	+" , "
	+color2.value+ " )";
	}


if(color1){
color1.addEventListener("input", set);}
if(color2){
color2.addEventListener("input", set);}

let input=document.querySelector("#input");
// document.querySelector(".card1").style.visibility="hidden";
// document.querySelector(".card2").style.visibility="hidden";
// document.querySelector(".card3").style.visibility="hidden";
input.addEventListener('input',loadfunction);
function loadfunction(e){
    let lbs=parseFloat(e.target.value);
document.querySelector(".card1").style.visibility="visible";
document.querySelector(".card2").style.visibility="visible";
document.querySelector(".card3").style.visibility="visible";
   
    document.querySelector(".grams-output").innerHTML=lbs/0.0022046;
    document.querySelector(".kg-output").innerHTML=lbs/2.2046;
    document.querySelector(".oz-output").innerHTML=lbs*16;
 
}
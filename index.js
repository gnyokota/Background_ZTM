var text = document.querySelector("h3");
var colorOne = document.getElementsByClassName("firstColor")[0];
var colorTwo = document.getElementsByClassName("secondColor")[0];
var body = document.getElementById("mainBody");
var button = document.getElementById("btnRandom");

colorOne.addEventListener("input", setGradient);

colorTwo.addEventListener("input",setGradient);

function setGradient(){
  body.style.background = "linear-gradient(to right," + colorOne.value + "," + colorTwo.value + ")";
  text.textContent = "background-image: " + body.style.background + ";";
}

  button.addEventListener("click", randomColor);

  function randomColor(){
    var number1 = Math.round(Math.random()*1000);
    var number2 = Math.round(Math.random()*1000);
    var number3 = Math.round(Math.random()*1000);
    var number4 = Math.round(Math.random()*1000);
    var number5 = Math.round(Math.random()*1000);
    var number6 = Math.round(Math.random()*1000);
    
    body.style.background = "linear-gradient(to right, rgb(" + number1 + "," + number2 + "," + number3 + "), rgb("+ number4 + "," + number5 + "," + number6 + ")";
    text.textContent = "background-image: " + body.style.background + ";";
  }

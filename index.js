var colorOne = document.getElementsByClassName("firstColor")[0];
var colorTwo = document.getElementsByClassName("secondColor")[0];
var text = document.getElementsByTagName("h3")[0];
var body = document.getElementById("mainBody");
var button = document.getElementById("btnRandom");
var gradientSelector = document.getElementById("gradient-selector");
//global variable for closure
let backgroundType;


colorOne.addEventListener("input", setGradient);

colorTwo.addEventListener("input",setGradient);

gradientSelector.addEventListener("change",selectorValue);

button.addEventListener("click", randomColor);

gradientSelector.addEventListener("change", selectorValue);

function selectorValue(event){
  backgroundType = (event.target.value).replace("-", " ");
  return backgroundType;
}


function setGradient(){
  body.style.background = `linear-gradient(${backgroundType}, ${colorOne.value}, ${colorTwo.value})`;
  text.textContent = `background-image: ${body.style.background};`;
}



function randomColor(event){
  if (backgroundType != null){
    var number1 = Math.round(Math.random()*1000);
    var number2 = Math.round(Math.random()*1000);
    var number3 = Math.round(Math.random()*1000);
    var number4 = Math.round(Math.random()*1000);
    var number5 = Math.round(Math.random()*1000);
    var number6 = Math.round(Math.random()*1000);

    body.style.background = `linear-gradient(${backgroundType}, rgb( ${number1}, ${number2}, ${number3}), rgb( ${number4}, ${number5}, ${number6})`;
    text.textContent = "background-image: " + body.style.background + ";";
  }
  else{
    alert("You should select a gradient type!!")
  }
}


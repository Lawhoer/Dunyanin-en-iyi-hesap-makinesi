//elemanları cekiyoruz
const display = document.querySelector(".display");
const body = document.querySelector("body");
const class_buttons = document.querySelectorAll(".buttons");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
const text = document.getElementById("scroll-text");
let output = "";

function calculate (value) {
  //Ekrana odaklanma  
  display.focus();
  if (value === "=" && output !== "") {
    //Burası genel mat islemlerinin oldugu yer ama eger "%" gelrise onu "/" ile degistiriyor
    output = eval(output.replace("%", "/100"));
  } else if (value === "AC") {
    output = "";
  } else if (value === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(value)) return;
    output += value;
  }
  display.value = output;
}

// Evet bunu kullanmak yerine math.random ile de yapılabilirdi ama bunu yapmak istemedim başka soru? :D
function shuffleArray(array,n) {
  for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

function change(){
  const array = [1,2,3,4,5];
  const colors = ["#404E5C","#4F6272","#B7C3F3","#DD7596","#CF1259"];
  
  // Satır ici yer degistiriyor
  var i=0;
  shuffleArray(array,4);
  buttons.forEach(button => {
    button.style.order = array[i];
    shuffleArray(colors,5)
    button.style.backgroundColor = colors[i];
    body.style.backgroundColor = colors[i];
    button.style.color = "#eee";
    i++;
    if(i==4){
      i=0;
      shuffleArray(array,4);
    }
  }); 

  // Satırlar butonlar yer degistiriyor
  i=0;
  shuffleArray(array,5);
  class_buttons.forEach(item => {
    item.style.order = array[i];
    i++;
  });
}

var previousClickTime = null;
function time(){

  

  var currentTime = new Date().getTime();
  if (previousClickTime !== null) {
    var elapsedTime = currentTime - previousClickTime;
  }
  previousClickTime = currentTime;
  if(previousClickTime!=null){
    text.innerHTML = "WWWWWWWWEEEEEEEEEAAAAAAAAAAAAAKKKKKKKKKKKKK!!!!!!"
  }
  if(elapsedTime>5000){
    text.innerHTML = "noldu lan amina koydugum salagi bulamadin mi tusu ha WWEAAKKK!!!";
  }

}

var animationend = false;
text.addEventListener('animationend', function(event) {
  if (event.animationName === 'my-animation') {
    animationend = true;
  }
}); 

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculate(e.target.dataset.value)
    change()
    time()
    animationend = false;
  });
});








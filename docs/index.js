var x = 0;
var y = 0;
var header = "Hello World!";
var para = "I am Muneet Jaswal. A Computer Science and AI student at the University of Sussex."
var media = window.matchMedia("(max-width: 600px)")

window.onscroll = function() {scrollFunction()};
window.onload = function headingText(){
    if(x < header.length){
      var textbox = document.getElementById("welcome-text-heading");
      textbox.innerHTML += header.charAt(x);
      x++;
      setTimeout(headingText,80);
    }
    setTimeout(paraText,1000)
}

function paraText(){
  if(y < para.length){
    var textbox = document.getElementById("welcome-text-paragraph");
    textbox.innerHTML += para.charAt(y);
    y++;
    setTimeout(paraText,500);
  }
}

function navClick(stack){
    
    stack.classList.toggle("active");
    var menu = document.getElementById("links")
    if(menu.style.display === "flex"){
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
    }
}

function hideMenu(){
  if(media.matches){
    var stack = document.getElementById("stack");
    stack.classList.toggle("active")
  }
}

function scrollFunction() {
  if(!window.matchMedia("(max-width: 600px)").matches){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("navBar").style.height = "3.5vh"
      document.getElementById("navBar").style.fontSize = "1em"
    } else {
      document.getElementById("navBar").style.height = "10vh"
      document.getElementById("navBar").style.fontSize = "1.5em"
    }
  }
}



function navClick(stack,menu){
    
    stack.classList.toggle("active");
    var menu = document.getElementById("links")
    if(menu.style.display === "flex"){
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
    }
}

window.onscroll = function() {scrollFunction()};

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


var body = document.querySelector("#body");
var cbutton = document.querySelector(".cbutton");


function changeBkg(event) {
    event.stopPropagation();
    body.setAttribute("class", "cw");
}
  
cbutton.addEventListener("click", changeBkg);


document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("orangebox").style.height = "250px";

});

document.getElementById("shrinkbutton").addEventListener("click", function(){

    document.getElementById("orangebox").style.height = "50px";

});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("orangebox").style.backgroundColor = "blue";

});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("orangebox").style.opacity; 0;
        
    document.getElementById("orangebox").classList.toggle("fade")
    
});

document.getElementById("button4").addEventListener("click", function(){
        
    document.getElementById("orangebox").style.height = "150px";

    document.getElementById("orangebox").style.backgroundColor = "orange";

});


   








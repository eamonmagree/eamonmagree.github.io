window.onload = function() {

// first draggable div
letdraggableDiv = document.getElementsByClassName("draggable")[0];

// element that is getting dragged
let dragTarget = null;
//initial position drgged from and dragged elements initial position
let dragStartX, dragStartY, dragObjLeft, dragObjTop;

// button to do something

// example for range
/* window.addEventListener("mousemove", checkMousePosition); */

}

/* function checkMousePosition(e){
    console.log(e.clientX);
    if(e.clientX > 422){
        conosle.log("right");
    } else {
        console.log("left");
    }  
} */

// range 0 => 844

screen.addEventListener("orientationchange", () => {
    console.log(`The orientation of the screen is: ${screen.orientation}`);
  });  

screen.orientation.lock("landscape") ;

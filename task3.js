function changeColor() {
    var mycolor = document.querySelector(".head");

    if (mycolor.style.color === "blue"){
         mycolor.style.color = "#FF0000";
         mycolor.innerHTML ="Onclick text color will change to blue"
    }  
    else {
        mycolor.style.color = "blue";
        mycolor.innerHTML ="Onclick text color will change to red"
    }
}


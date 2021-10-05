function show1(){
    var list = document.getElementById("droplist1");
    var arrowDown = document.querySelector(".arrow-down1");
    var arrowRight = document.querySelector(".arrow-right1");

    if(list.className === "active"){
        list.classList.remove("active");
        arrowDown.classList.add("active");
        arrowRight.classList.remove("active");
    }
    else{
        list.classList.add("active");
        arrowDown.classList.remove("active");
        arrowRight.classList.add("active");
        
    }
}
function show2(){
    var list = document.getElementById("droplist2");
    var arrowDown = document.querySelector(".arrow-down2");
    var arrowRight = document.querySelector(".arrow-right2");

    if(list.className === "active"){
        list.classList.remove("active");
        arrowDown.classList.add("active");
        arrowRight.classList.remove("active");
    }
    else{
        list.classList.add("active");
        arrowDown.classList.remove("active");
        arrowRight.classList.add("active");
        
    }
}

function show3(){
    var list = document.getElementById("droplist3");
    var arrowDown = document.querySelector(".arrow-down3");
    var arrowRight = document.querySelector(".arrow-right3");

    if(list.className === "active"){
        list.classList.remove("active");
        arrowDown.classList.add("active");
        arrowRight.classList.remove("active");
    }
    else{
        list.classList.add("active");
        arrowDown.classList.remove("active");
        arrowRight.classList.add("active");
        
    }
}
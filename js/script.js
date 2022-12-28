let x = 0;

function menu() {

    if(x == 0){
        document.getElementById("menu").classList.add("change");
        document.getElementById("hide").classList.remove("hide");
        x = 1;
    }else if(x == 1){
        document.getElementById("menu").classList.remove("change");
        document.getElementById("hide").classList.add("hide");
        x = 0;
    }
}
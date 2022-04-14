const myPole = document.getElementById("pole");
myElement.style.color = "red";

function myFunction(data) {
    if(data == 1){
        var element1 = document.getElementById("zumba");
        element1.classList.add("navlistActive");
    }

    if(data == 2){
        var element2 = document.getElementById("pole");
        element2.classList.add("navlistActive");

    }

    if(data == 3){
        var element3 = document.getElementById("yoga");
        element3.classList.add("navlistActive");
    }


    if(data == 4){
        var lala = document.querySelectorAll(".navListActive");

        for (let i = 0; i < element4.length; i++) {
            lala[i].classList.remove("navListActive")
        }
    }
}
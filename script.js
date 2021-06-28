
// declaring a variable sadFace


function evilFace() {
    const sadFace = document.getElementById("container");
    document.getElementById("sad-face-btn").addEventListener("click", function() {
        sadFace.classList.remove("face-container");
        sadFace.classList.add("face-container-sad");
        console.log("you shouldn't have done that!");
        document.getElementById("initial-face").src="imgs/sad.jpg";
        //while(true) {
        //    console.log("and again");
        //}
    });
}

evilFace();



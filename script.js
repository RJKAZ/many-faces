
// declaring a variable sadFace


function evilFace() {
    // declaring the container as a variable and making on onclick function that removes the class and adds another
    const sadFace = document.getElementById("container");
    document.getElementById("sad-face-btn").addEventListener("click", function() {
        sadFace.classList.remove("face-container");
        sadFace.classList.add("face-container-sad");
        // logging to the console
        console.log("you shouldn't have done that!");
        // this changes the img element
        document.getElementById("initial-face").src="imgs/sad.jpg";
        // this spins the img element
        document.getElementById("initial-face").classList.add("initial-face-spin");
    
        /*while(true) {
            console.log("Kiss your browser goodbye!");
        }
        */
       
    });
}

evilFace();

function movingFace() {
    const movingFace = document.getElementById("container");
    document.getElementById("face-move-btn").addEventListener("click", function(){
        movingFace.classList.remove("face-container");
        movingFace.classList.add("face-container-move");
        document.getElementById("initial-face").style.display = "none";
        var insaneImg = document.createElement("img");
        insaneImg.src="/imgs/insaneface.png";
        var src = document.getElementById("container");
        src.appendChild(insaneImg);
        insaneImg.classList.add("insane-face");

    })
}
movingFace();



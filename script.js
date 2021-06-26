document.getElementById("sad-face").addEventListener("click", function() {
    //document.getElementsByClassName('face-container').className = 'face-container-sad';
    let sadFace = document.getElementById("container");
    sadFace.classList.remove("face-container");
    sadFace.classList.add("face-container-sad");
    console.log("you shouldn't have done that!");
    document.getElementById("initial-face").src="imgs/sad.jpg";
    // this is the evil part
    //while(true) {
    //    console.log("and again");
    // }
})
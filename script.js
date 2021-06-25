document.getElementById("sad-face").addEventListener("click", function() {
    console.log("you shouldn't have done that!");
    document.getElementById("initial-face").src="imgs/sad.jpg";
    // this is the evil part
    while(true) {
        console.log("and again");
    }
})
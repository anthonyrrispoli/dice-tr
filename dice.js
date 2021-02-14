function RollSixSidedDice() {
    /* Creates the five dice with separate random values */
    document.getElementById("dice1").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice2").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice3").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice4").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice5").value = Math.floor(Math.random()*6) + 1;


     /* Updates image to show corresponding value */
    document.querySelector(".img1").setAttribute("src", 
        "dice-" + dice1.value + ".png"); 
  
    document.querySelector(".img2").setAttribute("src", 
        "dice-" + dice2.value + ".png"); 

    document.querySelector(".img3").setAttribute("src", 
        "dice-" + dice3.value + ".png"); 

    document.querySelector(".img4").setAttribute("src", 
        "dice-" + dice4.value + ".png"); 

    document.querySelector(".img5").setAttribute("src", 
        "dice-" + dice5.value + ".png"); 
}


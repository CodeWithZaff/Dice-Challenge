// let nameEntered1 = prompt("Enter your first player name");
// // let nameEntered2 = prompt("Enter the second  player name");
//     let nameReplace = document.querySelectorAll("p")[0];




function diceGame() {

    let randomeNumber1 = Math.random() * 6 + 1;
    randomeNumber1 = Math.floor(randomeNumber1);
    let randomeDiceImage = "dice" + randomeNumber1 + ".png";
    let randomeImageSource = "images/" + randomeDiceImage;

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomeImageSource);

    let randomeNumber2 = Math.floor(Math.random() * 6) + 1;

    let randomImageSource2 = "images/dice" + randomeNumber2 + ".png";

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);
 


    let result = document.getElementById("result");
    let p1_Box = document.querySelector(".player-1");
    let p2_Box = document.querySelector(".player-2");

    if (randomeNumber1 > randomeNumber2) {
        result.innerHTML = "Zafar is Winner 🎖️!"
        result.style.color = "#05BFDB"
        p1_Box.style.borderColor  = '#05BFDB'
        p2_Box.style.borderColor  = '#2C2C2C'
    }
    else if (randomeNumber1 == randomeNumber2) {
        result.innerHTML = "Draw 🥴!"
        result.style.color = "yellowgreen";
        p1_Box.style.borderColor  = '#yellowgreen';
        p2_Box.style.borderColor  = '#yellowgreen'
    }
    else {
        result.innerHTML = "Jahida is Winner 🎖️!"
        result.style.color = "#darkorange";
        p1_Box.style.borderColor  = '#darkorange';
        p2_Box.style.borderColor  = '#2C2C2C'
    }

}

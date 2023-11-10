let level = 0;
let gameSeq = [];
let userSeq = [];
let started = false;
let h2 = document.querySelector("h2");
let btns = ["box-1", "box-2", "box-3", "box-4"];
let boxes = document.querySelectorAll(".btn");
let score =-1;
let highScore=0;
let h3 = document.querySelector("h3");

document.querySelector("body").addEventListener("keypress", () => {
    if (started == false) {
        started = true;
        levelUp();
    }
})

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomBox = btns[randomNum()];
    let randomBtn = document.querySelector(`.${randomBox}`);
    gameSeq.push(randomBox);
    gameflash(randomBtn);
    score++;
}
function btnPress() {
    if (started == true) {
        let btn = this;
        userflash(btn);
        let userbtn = btn.getAttribute("id");
        userSeq.push(userbtn);
        checkAns(userSeq.length - 1);
    }
}

function randomNum() {
    let flashBox = Math.floor(Math.random() * 3);
    return flashBox;
}
function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 75)
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash")
    }, 75)
}
for (n of boxes) {
    n.addEventListener("click", btnPress);
}
function checkAns(indx) {
    if (userSeq[indx] == gameSeq[indx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 450)
        }
    } else {
        h2.innerText = `Game Over! Your score was ${level-1}. Press any key to restart the game`;
        document.querySelector("body").style.backgroundColor= "red"
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor= "white"
        },150)
        if(score> highScore){
            highScore = score;
            h3.innerText = `Highest Score : ${highScore}`
        }
        reset();
    }
}
function reset() {
    level = 0;
    started = false;
    gameSeq = [];
    userSeq = [];
    score=-1;
}
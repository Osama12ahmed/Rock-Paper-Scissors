let right = document.querySelector(".right");
let left = document.querySelector(".left");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let count1 = 0;
let count2 = 0;

function btn(src) {
    let randomNum = Math.floor(Math.random() * 3 + 1);
    right.setAttribute("src", `imges/6.png`);
    left.setAttribute("src", `imges/1.png`);
    right.classList.add("rotateR");
    left.classList.add("rotateL");

    setTimeout(() => {
        right.classList.remove("rotateR");
        left.classList.remove("rotateL");
        right.setAttribute("src", `${src}`);
        left.setAttribute("src", `imges/${randomNum}.png`);

        if (randomNum === 1 && src.includes("4.png")) {
            count1++;
            score2.innerText = count1;
        } else if (randomNum === 1 && src.includes("5.png")) {
            count2++;
            score1.innerText = count2;
        } else if (randomNum === 2 && src.includes("4.png")) {
            count2++;
            score1.innerText = count2;
        } else if (randomNum === 2 && src.includes("6.png")) {
            count1++;
            score2.innerText = count1;
        } else if (randomNum === 3 && src.includes("5.png")) {
            count1++;
            score2.innerText = count1;
        } else if (randomNum === 3 && src.includes("6.png")) {
            count2++;
            score1.innerText = count2;
        }
    }, 1000);
}

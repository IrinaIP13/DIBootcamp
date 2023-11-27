// 1 -------------------------
let stars = '* ';
for (let i = 0; i < 6; i++) {
    console.log(stars);
    stars=stars+'* ';
}

// 2 ------------------------
let starsArray = [];
for (let i = 0; i < 6; i++) {
    for (let j = 0; j <= i; j++) {
        starsArray[j] = '* ';
 }
 console.log(starsArray.join(''));
} 
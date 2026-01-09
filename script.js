score = 0;
cross = true;
audio= new Audio('music.mp3');
audiogo= new Audio('gameover.mp3');

setTimeout(() => {
    audio.play();
    
}, 1000);
document.onkeydown = function (e) {

    console.log("Key is:", e.key);
    if (e.key == "ArrowUp") {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino')

        setTimeout(() => {
            dino.classList.remove('animateDino')

        }, 1000);

    }


}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 60 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
            
        }, 1000);
    }
    else if (offsetX < 60 && cross) {
        score += 1;
        upadateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;

        }, 1000);
    }
}, 100);
function upadateScore(score) {
    scoreCount.innerHTML = "Your Score:" + score
}



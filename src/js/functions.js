function screenLimits() {
    if (theBall.x >= canvas.width) {
        theBall.x = canvas.width;
        theBall.sx = 0-theBall.sx;
    }
    if (theBall.x <= 0) {
        theBall.x = 0;
        theBall.sx = 0-theBall.sx;
    }
    if (theBall.y >= canvas.height) {
        theBall.y = canvas.height;
        theBall.sy = 0-theBall.sy;
        console.log(theBall.ballSpeed);
    }
    if (theBall.y <= 0) {
        theBall.y = 0;
        theBall.sy = 0-theBall.sy;
    }    
}
function collision(pX, pY, pw, ph, pBallX, pBallY, pBallR) {
    if (pBallY + pBallR <  pY) {
        return false;
    }
    else if (pBallY - pBallR > pY + ph) {
        return false;
    }
    else if(pBallX >pX + pBallR && pBallX < (pX + pw - pBallR)) {
        return true;
    }
}

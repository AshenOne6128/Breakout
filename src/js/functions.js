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
function collision(pPaddleX, pPaddleY, pPaddleW, pPaddleH, pBallX, pBallY, pBallR) {
/*     if (pBallY + pBallR <  pPaddleY) {
        return false;
    }
    else if (pBallY - pBallR > pPaddleY + pPaddleH) {
        return false;
    }
    else if(pBallX > pPaddleX + pBallR && pBallX < (pPaddleX + pPaddleW - pBallR)) {
        return true;
    }
 */
    //Check if ball is outside the box
    if (pBallY - pBallR > pPaddleY + pPaddleH) {
        return false;
    }
    if (pBallY + pBallR < pPaddleY) {
        return false;
    }
    if (pBallX + pBallR < pPaddleX) {
        return false;
    }
    if (pBallX - pBallR > pPaddleX + pPaddleW) {
        return false;
    }
    return true;
}

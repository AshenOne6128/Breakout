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

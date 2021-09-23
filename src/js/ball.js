class Ball {
    constructor(pSpeed) {
        this.x = 0;
        this.y = 0;
        this.sx = pSpeed;
        this.sy = pSpeed;
        this.ballSpeed = 0;
    }

    update() {
        this.x += this.sx;
        this.y += this.sy;
    }

    draw(pCtx) {
        pCtx.fillStyle = "yellow";
        pCtx.beginPath();
        pCtx.ellipse(theBall.x, theBall.y, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
        pCtx.fill();
        //pCtx.stroke();
    
    }
}
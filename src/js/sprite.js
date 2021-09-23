class Sprite {
    constructor(pImg, pX = 0, pY=0) {
        //this.img = new Image();
        this.src = pImg;
        this.x = pX;
        this.y = pY;
        this.spd = 0;
        this.angle = 0;
    }

    update() {

}

    draw(pCtx) {
        //pCtx.save();
        //pCtx.translate(this.img.width / 2, this.img.height / 2);
        //pCtx.translate(canvas.width / 2, canvas.height / 2);
       // pCtx.rotate(this.angle * Math.PI / 180);
        //pCtx.drawImage(this.img, 0, 0, this.img.width, this.img.height, this.x, this.y, this.img.width / 2, this.img.height / 2);
        //pCtx.restore();
        pCtx.drawImage(this.src, this.x, this.y);
    }


}

class paddle {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.sx = 1;
        this.sy = 1;
        this.w = 65;
        this.h = 10;
        this.resistance = 0.7;


    }

    update(dt) {

        if (KeyLeft == true) {
            this.sx -= 1;

        }
        else if (KeyRight == true) {
            this.sx += 1


        }
        else {
            this.sx = this.sx * this.resistance;
        }
        if (this.x < 0) {
            this.sx = 0;
            this.x = 0;
        }
        else if (this.x + this.w > canvas.width) {
            this.sx = 0;
            this.x = canvas.width - this.w;
        }
        else {
            
        }
        if (Math.abs(this.sx > 5)) {
            this.sx = 5;
        }
        this.x = this.x + this.sx
    }

    draw(pCtx) {
        pCtx.fillStyle = "white";
        pCtx.fillRect(this.x, this.y, this.w, this.h);
        

    }
}
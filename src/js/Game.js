console.log("Game !");

let KeyRight = false;
let KeyLeft = false;
let KeyUp = false;
let KeyDown = false;
let gameReady = false;
let lstSprites = [];

let theBall = new Ball(3);
theBall.x = 100;
theBall.y = 50;
theBall.ballSpeed = 3;

let thePaddle= new paddle();

let imageLoader = new ImageLoader();

function rnd(pMin, pMax) {
    return Math.floor(Math.random() * (pMax - pMin)) + pMin;
}

let timer;
let fps = 0;
let fps2 = 0;

function keyPressed(t) {
    t.preventDefault();
    if (t.code == "ArrowRight") {
        KeyRight = true;
    }
    if (t.code == "ArrowLeft") {
        KeyLeft = true;
    }
    if (t.code == "ArrowUp") {
        KeyUp = true;
    }
    if (t.code == "ArrowDown") {
        KeyDown = true;
    }
}

function keyReleased(t) {
    t.preventDefault();
    if (t.code == "ArrowRight") {
        KeyRight = false;
    }
    if (t.code == "ArrowLeft") {
        KeyLeft = false;
    }
    if (t.code == "ArrowUp") {
        KeyUp = false;
    }
    if (t.code == "ArrowDown") {
        KeyDown = false;
    }
}

function load() {
    document.addEventListener("keydown", keyPressed, false);
    document.addEventListener("keyup", keyReleased, false);
    timer = 0;
    //exemple : imageLoader.add("/src/img/Attack (1).png");
    imageLoader.start(startGame);

    thePaddle.x = (canvas.width / 2) - (45 / 2);
    thePaddle.y = canvas.height * 0.85;

    gameReady = true;
}

function startGame() {
    lstSprites = [];
    for (let image of Object.values(imageLoader.getListImages())) {
        let mySprite = new Sprite(image);
        mySprite.x = rnd(1, 800);
        mySprite.y = rnd(1, 600);
        lstSprites.push(mySprite);
    }
    gameReady = true;
}

function update(dt) {
    if (!gameReady) {
        return;
    }
    timer += dt;
    fps = fps + 1;
    if (timer >= 1) {
        fps2 = fps;
        fps = 0;
        timer = 0;
    }
    /*  
        if (KeyRight == true) {
        }  
        if (KeyLeft == true) {
        }  
        if (KeyUp == true) {
        }  
        if (KeyDown == true) {
        }
     */
        theBall.update();
        screenLimits();
        thePaddle.update(dt);
}

function draw(pCtx) {
    if (!gameReady) {
        return;
    }
    pCtx.fillStyle = "white";
    pCtx.fillText("FPS : " + fps2, 10, 10);
    lstSprites.forEach(CurentSprite => {
        CurentSprite.draw(pCtx);
    })

    theBall.draw(pCtx);
    thePaddle.draw(pCtx);

}
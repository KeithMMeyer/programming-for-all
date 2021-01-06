var img;

var x = 50;
var y = 50;
var dir = 0;

var realX = 50;
var realY = 50;
var realDir = 0;

function init(){
    setInterval(render, 300);
    img = new Image();
    img.src = "https://spicyyoghurt.com/img/tutorials/develop_a_html5_game/sprite_animation.png";
    img.decode();

}

function reset(){

}

function start(){

}

function tick(){

    if(x == realX && y == realY){
        return true;
    }

    if(realX != x)
        realX += x > realX ? 1 : -1;
    if(realY != y)
        realY += y > realY ? 1 : -1;

    return false;

}

function render(){
    //console.log("Render " + x + " " + y);
    let c = document.getElementById("resultCanvas");
    let ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);

    ctx.beginPath();
    ctx.rect(realX, realY, 200, 200);

    let frameWidth = 50;
    let frameHeight = 61;

    // Rows and columns start from 0
    let row = 1;
    let column = 3;

    ctx.drawImage(img, column*frameWidth, row*frameHeight, frameWidth, frameHeight, realX, realY, 200, 200);
    //ctx.drawImage(img, realX, realY, 200, 200);
    ctx.stroke();
}

function move(){
    console.log("Move " + x);
    if(dir % 180 == 0){
        x += dir == 0 ? 50 : -50;
    } else {
        if(dir % 90 == 0)
            y += dir == 90 ? -50 : 50;
    }
}

function turn(direction){
    console.log("Turn " + direction);
    dir += direction == "RIGHT" ? -90 : 90;
    dir %= 360;
}
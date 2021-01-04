var x = 50;
var y = 50;
var dir = 0;

function init(){
    setInterval(render, 300);
}

function reset(){

}

function start(){

}

function tick(){
    //render();

}

function render(){
    //console.log("Render " + x + " " + y);
    var c = document.getElementById("resultCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);

    ctx.beginPath();
    ctx.rect(x, y, 200, 200);
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

    tick();
}

function turn(direction){
    console.log("Turn " + direction);
    dir += direction == "RIGHT" ? -90 : 90;
    dir %= 360;
    tick();
}
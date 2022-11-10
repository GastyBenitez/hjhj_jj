//LOOP//

var time = new Date();
var deltaTime = 0;

if(document.readyState === "complete" || document.readyState === "interactive"){
    setTimeout(Init,1);
}else{
    document.addEventListener("DOMContentLoaded", Init);
}

function Init(){
    time = new Date();
    Start();
    Loop();
}

function Loop(){
    deltaTime = (new Date() - time) / 1000;
    time = Date()
    Update()
    requestAnimationFrame(Loop);
}

//GAME//

var floorY = 22;
var velY = 0;
var impulse = 900;
var gravity = 2500;

var dinoPosX =  42;
var dinoPosY = floorY;

var floorX = 0;
var velStage = 1280/3;
var gameVel = 1;
var score = 0;

var still = false;
var jumping = false;

var container;
var dino; 
var textScore;
var floor;
var gameOver;





function Start(){
    gameOver = document.querySelector(".game-over");
    floor = document.querySelector(".floor");
    container = document.querySelector(".container");
    textScore = document.querySelector(".score");
    dino = document.querySelector(".dino");
}


function Update(){

    MoveFloor();

}

function MoveFloor(){
    floorX += calculateOffset();
    floor.style.left = -(floorX % container.clientWidth) + "px"
}

function calculateOffset(){
    return velStage * deltaTime * gameVel; 
}


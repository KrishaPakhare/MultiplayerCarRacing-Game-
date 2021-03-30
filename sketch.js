var ball;
var database , position;
var form , game , player ;
var gameState=0;
var playerCount ;
var allPlayers;
var car1 , car2 , car3 , car4;
var cars;

function setup(){
    createCanvas(windowWidth-30 , windowHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background("pink");
    if(playerCount===4){
        gameState=1;
        game.update(1)
    }
    if(gameState===1){
        game.play();
    }
   
}


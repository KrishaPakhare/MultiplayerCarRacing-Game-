class Game{
    constructor(){

    }
 getState(){
     database.ref("gameState").on("value",(data)=>{
     gameState=data.val();
    })
 }  
 update(state){
     database.ref("/").update({
         gameState: state
     })
 } 
 start(){
     if (gameState===0){
         player = new Player();
         player.getCount();
         form = new Form ();
         form.display();
         
     }
     car1 = createSprite(100,200);
     car2 = createSprite(300,200);
     car3 = createSprite(500,200);
     car4 = createSprite(700,200);
     cars =[car1 , car2, car3 , car4];

 }
 play(){
     Player.getPlayerInfo();
     form.hide();
     textSize(30);
     text("Game Start",120,100);
     if(allPlayers !== undefined){
         var yPosition = 130;
         var i = 0;
         var x = 0;
         var y ;
        for(var index in allPlayers){
        // i = Index No.of "cars"array
        i = i+1;
        x=x+150;
        y=height-allPlayers[index].distance;
        cars[i-1].x=x; 
        cars[i-1].y=y;
        if(i===player.index){
            cars[i-1].shapeColor = "red";
            camera .position.x = width/2 ;
            camera.position.y = y;
        }

        }
        if(keyIsDown(UP_ARROW)&& player.index !=null){
            player.distance += 10;
            player.update();

        }
        drawSprites(); 
     
     }
    
 }


    
}
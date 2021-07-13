var player;
var tower1, tower2;
var edges;

function setup(){

    createCanvas(800,800);
    player=createSprite(300,300,50,50);
    player.shapeColor="red";
tower1= createSprite(500,800,100,600);
tower1.shapeColor="green";
tower2= createSprite(700,800,100,600);
tower2.shapeColor="green";

}

function draw(){
background(200);
edges= createEdgeSprites();
//camera.position.y=player.y; 
/*if(keyCode===38){
    bounceTower();
}*/
 bounceTower();
 var d = dist(player.x,player.y+player.height/2,tower1.x,tower1.y-(tower1.height/2));
 var d1=dist(player.x+player.width/2,player.y,tower1.x-tower1.width/2,tower1.y);
 var d2=dist(player.x,player.y,tower1.x,tower1.y)
/*if(player.x < tower1.x + tower1.width &&
    player.x + player.width > tower1.x &&
    player.y < tower1.y + tower1.height &&
    player.y + player.height > tower1.y) 
     // collision detected!*/
 if(d===0||d<25|| d1===0||d1<20||d2===0||d2<30)

{

    /*player.y=tower1.y+tower1.height/2;
    player.velocityY=0;
    player.velocityX=0;*/
    player.collide(tower1);
    player.velocityY=0;
    player.velocityX=0;
    if(keyIsDown(32))
    {
     bounceTower();
    }
}
player.bounceOff(edges[2], scollided);


drawSprites();
}

function scollided(){
    player.shapeColor="blue";
    player.velocityX=0;
    player.velocityY=0;
    /*if(player.isTouching(edges[2])){
        player.velocityY=4;
    }*/ 
   

}

function bounceTower()
{
    if(keyIsDown(32) ){
        player.velocityX=5;
        player.velocityY=-5;
    
    }
      else{
        player.velocityY= player.velocityY+0.8;
    }
}


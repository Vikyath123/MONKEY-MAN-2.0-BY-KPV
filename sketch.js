
var monkey , monkey_running,monkeyImage;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  monkeyImage=loadImage("sprite_0.png");
 
}



function setup() {
   createCanvas(600,400);
  monkey=createSprite(300,250,10,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2
  monkey.x=50;
  
  ground=createSprite(300,350,700,20);

   bananaGroup = createGroup(); 
  obstacleGroup = createGroup();

}


function draw() {
   background("white")
  
  
  bananaJoe();
  rock();
   monkey.velocityY = monkey.velocityY + 0.5;
  
  monkey.collide(ground);
  
  if(keyDown("space")){
     monkey.velocityY = -10
     }
  if(monkey.isTouching(bananaGroup)){
     bananaGroup.destroyEach();
     }
  if(monkey.isTouching(obstacleGroup)){
    monkey.velocityY=0;
  }
   
  drawSprites();
}
function bananaJoe(){
   if (frameCount % 230 == 0) {
 var banana=createSprite(600,60,10,10); 
  banana.addImage("banana",bananaImage);
  banana.velocityX = -3;
     banana.scale=0.2
      bananaGroup.add(banana);
     banana.lifeTime=200;
   }
}
function rock(){
   if (frameCount % 500 == 0) {
     var obstacle=createSprite(600,300,10,10);
     obstacle.addImage("rock",obstaceImage);
     obstacle.scale=0.2
     obstacle.velocityX= -3;
     obstacleGroup.add(obstacle);
     obstacle.lifeTime=200
   }
  
}







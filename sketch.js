var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 20, 80, 30);
  movingRect.shapeColor="cyan";
  //movingRect.debug="true";
  
  fixedRect=createSprite(600,400,50,80);
  fixedRect.shapeColor="cyan";
  //fixedRect.debug="true";
}

function draw() {
  background("black");  



  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;


  if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
    ) {
      movingRect.shapeColor="red";
      fixedRect.shapeColor="red";
    }
   else {
    fixedRect.shapeColor="cyan";
    movingRect.shapeColor="cyan";
   }
  drawSprites();
}
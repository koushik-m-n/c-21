var fixedRect,movingRect;


function setup {
  fixedRect(400,200,50,80);
fixedRect.shapeColor='green';
fixedRect.debug='true';
movingRect(400,200,80,30);
movingRect.shapeColor='green';
movingRect.debug='true';

fixedRect.velocityY=-6;
movingRect.velocityY=+6;
}
function draw {
  if (movingRect.x -fixedRect.x< fixedRect.width/2+ movingRect.width/2
    && fixedRect.x -movingRect.x< fixedRect.width/2 +movingRect.width/2) {
  movingRect.velocityX= movingRect.velocityX*(-1);
  fixedRect.velocityX=fixedRect.velocityX*(-1);
}
if (movingRect.y-fixedRect.y <fixedRect.height/2+movingRect.height/2
  && fixedRect.y- movingRect.y< fixedRect.height/2+movingRect.height/2){
  movingRect.velocityY=movingRect.velocityY*(-1);
  fixedRect.velocityY= fixedRect.velocityY*(-1);
}
drawSprites();
}

var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
speed=random(50,90)
weight=random(400,1500)
bullet=createSprite(50,200,50,50);
wall=createSprite(1300,200,60,height/2);
bullet.velocityX = speed;


}

function draw() {
  background(255,255,255);  
  if (wall.x - bullet.x < bullet.width/2 + wall.width/2
    && bullet.x - wall.x < bullet.width/2 +wall.width/2){

     
   
    bullet.velocityX=0;
  
    
    }

   
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge+lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }

  return false;
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var  d = 0.5*weight*speed*speed/(thicknesswall*thicknesswall*thicknesswall);
if(d>10)
{
  wall.shapeColor=color(255,0,0);
}
if(d<10)
{
  wall.shapeColor=color("blue");
}
}

}

var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
speed=random(200,300)// 200
weight=random(30,55)//35
thickness=random(20,85)//50
bullet=createSprite(50,200,50,50);
wall=createSprite(1200,200,thickness,height/2);
bullet.velocityX = speed;


}

function draw() {
  background("white");  
  
    if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var  d = 0.5*weight*speed*speed/(thickness*thickness*thickness);
if(d>10)
{
  wall.shapeColor=color(255,0,0);
}
if(d<10)
{
  wall.shapeColor=color("blue");
}

  
    
    }

   
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }

  return false;


}

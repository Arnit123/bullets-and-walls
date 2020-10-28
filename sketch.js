var bullet,wall,speed,weight,thickness;

//mam plz check why is this not working
function setup() {
createCanvas(1600,400);

bullet = createSprite(400, 200, 40, 10);
bullet.shapeColor = "white"
bullet.velocityX = speed;

wall = createSprite(1200,200,thickness,height/2);

}

function draw() {
  background(0,0,0);  
  
  thickness = random(22,83)
  speed=random(223,321);
 weight=random(30,52); 

if(isTouching(wall,car)){
bullet.velocityX = speed;s
var damage = 0.5 * weight * speed * speed/thickness*thickness*thickness;
if(damage>10)
{
  bullet.shapeColor = "red";
}
  if(damage<10)
{
  bullet.shapeColor = "green";
}
  drawSprites();
}
}

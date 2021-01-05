var wall, thickness
var bullet,speed, weight
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,50)
  bullet.shapeColor = (255)
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80,80,80)
  thickness=random(22,83)
  damage = 0
  speed = random(223,321)
  weight = random(30,52)
}

function draw() {
  background(255,255,255); 
  
  bullet.velocityX = speed

  wall.depth = bullet.depth
  
  if(bullet.collide(wall)){
    damage = ((0.5 * weight * speed * speed) / (thickness*thickness*thickness))
    bullet.velocityX = -1
  }

  if (damage === 0){
    bullet.shapeColor = "white"
  }

  if(damage>0 && damage < 10){
    bullet.shapeColor = "green"
  }
  
  else{
    bullet.shapeColor = "red"
  }
  
  drawSprites();
}
var backgroundImg;
var superhero, superheroImage, superheroShoot;
var alienImage, alienRun, alienShoot, alien, alienGroup;
var spaceship, spaceshipImage;
var invisibleGround;
function setup() {
  createCanvas(windowWidth, windowHeight);
 superhero = createSprite(width-1600, height-200);
 superhero.addImage(superheroImage);
 superhero.scale = 0.5;

 alienGroup = new Group();
 
invisibleGround = createSprite(width/2, height-90, width, 10);
invisibleGround.shapeColor="red"


 spaceship = createSprite(width-300, height-450);
 spaceship.addImage(spaceshipImage);

 
}

function draw() {
  background(backgroundImg);

    spawnSprites();
  drawSprites();
}
function preload(){
 backgroundImg = loadImage("images/backgroundImage.png")
 superheroImage = loadImage("images/superheroImage.png");
 superheroShoot = loadAnimation("images/superheroShoot.png");
 alienRun = loadAnimation("images/alien_green/ALIEN1.png" , "images/alien_green/ALIEN2.png");
 alienShoot = loadAnimation("images/alien_green/ALIENSHOOT.png");
 alienImage = loadAnimation("images/alien_green/ALIEN1.png");
 alienRun = loadAnimation("images/alien_green/ALIEN1.png", "images/alien_green/ALIEN2.png");
 spaceshipImage = loadImage("images/spaceship.png");

 
}
function spawnSprites(){
  if(frameCount % 50 === 0){
    alien = createSprite(width-300, height-450);
    alien.addAnimation("alien_image", alienImage);
    alien.addAnimation("alien_run", alienRun);
    alien.scale = 0.5
   
    alienGroup.add(alien);
    for(var i = 0; i < alienGroup.length; i++){

    
alienGroup.get(i).velocityY = +5;
if(alienGroup.get(i).isTouching(invisibleGround)){
 
  //alienGroup.get(i).collide(invisibleGround);
  alienGroup.get(i).velocityY = 0;
  alienGroup.get(i).velocityX = -3;
  console.log("y = "+ alienGroup.get(i).velocityY+"i= "+i);
  console.log("x = "+ alienGroup.get(i).velocityX+"i= "+i);
  alienGroup.get(i).changeAnimation("alien_run", alienRun);
}
console.log("y mm= "+ alienGroup.get(i).velocityY+"i= "+i);
console.log("x mm= "+ alienGroup.get(i).velocityX+"i= "+i);
    }
  }

}
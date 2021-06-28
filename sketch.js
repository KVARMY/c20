var canvas, bg;
var together;
var tom, tomImg1, tomImg2, tomImg3;
var jerry, jerryImg1, jerryImg2, jerryImg3;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1 = loadImage("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    tomImg3 = loadImage("images/cat4.png");
    jerryImg1 = loadImage("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerryImg3 = loadImage("images/mouse4.png");
    //load the images here
}

function setup(){
  canvas = createCanvas(1000,800);

  tom = createSprite(870, 600);
  tom.addImage(tomImg1);
  tom.scale = 0.2;
  jerry = createSprite(200, 600);
  jerry.addImage(jerryImg1);
  jerry.scale = 0.5;

    //create tom and jerry sprites here

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x -jerry.x < (tom.width- jerry.width)/2){
        tom.velocityX = 0 ;
        tom.addAnimation("tom's last Image",tomImg3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tom's last Image", tomImg3);

        jerry.addAnimation("Jerry Image", jerryImg3);
        jerry.changeAnimation("jerry Image", jerryImg3);
        jerry.scale = 0.15;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    tom.velocityX = -5;
    tom.addAnimation("Tom Running", tomImg2);
    tom.changeAnimation("Tom Running", tomImg2);

    jerry.addAnimation("Jerry runnning", jerryImg2);
    jerry.frameDelay= 25;
    jerry.changeAnimation("Jerry running",jerryImg3);

}

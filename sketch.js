var mObj,fObj;

function setup() {
  createCanvas(800,400);
  mObj = createSprite(600, 200, 100, 50);
  fObj = createSprite(200, 200, 50, 100);
  mObj.shapeColor = "green";
  fObj.shapeColor = "green";
  mObj.debug = true;
  fObj.debug = true;
}

function draw() {
  background(255,255,255);
  mObj.x = mouseX;
  mObj.y = mouseY; 
  console.log(fObj.width/2+mObj.width/2);
  console.log(mObj.x-fObj.x);
  console.log(fObj.x-mObj.x);
  if(mObj.x-fObj.x < fObj.width/2+mObj.width/2 &&
    fObj.x-mObj.x < fObj.width/2+mObj.width/2 &&
    mObj.y-fObj.y < fObj.width/2+mObj.width/2 &&
    fObj.y-mObj.y < fObj.width/2+mObj.width/2){
    mObj.shapeColor = "red";
  fObj.shapeColor = "red";
  }
  else{
    mObj.shapeColor = "green";
  fObj.shapeColor = "green";
  }
  drawSprites();
}
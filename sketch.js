var hr, mn, sc, hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(displayWidth,displayHeight);
  angleMode(DEGREES);   
}

function draw() {
  background("black"); 
  
  hr = hour();
  mn = minute();
  sc = second();


  fill("white");
  noStroke();
  textSize(20);
  text(hr + ":" + mn + ":" + sc , 400,200);

  
  translate(300,800);
  rotate(-90);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);

  push();
  rotate(scAngle); 
  stroke("red");
  strokeWeight(7);
  line(400,300,450,400);
  pop()

  // stroke(255,0,255);
  //   point(300,400)


    strokeWeight(10);
    noFill();
    
    stroke(255,0,0);
    arc(400,400,300,300,0,scAngle);





  drawSprites();
}
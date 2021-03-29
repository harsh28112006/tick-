
var scAngle,mnAngle,hrAngle

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  translate(200,200)
  rotate(-90)
  hr = hour()
mn = minute()
sc = second() 
  angleMode(DEGREES)
  noFill()
  stroke(255,0,0)
  strokeWeight(7)
  scAngle = map(sc,0,59,0,360)
  arc(0,0,300,300,0,scAngle)
 
  stroke(0,255,0)
  mnAngle = map(mn,0,59,0,360)
  arc(0,0,280,280,0,mnAngle)
  stroke(0,0,255)
  hrAngle = map(hr%12,0,12,0,360)
  arc(0,0,260,260,0,hrAngle)
  //line(200,200,300,300)
 // translate(scAngle.position.x,scAngle.position.y)
 push()
 rotate(scAngle)
 stroke(255,0,0)
 line(0,0,100,0)
 pop()

 push()
 rotate(mnAngle)
 stroke(0,255,0)
 line(0,0,100,0)
 pop()

 push()
 rotate(hrAngle)
 stroke(0,0,255)
 line(0,0,100,0)
 pop()

 stroke(255)
 point(0,0)
  drawSprites();

}
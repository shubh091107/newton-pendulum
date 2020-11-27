
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint ;

var bob1
var bob2
var bob3
var bob4
var bob5
var base1
var ch1
var ch2
var ch3
var ch4
var ch5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(200,400)
	bob2 = new Bob(300,400)
	bob3 = new Bob(400,400)
	bob4 = new Bob(500,400)
	bob5 = new Bob(600,400)
	base1 = new Base(400,200,400,50)
	ch1 = new Chain(bob3.body,base1.body,0,0)
	ch2 = new Chain(bob1.body,base1.body,-110,0)
	ch3 = new Chain(bob2.body,base1.body,-60,0)
	ch4 = new Chain(bob4.body,base1.body,60,0)
	ch5 = new Chain(bob5.body,base1.body,110,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  keyPressed()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  base1.display()
  ch1.display()
  ch2.display()
  ch3.display()
  ch4.display()
  ch5.display()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(bob5.body,bob5.body.position,{x:-50,y:-45})
	}
}


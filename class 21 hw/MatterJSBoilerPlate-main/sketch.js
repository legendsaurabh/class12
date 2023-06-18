
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var ball_options={
	isStatic:false,
	rstitution:0.3,
	friction:0,
    density:1.2
}

function preload()
{
	groundObj=new ground(width/2,670,width,20);
	leftSide=new ground(1100,600,20,120);
}

function setup() {
	createCanvas(800, 700);


	engine = engine.create();
	World = Engine.world;

	ground.Bodies=rect(790,10,800,20);
     

	engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display();
  
  drawSprites();
 
}




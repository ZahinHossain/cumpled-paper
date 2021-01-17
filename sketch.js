
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	pole=createSprite(450,625,20,70);
	pole.shapeColor='red'

	pole1=createSprite(420,650,70,20);
	pole1.shapeColor='red'

	pole2=createSprite(375,625,20,70);
	pole2.shapeColor='red'

	paper=createSprite(200, 600, 20,20);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




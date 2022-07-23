
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 const Body = Matter.Body;

var engine,world;
var paper;
var dustbin1;
var dustbin2;

var ground;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
    paper= new Paper(100,400,20);
    ground = new Ground(0,height,2500,50);
    dustbin1= new Dustbin(1000,400,30,200)
    dustbin2= new Dustbin(800,400,30,200)
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();

 dustbin1.display();
 dustbin2.display();

 ground.display();
 paper.display();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30});
  }
}





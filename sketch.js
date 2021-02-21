
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	stone= new Stone(235,420,30);
	mango1=new mango(1100,100,30);
	mango2=new mango(1050,120,30);
	mango3=new mango(1150,200,30);
	mango4=new mango(1000,120,30);
	mango5=new mango(1100,100,30);
	mango6=new mango(900,210,30);
	mango7=new mango(1100,250,30);
	mango8=new mango(1200,100,30);
	mango9=new mango(950,150,30);
	mango10=new mango(1000,200,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	launcher = new Launcher(stone.body,{x:235,y:420});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
  launcher.display();
  groundObject.display();
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,mango10)

}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launcher.attach(stone.body);
	}
  }
function detectCollision(stone,mango){
	mangoPos = mango.body.position;
	stonePos = stone.body.position;
	var dis = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)
	if(dis <= mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}
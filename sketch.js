const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground, box2;

function setup()
{
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var ground_options={
        isStatic: true
    }
     ground=Bodies.rectangle(200,387,200,20,ground_options)
     World.add(world,ground);
    box1 = new Box(200,200,50,50);
    box2= new Box(100,100,20,20);
   
}

function draw()
{
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    box1.display();
    box2.display();

}
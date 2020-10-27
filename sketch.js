const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

 var box1,box2,pig,log,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);

    box1= new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig = new Pig(810,350);
    log = new Log(810,260,300,90);


    box3= new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig1 = new Pig(790,220);
    log1 = new Log(810,180,300,90);

    bird= new Bird();

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
 
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    box3.display();
    box4.display();
    pig1.display();
    log1.display();

    bird.display();
    
 
}
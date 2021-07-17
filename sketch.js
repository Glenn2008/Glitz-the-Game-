const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pc;

function setup(){
    var canvas = createCanvas(1520,500);
    engine = Engine.create();
    world = engine.world;
   
    ground = new Ground(600,height,2000,10);
    
    pc= new Pc(130,499);
}

  function draw(){
    background(0,200,255) 
   
    Engine.update(engine);
    
    ground.display();
  
    pc.display();       
}






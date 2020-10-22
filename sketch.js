const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight = 200;

function setup() {
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  
  for(var i=0; i<width;i=i+79){
    divisions.push(new Division(i,600,10,200))
  }

  for(var j=100; j<450;j=j+100){
    for(var i=40;i<=width;i=i+80){
      plinkos.push(new Plinko(i,j))
    }
  }
  
  for(var j=50; j<450;j=j+100){
    for(var i=0;i<=width;i=i+80){
      plinkos.push(new Plinko(i,j))
    }
  }

}

function draw() {
  background(0);  
  Engine.update(engine)

  ground.display();
  
  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
  }

  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }

  if(frameCount%60==0){
    particles.push(new Particle(random(0,400),0))
    console.log(particles)
  }

  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }
  
}